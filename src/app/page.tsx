import HomeClient from '@/components/HomeClient'
import { getAllProjects, getServices, getSiteSettings } from '@/sanity/lib/dataService'

export default async function HomePage() {
  const [projects, services, siteSettings] = await Promise.all([
    getAllProjects(),
    getServices(),
    getSiteSettings(),
  ])

  return (
    <HomeClient
      projects={projects}
      services={services}
      heroImage={siteSettings?.heroImage}
      heroImageAlt={siteSettings?.heroImageAlt}
    />
  )
}

