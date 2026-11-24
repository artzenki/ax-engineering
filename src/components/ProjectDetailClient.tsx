'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Images,
  Layers,
  MapPin,
  Maximize2,
  ShieldCheck,
  Sparkles,
  X,
  HardHat,
} from 'lucide-react'
import { ProjectItem, ProjectGalleryItem } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

interface ProjectDetailClientProps {
  project: ProjectItem
  prevProject: ProjectItem | null
  nextProject: ProjectItem | null
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const { language } = useApp()
  const t = translations[language]
  const td = t.projectDetail

  // Localized text helpers
  const pTitle = language === 'mk' && project.title_mk ? project.title_mk : language === 'en' && project.title_en ? project.title_en : project.title
  const pShort = language === 'mk' && project.shortDescription_mk ? project.shortDescription_mk : language === 'en' && project.shortDescription_en ? project.shortDescription_en : project.shortDescription
  const pFull = language === 'mk' && project.fullDescription_mk ? project.fullDescription_mk : language === 'en' && project.fullDescription_en ? project.fullDescription_en : project.fullDescription
  const pServices = (language === 'mk' && project.servicesDone_mk?.length ? project.servicesDone_mk : language === 'en' && project.servicesDone_en?.length ? project.servicesDone_en : project.servicesDone) || []
  const pCurrentPhase = language === 'mk' && project.currentPhase_mk ? project.currentPhase_mk : language === 'en' && project.currentPhase_en ? project.currentPhase_en : project.currentPhase

  // Gallery state
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'exterior' | 'interior' | 'construction' | 'render'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Ensure gallery has images (fallback to high-res architectural photos if empty)
  const fullGallery: ProjectGalleryItem[] = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [
        { url: project.heroImage, caption: 'Pamje Kryesore Eksterier', category: 'exterior', aspect: 'wide' },
        { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', caption: 'Enterieri & Hapësira e Ndriçuar', category: 'interior', aspect: 'wide' },
        { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85', caption: 'Detaje të Strukturës & Fasadës', category: 'exterior', aspect: 'tall' },
        { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85', caption: 'Ndjekja e Punimeve & Mbikëqyrja në Kantier', category: 'construction', aspect: 'wide' },
        { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85', caption: 'Render 3D & Simulim Drite', category: 'render', aspect: 'wide' },
      ]

  const filteredGallery = activeGalleryTab === 'all'
    ? fullGallery
    : fullGallery.filter((item) => item.category === activeGalleryTab)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0))
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredGallery.length])

  const isUnderConstruction = project.isUnderConstruction || project.status === 'Under Construction'
  const progressPercent = typeof project.progressPercent === 'number' ? project.progressPercent : (isUnderConstruction ? 75 : 100)

  return (
    <article className="bg-[#F7F8FA] dark:bg-[#090A0C] text-stone-700 dark:text-stone-300 transition-colors duration-200">
      {/* 1. MONUMENTAL HERO SHOWCASE (Sheriag-Style with AX Luxury Architecture Aesthetic) */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-16 md:pb-20 overflow-hidden text-white">
        {/* Full-Bleed Showcase Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={pTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          {/* Subtle architectural grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          {/* Scrim gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-black/50 to-black/60" />
        </div>

        {/* Hero Content Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
          {/* Glass Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md mb-6 text-xs text-white/80 shadow-lg"
          >
            <Link href="/" className="hover:text-white transition-colors">
              {td.breadcrumbHome}
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/projects" className="hover:text-white transition-colors">
              {td.breadcrumbProjects}
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#FF4455] font-normal truncate max-w-[200px] sm:max-w-none">
              {pTitle}
            </span>
          </nav>

          {/* Badges & Meta Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-normal border shadow-sm ${
                isUnderConstruction
                  ? 'border-[#D9222A]/60 bg-[#D9222A]/20 text-white backdrop-blur-md'
                  : 'border-white/20 bg-black/50 text-white backdrop-blur-md'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isUnderConstruction ? 'bg-[#FF3344] animate-pulse shadow-sm shadow-[#FF3344]' : 'bg-emerald-400'
                }`}
              />
              <span>
                {isUnderConstruction
                  ? `${td.underConstruction} • ${progressPercent}%`
                  : td.completed}
              </span>
            </span>

            <span className="inline-flex items-center space-x-1.5 text-xs text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#FF3344]" />
              <span>{project.location}</span>
            </span>

            {project.category && (
              <span className="text-xs uppercase tracking-wider text-white/70 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {project.category}
              </span>
            )}
          </div>

          {/* Monumental Headline */}
          <div className="max-w-4xl">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.06] mb-5 text-white">
              {pTitle}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal max-w-2xl mb-8">
              {pShort}
            </p>

            {/* Action Buttons: Kërko Ofertë & Shiko Galerinë */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/kerko-oferte"
                className="group inline-flex items-center space-x-2.5 pl-5 pr-2 py-1.5 bg-[#D9222A] hover:bg-white text-white hover:text-[#D9222A] border border-[#D9222A] hover:border-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 shadow-xl shadow-[#D9222A]/30 hover:scale-[1.02]"
              >
                <span>{td.requestQuoteBtn}</span>
                <span className="w-5 h-5 rounded-full bg-black/20 group-hover:bg-[#D9222A]/10 flex items-center justify-center text-white group-hover:text-[#D9222A] transition-colors">
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </Link>

              <a
                href="#gallery"
                className="group inline-flex items-center space-x-2 px-5 py-2 border border-white/30 hover:border-[#D9222A] text-white hover:text-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 bg-black/40 hover:bg-[#D9222A] backdrop-blur-md hover:scale-[1.02]"
              >
                <Images className="w-3.5 h-3.5 text-[#FF4455] group-hover:text-white transition-colors" />
                <span>{td.viewGalleryBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. QUICK FACTS LIQUID GLASS CARDS MATRIX (Kate, Square Meters, etc.) */}
        {project.showSpecsSection !== false && (
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {/* Floors / Kate */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 hover:border-white/30 transition-all shadow-xl">
                <div className="flex items-center space-x-2 text-[11px] font-normal uppercase tracking-wider text-white/70 mb-2">
                  <Layers className="w-4 h-4 text-[#FF4455]" />
                  <span>{td.floors}</span>
                </div>
                <p className="font-display text-xl sm:text-2xl font-normal text-white">
                  {project.floors || 'P + 2'}
                </p>
              </div>

              {/* Square Meters / Sipërfaqja */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 hover:border-white/30 transition-all shadow-xl">
                <div className="flex items-center space-x-2 text-[11px] font-normal uppercase tracking-wider text-white/70 mb-2">
                  <Maximize2 className="w-4 h-4 text-[#FF4455]" />
                  <span>{td.surfaceArea}</span>
                </div>
                <p className="font-display text-xl sm:text-2xl font-normal text-white">
                  {project.area || '750 m²'}
                </p>
              </div>

              {/* Typology / Units */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 hover:border-white/30 transition-all shadow-xl">
                <div className="flex items-center space-x-2 text-[11px] font-normal uppercase tracking-wider text-white/70 mb-2">
                  <Building2 className="w-4 h-4 text-[#FF4455]" />
                  <span>{td.typology}</span>
                </div>
                <p className="font-display text-xs sm:text-sm md:text-base font-normal text-white break-words leading-snug">
                  {project.apartments || project.client || 'Rezidencë Private'}
                </p>
              </div>

              {/* Parking Spaces */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 hover:border-white/30 transition-all shadow-xl">
                <div className="flex items-center space-x-2 text-[11px] font-normal uppercase tracking-wider text-white/70 mb-2">
                  <Car className="w-4 h-4 text-[#FF4455]" />
                  <span>{td.parking}</span>
                </div>
                <p className="font-display text-xs sm:text-sm md:text-base font-normal text-white break-words leading-snug">
                  {project.parkingSpaces || '2 - 4 Garazhe'}
                </p>
              </div>

              {/* Handover / Year */}
              <div className="col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 hover:border-[#D9222A]/50 transition-all shadow-xl">
                <div className="flex items-center space-x-2 text-[11px] font-normal uppercase tracking-wider text-white/70 mb-2">
                  <Calendar className="w-4 h-4 text-[#FF4455]" />
                  <span>{td.deliveryYear}</span>
                </div>
                <p className="font-display text-xl sm:text-2xl font-normal text-[#FF4455]">
                  {project.expectedCompletion || project.year || '2024 - 2025'}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 3. NDJEKJA E PUNIMEVE (CONSTRUCTION PROGRESS TRACKING SECTION) */}
      {project.showProgressSection !== false && (project.isUnderConstruction || project.progressPercent !== undefined) && (
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-7 sm:p-10 md:p-12 rounded-3xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 shadow-xl relative overflow-hidden">
          {/* Ambient blur inside the card */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#D9222A]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#D9222A]/8 blur-[100px]" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-stone-200 dark:border-white/10">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-normal block mb-2">
                  {td.constructionTag}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
                  {td.constructionTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 max-w-xl font-normal leading-relaxed">
                  {td.constructionSubtitle}
                </p>
              </div>

              {/* Status Pill */}
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-normal bg-stone-100 dark:bg-black/60 border border-stone-200 dark:border-white/10 text-stone-900 dark:text-white shadow-sm">
                  <HardHat className="w-3.5 h-3.5 text-[#D9222A]" />
                  <span>
                    {isUnderConstruction
                      ? `${td.underConstruction}`
                      : `${td.completed}`}
                  </span>
                </span>
              </div>
            </div>

            {/* Big Progress Bar */}
            <div className="mb-10 space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-normal">
                <span className="text-stone-700 dark:text-stone-300 font-display tracking-wider">
                  {td.overallProgress}
                </span>
                <span className="font-display text-lg sm:text-xl font-normal text-[#D9222A]">
                  {progressPercent}%
                </span>
              </div>

              {/* Outer Track */}
              <div className="relative w-full h-4 sm:h-5 bg-stone-100 dark:bg-black/60 rounded-full overflow-hidden border border-stone-200 dark:border-white/10 p-0.5 shadow-inner">
                {/* Animated Inner Fill */}
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#B01820] via-[#D9222A] to-[#FF4455] transition-all duration-1000 ease-out shadow-sm"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Current Stage Highlight Box */}
              {pCurrentPhase && (
                <div className="mt-4 p-4 rounded-xl bg-stone-50 dark:bg-black/40 border border-stone-200 dark:border-white/5 flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D9222A] animate-pulse shrink-0" />
                  <p className="text-xs sm:text-sm font-normal text-stone-800 dark:text-stone-200">
                    <span className="text-stone-500 dark:text-stone-400 font-normal mr-1.5">
                      {td.currentPhase}:
                    </span>
                    {pCurrentPhase.replace(/^(Faza Aktuale|Тековна Фаза|Current Phase):\s*/i, '')}
                  </p>
                </div>
              )}
            </div>

            {/* Stepper Timeline of Construction Stages */}
            {project.stages && project.stages.length > 0 && (
              <div className="pt-6 border-t border-stone-200 dark:border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {project.stages.map((st, sIdx) => {
                    const stName = language === 'mk' && st.name_mk ? st.name_mk : language === 'en' && st.name_en ? st.name_en : st.name
                    const isDone = st.status === 'completed'
                    const isCurrent = st.status === 'current'

                    return (
                      <div
                        key={sIdx}
                        className={`p-4 rounded-xl border transition-all ${
                          isCurrent
                            ? 'bg-[#D9222A]/5 border-[#D9222A]/60 shadow-md ring-1 ring-[#D9222A]/30'
                            : isDone
                            ? 'bg-stone-50 dark:bg-black/30 border-stone-200 dark:border-white/5'
                            : 'bg-stone-50/50 dark:bg-black/20 border-dashed border-stone-200 dark:border-white/5 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display text-xs text-stone-400 dark:text-stone-500 font-normal">
                            0{sIdx + 1}
                          </span>
                          {isDone ? (
                            <span className="inline-flex items-center space-x-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-normal">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{td.stageCompleted}</span>
                            </span>
                          ) : isCurrent ? (
                            <span className="inline-flex items-center space-x-1 text-[10px] text-[#D9222A] font-normal animate-pulse">
                              <span className="w-2 h-2 rounded-full bg-[#D9222A]" />
                              <span>{td.stageCurrent}</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center space-x-1 text-[10px] text-stone-400 font-normal">
                              <Clock className="w-3 h-3" />
                              <span>{td.stageUpcoming}</span>
                            </span>
                          )}
                        </div>

                        <h4 className="font-display text-sm font-normal text-stone-900 dark:text-white line-clamp-2 leading-snug">
                          {stName}
                        </h4>

                        {st.date && (
                          <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-2 font-mono">
                            {st.date}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      )}

      {/* 4. ARCHITECTURAL CONCEPT & ENGINEERING SCOPE SPLIT */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 ${project.showServicesScope !== false && pServices.length > 0 ? 'lg:grid-cols-12' : 'max-w-4xl'} gap-12 lg:gap-16 items-start`}>
          {/* Narrative Left */}
          <div className={`${project.showServicesScope !== false && pServices.length > 0 ? 'lg:col-span-7' : 'w-full'} space-y-6`}>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] block font-normal">
              {td.overviewTag}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-stone-900 dark:text-white font-normal leading-tight">
              {td.overviewTitle}
            </h2>
            <div className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              <p>{pFull}</p>
            </div>

            {/* Energy and Technical Certification Pill */}
            {project.energyClass && (
              <div className="pt-4 flex items-center space-x-3">
                <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-normal bg-stone-100 dark:bg-black/50 border border-stone-200 dark:border-white/10 text-stone-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-[#D9222A]" />
                  <span>{project.energyClass}</span>
                </span>
              </div>
            )}
          </div>

          {/* Scope and Services Provided Right */}
          {project.showServicesScope !== false && pServices.length > 0 && (
            <div className="lg:col-span-5 p-7 sm:p-9 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 space-y-6 rounded-2xl shadow-sm">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9222A] block font-normal">
                {td.servicesScopeTag}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-stone-900 dark:text-white font-normal">
                {td.servicesScopeTitle}
              </h3>

              <ul className="space-y-3.5">
                {pServices.map((srv, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9222A] mt-2 shrink-0" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-stone-200 dark:border-white/10">
                <Link
                  href="/kerko-oferte"
                  className="group w-full py-2.5 pl-5 pr-2 bg-[#D9222A] hover:bg-stone-900 text-white font-normal text-[12px] md:text-[13px] rounded-full flex items-center justify-between transition-all shadow-lg shadow-[#D9222A]/20"
                >
                  <span>{td.requestQuoteBtn}</span>
                  <span className="w-5 h-5 rounded-full bg-black/20 group-hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. INTERACTIVE GALLERY TAB SYSTEM & LIGHTBOX */}
      {project.showGallerySection !== false && (
        <section id="gallery" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] block font-normal mb-2">
              {td.galleryTag}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              {td.galleryTitle}
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: td.allPhotos },
              { id: 'exterior', label: td.exterior },
              { id: 'interior', label: td.interior },
              { id: 'construction', label: td.constructionTab },
              { id: 'render', label: td.renderTab },
            ].map((tab) => {
              const isActive = activeGalleryTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-normal transition-all ${
                    isActive
                      ? 'bg-[#D9222A] text-white shadow-md shadow-[#D9222A]/25'
                      : 'bg-white dark:bg-[#121316] text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-white/10 hover:border-[#D9222A]/60'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.length === 0 ? (
            <div className="col-span-full py-16 text-center text-xs text-stone-500 font-normal">
              Nuk ka foto të kategorizuara në këtë rubrikë për këtë projekt.
            </div>
          ) : (
            filteredGallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl bg-stone-900 border border-stone-200 dark:border-white/10 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#D9222A]/60"
              >
                <Image
                  src={img.url}
                  alt={img.caption || `${pTitle} perspective ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay with zoom icon and caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="self-end">
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  {img.caption && (
                    <p className="text-xs text-white/90 font-normal leading-relaxed tracking-wide">
                      {img.caption}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      )}

      {/* 6. LIGHTBOX MODAL */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1))
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0))
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[72vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredGallery[lightboxIndex].url}
                alt={filteredGallery[lightboxIndex].caption || pTitle}
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
            {filteredGallery[lightboxIndex].caption && (
              <p className="mt-4 text-xs sm:text-sm text-white/80 font-normal text-center max-w-xl">
                {filteredGallery[lightboxIndex].caption} ({lightboxIndex + 1} / {filteredGallery.length})
              </p>
            )}
          </div>
        </div>
      )}

      {/* 7. PREV / NEXT PROJECT NAVIGATION */}
      {project.showAdjacentNav !== false && (prevProject || nextProject) && (
        <section className="py-16 border-t border-stone-200 dark:border-white/10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevProject && (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group p-6 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 hover:border-[#D9222A]/50 transition-all flex items-center justify-between rounded-2xl shadow-sm"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block mb-1 font-normal">
                    ← {td.prevProject}
                  </span>
                  <h4 className="font-display text-lg text-stone-900 dark:text-white group-hover:text-[#D9222A] transition-colors font-normal">
                    {prevProject.title}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mt-0.5 font-normal">
                    {prevProject.category}
                  </p>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group p-6 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 hover:border-[#D9222A]/50 transition-all flex items-center justify-between text-right rounded-2xl shadow-sm ml-auto w-full md:w-auto md:min-w-[320px]"
              >
                <div className="ml-auto">
                  <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block mb-1 font-normal">
                    {td.nextProject} →
                  </span>
                  <h4 className="font-display text-lg text-stone-900 dark:text-white group-hover:text-[#D9222A] transition-colors font-normal">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mt-0.5 font-normal">
                    {nextProject.category}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </section>
      )}
    </article>
  )
}
