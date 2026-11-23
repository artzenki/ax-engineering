import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Maximize2, Shield, ArrowRight } from 'lucide-react'
import { getProjectBySlug, getAllProjects } from '@/sanity/lib/dataService'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found | AX Engineering',
    }
  }

  return {
    title: `${project.title} | AX Engineering Gostivar`,
    description: project.shortDescription || `Architectural and engineering project in ${project.location} by AX Engineering.`,
    openGraph: {
      title: `${project.title} — AX Engineering`,
      description: project.shortDescription,
      images: [{ url: project.heroImage }],
    },
  }
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getAllProjects(),
  ])

  if (!project) {
    notFound()
  }

  // Find next and previous project for seamless architectural navigation
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1]
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0]

  return (
    <article className="pt-28 pb-24 md:pb-36 bg-[#0B0B0C] min-h-screen text-stone-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-[#C5A880] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Title & Category */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium px-3 py-1 bg-[#161619] border border-white/10">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-stone-400">
              {project.location}
            </span>
            <span className="text-stone-600">•</span>
            <span className="text-xs text-[#C5A880] font-mono">
              {project.status}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-stone-300 text-sm md:text-lg mt-6 leading-relaxed font-light max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Monumental Hero Showcase Image */}
        <div className="relative h-[500px] md:h-[680px] w-full overflow-hidden border border-white/10 mb-16 bg-[#121215]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Technical Data Sheet / Specs Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#121215] border border-white/10 mb-20">
          <div className="space-y-1 border-r border-white/10 pr-4">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block">
              Location
            </span>
            <p className="font-serif text-base md:text-lg text-white font-light">
              {project.location}
            </p>
          </div>

          <div className="space-y-1 border-r border-white/10 pr-4">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block">
              Year of Delivery
            </span>
            <p className="font-serif text-base md:text-lg text-white font-light">
              {project.year}
            </p>
          </div>

          <div className="space-y-1 border-r border-white/10 pr-4">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block">
              Gross Surface Area
            </span>
            <p className="font-serif text-base md:text-lg text-white font-light">
              {project.area || 'Confidential'}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block">
              Client / Typology
            </span>
            <p className="font-serif text-base md:text-lg text-white font-light">
              {project.client || 'Private Commission'}
            </p>
          </div>
        </div>

        {/* Architectural Narrative & Scope Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] block font-medium">
              Architectural Concept
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
              Spatial Choreography & Structural Integrity
            </h2>
            <div className="prose prose-invert max-w-none text-stone-300 text-sm leading-relaxed space-y-4">
              <p>{project.fullDescription}</p>
            </div>

            {/* Custom Metrics if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 bg-[#151518] border border-white/5">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] block">
                      {m.label}
                    </span>
                    <p className="font-mono text-xs text-white mt-1 font-semibold">{m.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Scope & Services Provided */}
          <div className="lg:col-span-5 p-8 bg-[#141418] border border-white/10 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] block font-medium">
              Engineering Scope
            </span>
            <h3 className="font-serif text-xl text-white">Services Rendered by AX</h3>

            <ul className="space-y-3">
              {project.servicesDone.map((srv, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full py-3.5 bg-[#C5A880] hover:bg-white text-black font-semibold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-all"
              >
                <span>Inquire Similar Commission</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery / Masonry Showcase */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-28">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] block font-medium mb-2">
                Visual Documentation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
                Project Gallery & Detail Perspectives
              </h2>
            </div>

            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {project.gallery.map((img, idx) => {
                const isTall = img.aspect === 'tall' || idx % 2 === 1
                return (
                  <div
                    key={idx}
                    className="break-inside-avoid group relative overflow-hidden bg-[#151518] border border-white/5"
                  >
                    <div className={`relative w-full ${isTall ? 'h-[520px]' : 'h-[380px]'}`}>
                      <Image
                        src={img.url}
                        alt={img.caption || `${project.title} detail`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {img.caption && (
                      <div className="p-4 bg-[#121215] border-t border-white/5">
                        <p className="text-xs text-stone-400 font-light italic">
                          {img.caption}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Next / Previous Project Navigation */}
        <div className="pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-6 bg-[#121215] border border-white/5 hover:border-[#C5A880]/50 transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">
                  ← Previous Project
                </span>
                <h4 className="font-serif text-lg text-white group-hover:text-[#C5A880] transition-colors">
                  {prevProject.title}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">{prevProject.category}</p>
              </div>
            </Link>
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-6 bg-[#121215] border border-white/5 hover:border-[#C5A880]/50 transition-all flex items-center justify-between text-right"
            >
              <div className="ml-auto">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">
                  Next Project →
                </span>
                <h4 className="font-serif text-lg text-white group-hover:text-[#C5A880] transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">{nextProject.category}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
