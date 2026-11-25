'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ShieldCheck, Compass } from 'lucide-react'
import ProjectMasonry from '@/components/ProjectMasonry'
import AnimatedCounter from '@/components/AnimatedCounter'
import MainCtaBanner from '@/components/MainCtaBanner'
import { ProjectItem, ServiceItem, SITE_STATS } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

interface HomeClientProps {
  projects: ProjectItem[]
  services: ServiceItem[]
  heroImage?: string
  heroImageAlt?: string
}

function AnimatedLetterText({
  text,
  startIndex = 0,
  baseDelay = 0.65,
  className = '',
}: {
  text: string
  startIndex?: number
  baseDelay?: number
  className?: string
}) {
  const words = text.split(' ')
  let runningIndex = startIndex

  return (
    <span className={className}>
      {words.map((word, wIdx) => {
        const letters = Array.from(word)
        const wordEl = (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {letters.map((char, cIdx) => {
              const delay = `${baseDelay + (runningIndex + cIdx) * 0.028}s`
              return (
                <span
                  key={cIdx}
                  className="inline-block hero-letter-pop"
                  style={{ animationDelay: delay }}
                >
                  {char}
                </span>
              )
            })}
            {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        )
        runningIndex += letters.length + 1
        return wordEl
      })}
    </span>
  )
}

export default function HomeClient({ projects, services, heroImage, heroImageAlt }: HomeClientProps) {
  const { language } = useApp()
  const t = translations[language]

  const title1Count = Array.from(t.hero.title1).length
  const titleAccentCount = Array.from(t.hero.titleAccent).length

  return (
    <div className="relative">
      {/* HERO SECTION - Always high-contrast white text over architectural visual background */}
      <section id="hero-section" className="hero-photo-container relative h-screen min-h-screen w-full flex flex-col justify-between pt-28 pb-8 md:pb-12 overflow-hidden text-white">
        {/* Full-bleed Architectural Visual Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"}
            alt={heroImageAlt || "A-X Engineering Architecture Studio"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          {/* Subtle architectural grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          {/* Dark scrim gradient to guarantee AAA contrast for white text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />
        </div>

        {/* Hero Content - Scaled to max-w-xl with crisp white and red typography */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
          <div className="max-w-lg md:max-w-xl">
            {/* 1. Pill Tag - Opens/expands smoothly, then reveals animated text */}
            <div className="hero-pill-expand inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md mb-6 shadow-xl hover:border-[#D9222A]/60 hover:bg-black/80 transition-all cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#D9222A] animate-pulse shadow-sm shadow-[#D9222A] shrink-0" />
              <span className="hero-pill-text hero-tag-text text-[10px] uppercase tracking-[0.22em] font-normal">
                {t.hero.tag}
              </span>
            </div>

            {/* 2. Headline - Letter-by-letter popping up sequentially after the pill expands */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight leading-[1.08] mb-5">
              <AnimatedLetterText text={t.hero.title1} startIndex={0} baseDelay={0.7} />{' '}
              <AnimatedLetterText
                text={t.hero.titleAccent}
                startIndex={title1Count + 1}
                baseDelay={0.7}
                className="hero-accent-red font-normal"
              />{' '}
              <AnimatedLetterText
                text={t.hero.title2}
                startIndex={title1Count + titleAccentCount + 2}
                baseDelay={0.7}
              />
            </h1>

            {/* 3. Subtitle - Crisp off-white (F4F4F5) fading up after headline */}
            <p className="hero-desc-fade text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-8 tracking-wide max-w-lg text-[#F4F4F5]">
              {t.hero.subtitle}
            </p>

            {/* 4. Action Buttons - Pop animation like the pill, hover inversion, counter-clockwise -45deg arrow rotation */}
            <div className="hero-buttons-pop flex flex-col sm:flex-row items-center gap-3 justify-start">
              {/* Primary Button: Red that transitions to crisp white on hover */}
              <Link
                href="/projects"
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start space-x-2.5 pl-5 pr-2 py-2 bg-[#D9222A] hover:bg-white text-white hover:text-[#D9222A] border border-[#D9222A] hover:border-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 shadow-xl shadow-[#D9222A]/30 hover:shadow-2xl hover:scale-[1.02]"
              >
                <span>{t.hero.viewPortfolio}</span>
                <span className="w-5 h-5 rounded-full bg-black/25 group-hover:bg-[#D9222A]/10 flex items-center justify-center text-white group-hover:text-[#D9222A] transition-colors">
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </Link>

              {/* Secondary Button: White/glass that transitions to radiant red on hover */}
              <Link
                href="/kerko-oferte"
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start space-x-2.5 pl-5 pr-2 py-2 border border-white/40 hover:border-[#D9222A] text-white hover:text-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 bg-black/40 hover:bg-[#D9222A] backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-[#D9222A]/30 hover:scale-[1.02]"
              >
                <span>{language === 'sq' ? 'Kërko Ofertë' : language === 'mk' ? 'Побарај Понуда' : 'Request a Quote'}</span>
                <span className="w-5 h-5 rounded-full bg-white/15 group-hover:bg-black/25 flex items-center justify-center text-white transition-colors">
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick stats ribbon pinned to bottom of 100vh hero with animated counting integers */}
        <div className="hero-stats-fade relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <AnimatedCounter
            value={18}
            suffix="+"
            label={t.hero.stat2 || 'Vite Përvojë Inxhinierike'}
            delayMs={2200}
            durationMs={1600}
          />
          <AnimatedCounter
            value={140}
            suffix="+"
            label={t.hero.stat1 || 'Projekte të Realizuara'}
            delayMs={2300}
            durationMs={1800}
          />
          <AnimatedCounter
            value={85000}
            suffix=" m²"
            label={t.hero.stat3 || 'Metra Katrorë të Ndërtuar'}
            delayMs={2400}
            durationMs={2000}
          />
          <AnimatedCounter
            value={100}
            suffix="%"
            label={t.hero.stat4 || 'Arkitektë & Inxhinierë në Ekip'}
            delayMs={2500}
            durationMs={1500}
          />
        </div>
      </section>

      {/* ABOUT OVERVIEW / PHILOSOPHY */}
      <section className="py-20 md:py-28 bg-[#F0F2F6] dark:bg-[#0C0D10] border-t border-b border-stone-200 dark:border-white/5 relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-normal block">
                {t.about.tag}
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-stone-900 dark:text-white font-normal leading-tight">
                {t.about.title}
              </h2>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed font-normal">
                {t.about.p1}
              </p>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-normal">
                {t.about.p2}
              </p>

              {/* Core Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 bg-white dark:bg-[#121316] border border-stone-200 dark:border-white/5 flex items-start space-x-3 rounded-lg transition-colors duration-200 shadow-sm">
                  <Compass className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-900 dark:text-white font-normal font-display">
                      {t.about.pillar1Title}
                    </h4>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-1 font-normal">
                      {t.about.pillar1Desc}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-[#121316] border border-stone-200 dark:border-white/5 flex items-start space-x-3 rounded-lg transition-colors duration-200 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-900 dark:text-white font-normal font-display">
                      {t.about.pillar3Title}
                    </h4>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-1 font-normal">
                      {t.about.pillar3Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#D9222A] hover:text-[#F03542] transition-colors font-normal"
                >
                  <span>{t.about.readFull}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] md:h-[480px] w-full overflow-hidden border border-stone-200 dark:border-white/10 rounded-xl shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                  alt="A-X Engineering Luxury Residence"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-black/75 backdrop-blur-md border border-white/10 rounded-lg text-white">
                  <span className="text-[9px] uppercase tracking-widest text-[#FF4455] font-normal block mb-1">
                    {t.about.upcomingTag}
                  </span>
                  <h3 className="font-display text-lg text-white font-normal">
                    {t.about.upcomingTitle}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 font-normal">
                    {t.about.upcomingDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS MASONRY SHOWCASE */}
      <section className="py-20 md:py-28 bg-[#F7F8FA] dark:bg-[#090A0C] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-normal block mb-2.5">
                {t.portfolio.tag}
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-stone-900 dark:text-white font-normal tracking-tight">
                {t.portfolio.title}
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-600 dark:text-stone-400 max-w-sm font-normal">
              {t.portfolio.desc}
            </p>
          </div>

          {/* Masonry Grid with Single-Lane compact filters & solid pill badges */}
          <ProjectMasonry projects={projects} showFilters={true} limit={6} />

          {/* Bottom link to all projects */}
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center space-x-2.5 pl-4 pr-1.5 py-1.5 border border-stone-300 dark:border-white/20 hover:border-[#D9222A] text-stone-900 dark:text-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 bg-white dark:bg-white/5 hover:bg-stone-50 dark:hover:bg-white/10 shadow-sm"
            >
              <span>{t.portfolio.viewAll} ({projects.length})</span>
              <span className="w-5 h-5 rounded-full bg-stone-100 dark:bg-white/10 flex items-center justify-center text-stone-700 dark:text-stone-300 group-hover:bg-[#D9222A] group-hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DISCIPLINES & SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-[#F0F2F6] dark:bg-[#0C0D10] border-t border-stone-200 dark:border-white/5 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-normal block mb-2.5">
              {t.services.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              {t.services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const sTitle = language === 'mk' && service.title_mk ? service.title_mk : language === 'en' && service.title_en ? service.title_en : service.title
              const sDesc = language === 'mk' && service.description_mk ? service.description_mk : language === 'en' && service.description_en ? service.description_en : service.description
              const sFeatures = (language === 'mk' && service.features_mk?.length ? service.features_mk : language === 'en' && service.features_en?.length ? service.features_en : service.features) || []
              const sSlug = service.slug || (index === 0 ? 'arkitekture-dhe-projektim' : index === 1 ? 'mbikeqyrje-e-licencuar-kantier' : index === 2 ? 'ndertim-rezidencial-luksoz' : index === 3 ? 'inxhinieri-strukturore-statike' : 'arkitekture-enterieri-3d')

              return (
                <Link
                  key={service.number || index}
                  href={`/services/${sSlug}`}
                  className="group p-7 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 hover:border-[#D9222A]/60 transition-all duration-300 flex flex-col justify-between space-y-5 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#D9222A]/10 hover:-translate-y-1 relative"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-stone-500 group-hover:text-[#D9222A] transition-colors font-normal">
                        {service.number || String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-stone-100 dark:bg-white/5 group-hover:bg-[#D9222A] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-stone-900 dark:text-white font-normal group-hover:text-[#D9222A] transition-colors">
                      {sTitle}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-normal line-clamp-3">
                      {sDesc}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-stone-200/80 dark:border-white/5 flex flex-wrap gap-1.5">
                    {sFeatures.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-normal px-2.5 py-1 bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-white/10 rounded-full transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* MAIN BLACK CTA BANNER */}
      <MainCtaBanner
        tag="BASHKËPUNIMI YNË"
        heading="Keni një Projekt në Mendje?"
        description="Konsultohuni me inxhinierët tanë në Gostivar për një vlerësim të saktë teknik dhe financiar."
        buttonText="Fillo Llogaritjen e Ofertës"
        buttonHref="/kerko-oferte"
      />
    </div>
  )
}
