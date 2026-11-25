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
    <div className="bg-[var(--bg-main)] min-h-screen transition-colors duration-200">
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
