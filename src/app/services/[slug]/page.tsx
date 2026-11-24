import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetailClient from '@/components/ServiceDetailClient'
import { getServiceBySlug, getServices } from '@/sanity/lib/dataService'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((s) => ({
    slug: s.slug || `service-${s.number}`,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Shërbimi nuk u gjet | A-X Engineering',
    }
  }

  return {
    title: `${service.title} | Shërbimet e A-X Engineering`,
    description: service.shortDescription || 'Shërbim i specializuar nga studio e arkitekturës dhe inxhinierisë A-X Engineering në Gostivar.',
    openGraph: {
      title: `${service.title} | A-X Engineering`,
      description: service.shortDescription,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
  ])

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} allServices={allServices} />
}
