'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { ProjectItem, CATEGORIES } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

interface ProjectMasonryProps {
  projects: ProjectItem[]
  showFilters?: boolean
  initialCategory?: string
  limit?: number
}

export default function ProjectMasonry({
  projects,
  showFilters = true,
  initialCategory = 'all',
  limit,
}: ProjectMasonryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
  const { language } = useApp()
  const t = translations[language]

  // Filter projects
  const filteredProjects = useMemo(() => {
    let list = projects
    if (selectedCategory !== 'all') {
      list = list.filter(
        (p) =>
          p.categorySlug === selectedCategory ||
          p.category.toLowerCase().includes(selectedCategory.replace(/-/g, ' '))
      )
    }
    if (limit) {
      list = list.slice(0, limit)
    }
    return list
  }, [projects, selectedCategory, limit])

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length }
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = projects.filter(
          (p) =>
            p.categorySlug === cat.id ||
            p.category.toLowerCase().includes(cat.id.replace(/-/g, ' '))
        ).length
      }
    })
    return counts
  }, [projects])

  return (
    <div className="w-full">
      {/* Quick Filters on top - Compact single-lane design */}
      {showFilters && (
        <div className="mb-8 flex flex-wrap items-center justify-start gap-1.5 md:gap-2 border-b border-stone-200 dark:border-white/10 pb-4">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0
            if (count === 0 && cat.id !== 'all') return null
            const isActive = selectedCategory === cat.id
            const translatedLabel = t.portfolio.categories[cat.id] || cat.label

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-[12px] font-normal px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap border ${
                  isActive
                    ? 'border-[#D9222A] bg-[#D9222A] text-white shadow-md shadow-[#D9222A]/25'
                    : 'bg-white dark:bg-[#141518] text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:text-stone-950 dark:hover:text-white hover:border-[#D9222A]/40 shadow-sm'
                }`}
              >
                <span>{translatedLabel}</span>
                <span className={`ml-1.5 text-[10px] ${isActive ? 'text-white/80' : 'text-stone-500 dark:text-stone-400'}`}>
                  ({count})
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => {
          const heightClass = 'h-[450px] md:h-[470px]'
          const categoryName = t.portfolio.categories[project.categorySlug] || project.category

          return (
            <article
              key={project.id}
              className={`project-card group relative flex flex-col justify-end overflow-hidden border border-stone-200/90 dark:border-white/10 bg-[#111215] rounded-xl transition-all duration-500 hover:border-[#D9222A]/60 hover:shadow-2xl hover:shadow-[#D9222A]/15 shadow-md ${heightClass}`}
            >
              {/* Project Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter brightness-[0.75] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Hover quick badge with -45 deg arrow rotation */}
              <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:border-[#D9222A] group-hover:bg-[#D9222A] transition-all duration-300 shadow-lg group-hover:scale-110">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </div>

              {/* Top Tags - font and weight matching header button (Clash Display, normal weight) */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
                <span className="font-display text-[10px] uppercase tracking-wider px-3 py-1 bg-black/75 backdrop-blur-md text-white font-normal rounded-full shadow-md border border-white/20">
                  {categoryName}
                </span>
                {project.featured && (
                  <span className="font-display text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#D9222A] text-white font-normal rounded-full shadow-md">
                    Signature
                  </span>
                )}
              </div>

              {/* Bottom Content Card */}
              <div className="relative z-10 p-5 md:p-6 flex flex-col justify-end w-full">
                <div className="space-y-1.5">
                  <div className="project-card-meta flex items-center space-x-2 text-[10px] tracking-wider">
                    <MapPin className="w-3 h-3 text-[#FF4455]" />
                    <span>{project.location}</span>
                    <span className="opacity-60">•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl font-normal group-hover:text-[#FF4455] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs font-light line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Scope & Link - Animated "Detaje" button scaling up, turning red with counter-clockwise rotating arrow */}
                <div className="mt-3.5 flex items-center justify-between pt-2.5 border-t border-white/15 text-[11px] uppercase tracking-wider">
                  <span className="project-card-meta text-[10px] tracking-wider">
                    {project.area || project.client}
                  </span>
                  <span className="project-card-inspect inline-flex items-center space-x-1.5 pl-3 pr-1.5 py-1 rounded-full bg-white/10 group-hover:bg-[#D9222A] text-white border border-white/25 group-hover:border-[#D9222A] font-display text-[11px] font-normal transition-all duration-300 group-hover:scale-105 shadow-sm group-hover:shadow-lg group-hover:shadow-[#D9222A]/30">
                    <span>{t.portfolio.inspect}</span>
                    <span className="w-4 h-4 rounded-full bg-black/25 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-2.5 h-2.5 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                  </span>
                </div>
              </div>

              {/* Full Card Link overlay */}
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-30"
                aria-label={`View details for ${project.title}`}
              >
                <span className="sr-only">View project</span>
              </Link>
            </article>
          )
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center border border-white/5 bg-[#111215] rounded-xl">
          <p className="text-stone-400 text-xs tracking-wider uppercase">
            No projects found in this discipline.
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-3 text-xs uppercase tracking-widest text-[#D9222A] underline"
          >
            {t.portfolio.viewAll}
          </button>
        </div>
      )}
    </div>
  )
}
