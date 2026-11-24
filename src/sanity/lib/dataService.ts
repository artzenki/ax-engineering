import { client } from './client'
import { projectId } from '../env'
import {
  projectsQuery,
  projectBySlugQuery,
  featuredProjectsQuery,
  teamMembersQuery,
  servicesQuery,
  siteSettingsQuery,
} from './queries'
import {
  PROJECTS_DATA,
  SERVICES_DATA,
  TEAM_MEMBERS_DATA,
  ProjectItem,
  ServiceItem,
  TeamMemberItem,
} from '@/data/projectsData'
import { getImageUrl } from './image'

export async function getAllProjects(): Promise<ProjectItem[]> {
  try {
    if (projectId && projectId !== 'demo-project-id') {
      const sanityProjects = await client.fetch(projectsQuery)
      if (sanityProjects && sanityProjects.length > 0) {
        return sanityProjects.map((p: any) => ({
          id: p._id,
          title: p.title,
          slug: p.slug,
          category: p.category?.title || p.categoryName || 'Architecture',
          categorySlug: p.category?.slug || (p.categoryName ? p.categoryName.toLowerCase().replace(/\s+/g, '-') : 'general'),
          client: p.client || 'Private Client',
          location: p.location || 'Gostivar, North Macedonia',
          year: p.year || '2024',
          area: p.area || '—',
          status: p.status || 'Completed',
          featured: !!p.featured,
          heroImage: getImageUrl(p.mainImage, 1600) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
          aspectRatio: 'wide',
          shortDescription: p.shortDescription || '',
          fullDescription: p.fullDescription || p.shortDescription || '',
          servicesDone: p.servicesDone || ['Architectural Design', 'Site Supervision'],
          gallery: (p.gallery || []).map((img: any) => ({
            url: getImageUrl(img, 1200) || '',
            caption: img.caption || '',
            aspect: 'wide',
          })),
        }))
      }
    }
  } catch (err) {
    console.warn('Sanity projects fetch skipped, using static dataset:', err)
  }
  return PROJECTS_DATA
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  try {
    if (projectId && projectId !== 'demo-project-id') {
      const p = await client.fetch(projectBySlugQuery, { slug })
      if (p) {
        return {
          id: p._id,
          title: p.title,
          slug: p.slug,
          category: p.category?.title || p.categoryName || 'Architecture',
          categorySlug: p.category?.slug || (p.categoryName ? p.categoryName.toLowerCase().replace(/\s+/g, '-') : 'general'),
          client: p.client || 'Private Client',
          location: p.location || 'Gostivar, North Macedonia',
          year: p.year || '2024',
          area: p.area || '—',
          status: p.status || 'Completed',
          featured: !!p.featured,
          heroImage: getImageUrl(p.mainImage, 1600) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
          aspectRatio: 'wide',
          shortDescription: p.shortDescription || '',
          fullDescription: p.fullDescription || p.shortDescription || '',
          servicesDone: p.servicesDone || ['Architectural Design', 'Site Supervision'],
          gallery: (p.gallery || []).map((img: any) => ({
            url: getImageUrl(img, 1200) || '',
            caption: img.caption || '',
            aspect: 'wide',
          })),
        }
      }
    }
  } catch (err) {
    console.warn('Sanity projectBySlug fetch skipped, checking static dataset:', err)
  }

  // Fallback to static data
  const localProject = PROJECTS_DATA.find((p) => p.slug === slug)
  return localProject || null
}

export async function getFeaturedProjects(): Promise<ProjectItem[]> {
  const all = await getAllProjects()
  return all.filter((p) => p.featured).slice(0, 5)
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    if (projectId && projectId !== 'demo-project-id') {
      const sanityServices = await client.fetch(servicesQuery)
      if (sanityServices && sanityServices.length > 0) {
        return sanityServices.map((s: any) => ({
          number: s.number || '01',
          title: s.title,
          title_mk: s.title_mk,
          title_en: s.title_en,
          shortDescription: s.shortDescription || '',
          shortDescription_mk: s.shortDescription_mk,
          shortDescription_en: s.shortDescription_en,
          description: s.description || '',
          description_mk: s.description_mk,
          description_en: s.description_en,
          features: s.features || [],
          features_mk: s.features_mk,
          features_en: s.features_en,
        }))
      }
    }
  } catch (err) {
    console.warn('Sanity services fetch skipped, using static dataset:', err)
  }
  return SERVICES_DATA
}

export async function getTeamMembers(): Promise<TeamMemberItem[]> {
  try {
    if (projectId && projectId !== 'demo-project-id') {
      const sanityTeam = await client.fetch(teamMembersQuery)
      if (sanityTeam && sanityTeam.length > 0) {
        return sanityTeam.map((m: any) => ({
          name: m.name,
          role: m.role,
          role_mk: m.role_mk,
          role_en: m.role_en,
          bio: m.bio || '',
          bio_mk: m.bio_mk,
          bio_en: m.bio_en,
          image: getImageUrl(m.image, 800) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
          email: m.email,
        }))
      }
    }
  } catch (err) {
    console.warn('Sanity team fetch skipped, using static dataset:', err)
  }
  return TEAM_MEMBERS_DATA
}

export interface SiteSettingsData {
  heroImage?: string
  heroImageAlt?: string
  companyName?: string
  tagline?: string
  location?: string
  address?: string
  phone?: string
  email?: string
  workingHours?: string
}

export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  try {
    if (projectId && projectId !== 'demo-project-id') {
      const settings = await client.fetch(siteSettingsQuery)
      if (settings) {
        return {
          heroImage: getImageUrl(settings.heroImage, 2000) || undefined,
          heroImageAlt: settings.heroImageAlt || undefined,
          companyName: settings.companyName,
          tagline: settings.tagline,
          location: settings.location,
          address: settings.address,
          phone: settings.phone,
          email: settings.email,
          workingHours: settings.workingHours,
        }
      }
    }
  } catch (err) {
    console.warn('Sanity siteSettings fetch skipped:', err)
  }
  return null
}



