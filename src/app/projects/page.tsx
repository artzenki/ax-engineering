import { Metadata } from 'next'
import ProjectMasonry from '@/components/ProjectMasonry'
import { getAllProjects } from '@/sanity/lib/dataService'

export const metadata: Metadata = {
  title: 'Projects & Architectural Portfolio | AX Engineering Gostivar',
  description:
    'Explore completed and upcoming architectural, residential villa, commercial, and engineering supervision projects by AX Engineering in Gostivar and beyond.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0B0B0C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-3">
            Our Works
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight">
            Architectural & Engineering Portfolio
          </h1>
          <p className="text-stone-400 text-sm md:text-base mt-4 leading-relaxed font-light">
            A curated archive of private residences, commercial facilities, proprietary developments, and certified technical supervision projects executed across Gostivar, the Polog region, and internationally.
          </p>
        </div>

        {/* Masonry Grid with Filters */}
        <ProjectMasonry projects={projects} showFilters={true} />
      </div>
    </div>
  )
}
