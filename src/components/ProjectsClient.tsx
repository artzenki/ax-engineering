'use client'

import ProjectMasonry from '@/components/ProjectMasonry'
import PageHeader from '@/components/PageHeader'
import MainCtaBanner from '@/components/MainCtaBanner'
import { ProjectItem } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

export default function ProjectsClient({ projects }: { projects: ProjectItem[] }) {
  const { language } = useApp()
  const t = translations[language]

  return (
    <div className="relative overflow-hidden bg-[var(--bg-main)] min-h-screen transition-colors duration-200">
      {/* Decorative Ambient Red Glowing Ellipses */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 md:h-[480px] md:w-[480px] rounded-full bg-[#D9222A]/10 dark:bg-[#D9222A]/15 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-2/3 h-80 w-80 md:h-[480px] md:w-[480px] rounded-full bg-[#D9222A]/8 dark:bg-[#D9222A]/12 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />
      {/* Architectural Page Header matching single services */}
      <PageHeader
        tag={t.portfolio.tag}
        title={t.portfolio.title}
        subtitle={t.portfolio.desc}
        heroImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85"
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.nav.projects },
        ]}
      />

      <div className="pt-16 pb-24 max-w-7xl mx-auto px-6 md:px-12">
        {/* Masonry Grid with Filters */}
        <ProjectMasonry projects={projects} showFilters={true} />

        {/* Black CTA Banner */}
        <MainCtaBanner
          tag="INVESTIMI YNË I PËRBASHKËT"
          heading="Dëshironi një Rezidencë apo Kompleks të Këtij Standardi?"
          description="Inxhinierët tanë në Gostivar ofrojnë mbështetje të plotë nga skicat e para deri te çertifikimi i ndërtimit."
          buttonText="Kërko Ofertë për Projektin Tuaj"
          buttonHref="/kerko-oferte"
          className="!px-0 !py-0 mt-20"
        />
      </div>
    </div>
  )
}
