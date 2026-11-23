'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react'
import { ProjectItem, CATEGORIES } from '@/data/projectsData'

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
      {/* Quick Filters on top */}
      {showFilters && (
        <div className="mb-12 flex flex-wrap items-center justify-start gap-2 md:gap-3 border-b border-white/10 pb-6">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0
            if (count === 0 && cat.id !== 'all') return null
            const isActive = selectedCategory === cat.id

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all duration-200 border ${
                  isActive
                    ? 'border-[#C5A880] bg-[#C5A880] text-black font-semibold shadow-md'
                    : 'border-white/10 text-stone-400 hover:text-white hover:border-white/30 bg-[#121214]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-2 text-[10px] ${isActive ? 'text-black/70' : 'text-stone-500'}`}>
                  ({count})
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredProjects.map((project, index) => {
          // Determine height / aspect based on project metadata or index pattern for masonry rhythm
          const isTall = project.aspectRatio === 'tall' || index % 3 === 1
          const isWide = project.aspectRatio === 'wide' || index % 4 === 0

          return (
            <div
              key={project.id || project.slug}
              className="break-inside-avoid group relative overflow-hidden bg-[#151518] border border-white/5 hover:border-[#C5A880]/50 transition-all duration-300"
            >
              <Link href={`/projects/${project.slug}`} className="block relative">
                {/* Image Container */}
                <div
                  className={`relative w-full overflow-hidden ${
                    isTall ? 'h-[460px]' : isWide ? 'h-[320px]' : 'h-[380px]'
                  }`}
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index < 2}
                  />

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-black/60 backdrop-blur-md text-[#C5A880] border border-white/10 font-medium">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/30">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Bottom Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center justify-between text-[11px] text-stone-400 uppercase tracking-widest mb-1.5">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-[#C5A880]" />
                        <span>{project.location}</span>
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-white font-light group-hover:text-[#C5A880] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {project.area && (
                      <p className="text-xs text-stone-400 mt-1 font-mono tracking-wider">
                        {project.area}
                      </p>
                    )}

                    {/* Reveal hover arrow */}
                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/15 text-xs uppercase tracking-widest text-stone-300 group-hover:text-[#C5A880] transition-colors">
                      <span className="text-[10px]">Inspect Project</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 border border-dashed border-white/10">
          <p className="text-stone-400 font-serif text-lg">
            No projects found in this discipline.
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-4 text-xs uppercase tracking-widest text-[#C5A880] underline"
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  )
}
