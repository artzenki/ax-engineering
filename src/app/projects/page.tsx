import { Metadata } from 'next'
import ProjectsClient from '@/components/ProjectsClient'
import { getAllProjects } from '@/sanity/lib/dataService'

export const metadata: Metadata = {
  title: 'Portfoli & Projektet Arkitekturore | A-X Engineering Gostivar',
  description:
    'Eksploroni vilat luksoze, objektet afariste dhe mbikëqyrjen e ndërtimit nga A-X Engineering në Gostivar dhe rajon.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  return <ProjectsClient projects={projects} />
}
