const R2_PUBLIC_BASE = 'https://pub-7ce7718d2d8f41d5bc61f3b85a63ce05.r2.dev';
const R2_UPLOAD_ENDPOINT = 'http://ax-media.ax-engineering.workers.dev/upload';
const SYNC_SECRET = 'ax-r2-sync-secure-token-2024';
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1s3zgmg6';
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// In-memory cache of synced files during process lifetime
const syncedAssets = new Set<string>();

/**
 * Extracts clean Sanity asset filename from URL, asset _ref, or filename.
 * Example ref: "image-cad79c0168ef90087ed11d807b44ff2c7168bf47-1600x1067-jpg" -> "cad79c0168ef90087ed11d807b44ff2c7168bf47-1600x1067.jpg"
 * Example url: "https://cdn.sanity.io/images/1s3zgmg6/production/cad79c0168ef90087ed11d807b44ff2c7168bf47-1600x1067.jpg?w=1600" -> "cad79c0168ef90087ed11d807b44ff2c7168bf47-1600x1067.jpg"
 */
export function extractSanityFilename(source: any): string | null {
  if (!source) return null;

  if (typeof source === 'string') {
    // Check if it's already an R2 URL
    if (source.includes('pub-7ce7718d2d8f41d5bc61f3b85a63ce05.r2.dev/sanity/')) {
      const match = source.match(/\/sanity\/([^?#]+)/);
      return match ? match[1] : null;
    }

    // Check if it's a Sanity CDN URL
    if (source.includes('cdn.sanity.io/images/')) {
      const clean = source.split('?')[0].split('#')[0];
      const parts = clean.split('/');
      return parts[parts.length - 1] || null;
    }

    // Check if it's a Sanity image asset ref string: image-<hash>-<dimensions>-<ext>
    if (source.startsWith('image-')) {
      return refToFilename(source);
    }

    return null;
  }

  // Check if it's a Sanity image object with asset._ref
  if (source.asset?._ref && typeof source.asset._ref === 'string') {
    return refToFilename(source.asset._ref);
  }

  // Check if it's an expanded asset object with url
  if (source.asset?.url && typeof source.asset.url === 'string') {
    return extractSanityFilename(source.asset.url);
  }

  return null;
}

function refToFilename(ref: string): string | null {
  // Pattern: image-[assetId]-[dimensions]-[extension]
  // Example: image-cad79c0168ef90087ed11d807b44ff2c7168bf47-1600x1067-jpg
  const parts = ref.split('-');
  if (parts.length >= 4 && parts[0] === 'image') {
    const ext = parts.pop();
    const assetIdAndDim = parts.slice(1).join('-');
    return `${assetIdAndDim}.${ext}`;
  }
  return null;
}

/**
 * Returns the Cloudflare R2 URL for a given Sanity asset or URL.
 */
export function getR2ImageUrl(filename: string): string {
  return `${R2_PUBLIC_BASE}/sanity/${filename}`;
}

/**
 * Automatically mirrors the asset from Sanity CDN to Cloudflare R2 if not already synced.
 * Non-blocking / fire-and-forget safe.
 */
export async function autoMirrorToR2(filename: string): Promise<string> {
  const r2Key = `sanity/${filename}`;
  const r2Url = `${R2_PUBLIC_BASE}/${r2Key}`;

  // If already known to be in R2, return instantly
  if (syncedAssets.has(filename)) {
    return r2Url;
  }

  try {
    // Check if already in R2 via HEAD
    const headRes = await fetch(r2Url, { method: 'HEAD', cache: 'no-store' });
    if (headRes.ok && parseInt(headRes.headers.get('content-length') || '0', 10) > 100) {
      syncedAssets.add(filename);
      return r2Url;
    }

    // Newly uploaded image: fetch from Sanity CDN with proper headers
    const sanityUrl = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${filename}`;
    const res = await fetch(sanityUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 AX-Engineering-R2-Sync/1.0',
      },
    });

    if (!res.ok) {
      console.warn(`[R2 AutoMirror] Upstream fetch failed for ${filename}: HTTP ${res.status}`);
      return sanityUrl; // Fallback to Sanity CDN
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    // Upload to Cloudflare R2 through Worker media pipeline
    const uploadRes = await fetch(`${R2_UPLOAD_ENDPOINT}/${r2Key}`, {
      method: 'PUT',
      headers: {
        'X-Sync-Secret': SYNC_SECRET,
        'Content-Type': contentType,
      },
      body: buffer,
    });

    if (uploadRes.ok) {
      syncedAssets.add(filename);
      console.log(`[R2 AutoMirror] Successfully mirrored to R2: ${r2Url}`);
      return r2Url;
    } else {
      console.warn(`[R2 AutoMirror] Upload to R2 returned ${uploadRes.status}`);
    }
  } catch (err: any) {
    console.error(`[R2 AutoMirror] Error mirroring ${filename}:`, err?.message || err);
  }

  // Graceful fallback to R2 URL (or Sanity CDN if upload failed)
  return r2Url;
}
