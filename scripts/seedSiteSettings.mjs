import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

// Get auth token from ~/.config/sanity/config.json or ~/.sanity/config.json
let authToken = ''
const configPaths = [
  path.join(process.env.HOME || '', '.config', 'sanity', 'config.json'),
  path.join(process.env.HOME || '', '.sanity', 'config.json'),
]

for (const cp of configPaths) {
  if (fs.existsSync(cp)) {
    try {
      const data = JSON.parse(fs.readFileSync(cp, 'utf-8'))
      if (data.authToken) {
        authToken = data.authToken
        break
      }
    } catch {}
  }
}

if (!authToken) {
  authToken = process.env.SANITY_AUTH_TOKEN || ''
}

const client = createClient({
  projectId: '1s3zgmg6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: authToken,
  useCdn: false,
})

async function uploadImageFromUrl(url, filename) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const arrayBuffer = await res.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const asset = await client.assets.upload('image', buffer, { filename })
    return asset
  } catch (err) {
    console.warn(`Failed to upload image from ${url}:`, err.message)
    return null
  }
}

async function run() {
  console.log('🚀 Checking Site Settings in Sanity dataset "production"...')

  const existing = await client.fetch('*[_type == "siteSettings"][0]')
  
  if (existing && existing.heroImage?.asset) {
    console.log('✓ Existing siteSettings already has a hero image configured:', existing._id)
    console.log('Document details:', JSON.stringify({
      _id: existing._id,
      heroImageAlt: existing.heroImageAlt,
      companyName: existing.companyName
    }, null, 2))
    return
  }

  console.log('📸 Uploading default monumental hero villa image to Sanity asset library...')
  const defaultHeroUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90'
  const asset = await uploadImageFromUrl(defaultHeroUrl, 'hero-architectural-villa.jpg')

  const doc = {
    _id: existing?._id || 'siteSettings',
    _type: 'siteSettings',
    heroImageAlt: 'A-X Engineering Luxury Villa & Architectural Studio Gostivar',
    companyName: 'A-X Engineering',
    tagline: 'Architecture Studio & Engineering Excellence',
    location: 'Gostivar, North Macedonia',
    address: 'Bulevard Braka Ginovski, Gostivar 1230',
    phone: '+389 70 850 120',
    email: 'contact@axengineering.mk',
    workingHours: 'Hënë - Premte: 08:30 - 17:00 | Shtunë: Me Termine',
  }

  if (asset?._id) {
    doc.heroImage = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
  }

  const result = await client.createOrReplace(doc)
  console.log('✓ Successfully created / updated Site Settings document in Sanity:', result._id)
  console.log('You can now open http://localhost:3000/studio and edit the Hero Image directly under "Site Settings & Hero Visual"!')
}

run().catch((err) => {
  console.error('Fatal error during siteSettings seed:', err)
  process.exit(1)
})
