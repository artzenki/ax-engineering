'use client'

import ProjectMasonry from '@/components/ProjectMasonry'
import { ProjectItem } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

export default function ProjectsClient({ projects }: { projects: ProjectItem[] }) {
  const { language } = useApp()
  const t = translations[language]

  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#F7F8FA] dark:bg-[#090A0C] min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-medium block mb-2.5">
            {t.portfolio.tag}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-900 dark:text-white font-normal tracking-tight">
            {t.portfolio.title}
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm md:text-base mt-3 leading-relaxed font-light">
            {t.portfolio.desc}
          </p>
        </div>

        {/* Masonry Grid with Filters */}
        <ProjectMasonry projects={projects} showFilters={true} />
      </div>
    </div>
  )
}
