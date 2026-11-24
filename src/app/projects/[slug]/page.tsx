import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
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

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found | A-X Engineering',
    }
  }

  return {
    title: `${project.title} | A-X Engineering Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | A-X Engineering`,
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

  // Find next and previous projects for navigation
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <article className="pt-32 pb-24 md:pb-36 bg-[#F7F8FA] dark:bg-[#090A0C] min-h-screen text-stone-700 dark:text-stone-300 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 hover:text-[#D9222A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Title & Category */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9222A] font-medium px-3.5 py-1 bg-white dark:bg-[#121316] border border-stone-200 dark:border-white/10 rounded-full shadow-sm">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
              {project.location}
            </span>
            <span className="text-stone-400 dark:text-stone-600">•</span>
            <span className="text-xs text-[#D9222A] font-mono">
              {project.status}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-stone-900 dark:text-white font-normal tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-stone-700 dark:text-stone-300 text-sm md:text-lg mt-6 leading-relaxed font-light max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Monumental Hero Showcase Image */}
        <div className="relative h-[500px] md:h-[680px] w-full overflow-hidden border border-stone-200 dark:border-white/10 mb-16 bg-stone-900 rounded-xl shadow-lg">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 mb-20 rounded-xl shadow-sm">
          <div className="space-y-1 border-r border-stone-200 dark:border-white/10 pr-4">
            <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block font-medium">
              Location
            </span>
            <p className="font-display text-base md:text-lg text-stone-900 dark:text-white font-normal">
              {project.location}
            </p>
          </div>

          <div className="space-y-1 border-r border-stone-200 dark:border-white/10 pr-4">
            <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block font-medium">
              Year of Delivery
            </span>
            <p className="font-display text-base md:text-lg text-stone-900 dark:text-white font-normal">
              {project.year}
            </p>
          </div>

          <div className="space-y-1 border-r border-stone-200 dark:border-white/10 pr-4">
            <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block font-medium">
              Gross Surface Area
            </span>
            <p className="font-display text-base md:text-lg text-stone-900 dark:text-white font-normal">
              {project.area || 'Confidential'}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block font-medium">
              Client / Typology
            </span>
            <p className="font-display text-base md:text-lg text-stone-900 dark:text-white font-normal">
              {project.client || 'Private Commission'}
            </p>
          </div>
        </div>

        {/* Architectural Narrative & Scope Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] block font-medium">
              Architectural Concept
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-stone-900 dark:text-white font-normal">
              Spatial Choreography & Structural Integrity
            </h2>
            <div className="prose prose-invert max-w-none text-stone-700 dark:text-stone-300 text-sm leading-relaxed space-y-4">
              <p>{project.fullDescription}</p>
            </div>

            {/* Custom Metrics if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="pt-6 border-t border-stone-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 rounded-lg shadow-sm">
                    <span className="text-[9px] uppercase tracking-widest text-[#D9222A] block font-medium">
                      {m.label}
                    </span>
                    <p className="font-mono text-xs text-stone-900 dark:text-white mt-1 font-semibold">{m.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Scope & Services Provided */}
          <div className="lg:col-span-5 p-8 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 space-y-6 rounded-xl shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9222A] block font-medium">
              Engineering Scope
            </span>
            <h3 className="font-display text-xl text-stone-900 dark:text-white font-normal">Services Rendered by A-X</h3>

            <ul className="space-y-3">
              {project.servicesDone.map((srv, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-stone-700 dark:text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9222A] mt-1.5 shrink-0" />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-stone-200 dark:border-white/10">
              <Link
                href="/contact"
                className="group w-full py-2 pl-4 pr-1.5 bg-[#D9222A] hover:bg-[#F03542] text-white font-normal text-[12px] md:text-[13px] rounded-full flex items-center justify-center space-x-2.5 transition-all shadow-lg shadow-[#D9222A]/20"
              >
                <span>Kërko Ofertë të Ngjashme</span>
                <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-white group-hover:bg-black/35 transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery / Masonry Showcase */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-28">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] block font-medium mb-2">
                Visual Documentation
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 dark:text-white font-normal">
                Project Gallery & Detail Perspectives
              </h2>
            </div>

            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {project.gallery.map((img, idx) => {
                const isTall = img.aspect === 'tall' || idx % 2 === 1
                return (
                  <div
                    key={idx}
                    className="break-inside-avoid group relative overflow-hidden bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 rounded-lg shadow-sm"
                  >
                    <div className={`relative w-full ${isTall ? 'h-[520px]' : 'h-[380px]'}`}>
                      <Image
                        src={img.url}
                        alt={img.caption || `${project.title} perspective ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {img.caption && (
                      <div className="p-4 bg-white dark:bg-[#111215] border-t border-stone-200 dark:border-white/5">
                        <p className="text-xs text-stone-600 dark:text-stone-400 font-light italic">
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
        <div className="pt-16 border-t border-stone-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-6 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 hover:border-[#D9222A]/50 transition-all flex items-center justify-between rounded-xl shadow-sm"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block mb-1 font-medium">
                  ← Previous Project
                </span>
                <h4 className="font-display text-lg text-stone-900 dark:text-white group-hover:text-[#D9222A] transition-colors">
                  {prevProject.title}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-500 mt-0.5">{prevProject.category}</p>
              </div>
            </Link>
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-6 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 hover:border-[#D9222A]/50 transition-all flex items-center justify-between text-right rounded-xl shadow-sm"
            >
              <div className="ml-auto">
                <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block mb-1 font-medium">
                  Next Project →
                </span>
                <h4 className="font-display text-lg text-stone-900 dark:text-white group-hover:text-[#D9222A] transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-500 mt-0.5">{nextProject.category}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
