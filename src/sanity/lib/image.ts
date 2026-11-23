import { createImageUrlBuilder } from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from '../env'

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
  if (typeof source === 'string') return source
  try {
    return imageBuilder?.image(source).width(width).auto('format').fit('max').url()
  } catch {
    return undefined
  }
}
