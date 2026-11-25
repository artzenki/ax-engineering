import { createImageUrlBuilder } from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from '../env'
import { extractSanityFilename, getR2ImageUrl } from '@/lib/r2Sync'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image | any) => {
  if (!source) return undefined
  return imageBuilder?.image(source).auto('format').fit('max')
}

export const getImageUrl = (source: any, width = 1200): string | undefined => {
  if (!source) return undefined

  // 1. Direct Cloudflare R2 URL mapping for Sanity image assets
  const filename = extractSanityFilename(source)
  if (filename) {
    return getR2ImageUrl(filename)
  }

  // 2. Direct string URL (e.g. static unsplash fallback or absolute URL)
  if (typeof source === 'string') return source

  // 3. Fallback to standard Sanity imageBuilder
  try {
    return imageBuilder?.image(source).width(width).auto('format').fit('max').url()
  } catch {
    return undefined
  }
}
