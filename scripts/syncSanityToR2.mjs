import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1s3zgmg6';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const R2_UPLOAD_ENDPOINT = 'http://ax-media.ax-engineering.workers.dev/upload';
const SYNC_SECRET = 'ax-r2-sync-secure-token-2024';
const R2_PUBLIC_BASE = 'https://pub-7ce7718d2d8f41d5bc61f3b85a63ce05.r2.dev';

async function syncAllImages() {
  console.log(`[R2 Sync] Querying Sanity image assets from project ${projectId} (${dataset})...`);
  const assets = await sanity.fetch(`*[_type == "sanity.imageAsset"]{
    _id,
    url,
    originalFilename,
    mimeType,
    size
  }`);

  console.log(`[R2 Sync] Found ${assets.length} image assets in Sanity.`);

  let synced = 0;
  let skipped = 0;
  let failed = 0;

  for (const asset of assets) {
    if (!asset.url) continue;

    // Sanity URL pattern: https://cdn.sanity.io/images/1s3zgmg6/production/<filename>
    const filename = asset.url.split('/').pop();
    const r2Key = `sanity/${filename}`;
    const r2Url = `${R2_PUBLIC_BASE}/${r2Key}`;

    // Check if already in R2
    try {
      const headRes = await fetch(r2Url, { method: 'HEAD' });
      if (headRes.ok && parseInt(headRes.headers.get('content-length') || '0', 10) > 1000) {
        console.log(`[R2 Sync] Already synced: ${filename} (${headRes.headers.get('content-length')} bytes)`);
        skipped++;
        continue;
      }
    } catch {
      // Continue to download and upload
    }

    console.log(`[R2 Sync] Downloading from Sanity: ${asset.url}`);
    try {
      const res = await fetch(asset.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      if (!res.ok) {
        console.error(`[R2 Sync] Failed to download ${asset.url}: HTTP ${res.status}`);
        failed++;
        continue;
      }

      const contentType = res.headers.get('content-type') || asset.mimeType || 'image/jpeg';
      const arrayBuffer = await res.arrayBuffer();

      console.log(`[R2 Sync] Uploading ${filename} (${arrayBuffer.byteLength} bytes) to Cloudflare R2...`);
      const uploadRes = await fetch(`${R2_UPLOAD_ENDPOINT}/${r2Key}`, {
        method: 'PUT',
        headers: {
          'X-Sync-Secret': SYNC_SECRET,
          'Content-Type': contentType
        },
        body: arrayBuffer
      });

      if (uploadRes.ok) {
        const data = await uploadRes.json();
        console.log(`[R2 Sync] Successfully synced to R2: ${data.publicUrl}`);
        synced++;
      } else {
        const errText = await uploadRes.text();
        console.error(`[R2 Sync] Failed to upload ${filename}: ${uploadRes.status} ${errText}`);
        failed++;
      }
    } catch (err) {
      console.error(`[R2 Sync] Error syncing ${filename}:`, err.message);
      failed++;
    }
  }

  console.log(`\n[R2 Sync Completed] Synced: ${synced}, Already existing: ${skipped}, Failed: ${failed}`);
}

syncAllImages().catch((err) => {
  console.error('[R2 Sync Fatal]', err);
  process.exit(1);
});
