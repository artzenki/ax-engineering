import { NextRequest, NextResponse } from 'next/server';
import { autoMirrorToR2, extractSanityFilename } from '@/lib/r2Sync';

/**
 * Sanity Webhook Handler:
 * Listens for document/asset creation or modification events in Sanity.
 * Automatically mirrors any newly uploaded images to Cloudflare R2 bucket.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Find all image references in the webhook payload recursively
    const foundFilenames = new Set<string>();

    function extractImages(obj: any) {
      if (!obj) return;
      if (typeof obj === 'string') {
        const fn = extractSanityFilename(obj);
        if (fn) foundFilenames.add(fn);
        return;
      }
      if (Array.isArray(obj)) {
        for (const item of obj) extractImages(item);
        return;
      }
      if (typeof obj === 'object') {
        const fn = extractSanityFilename(obj);
        if (fn) foundFilenames.add(fn);

        for (const key of Object.keys(obj)) {
          extractImages(obj[key]);
        }
      }
    }

    extractImages(body);

    const filenames = Array.from(foundFilenames);
    console.log(`[Sanity Webhook] Received event with ${filenames.length} images to mirror to R2.`);

    const results: Array<{ filename: string; r2Url: string }> = [];
    for (const filename of filenames) {
      const r2Url = await autoMirrorToR2(filename);
      results.push({ filename, r2Url });
    }

    return NextResponse.json({
      success: true,
      processed: results.length,
      images: results,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('[Sanity Webhook Error]', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Sanity to Cloudflare R2 Automated Webhook Pipeline',
    endpoint: '/api/webhooks/sanity-r2',
    targetBucket: 'ax-engineering-media',
    publicDomain: 'https://pub-7ce7718d2d8f41d5bc61f3b85a63ce05.r2.dev',
  });
}
