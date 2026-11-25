'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, ArrowRight, Compass, Layers, ShieldCheck, Building2 } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import MainCtaBanner from '@/components/MainCtaBanner'
import { TeamMemberItem } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

export default function AboutClient({ team }: { team: TeamMemberItem[] }) {
  const { language } = useApp()
  const t = translations[language]

  const pillars = [
    {
      num: '01',
      icon: Compass,
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc,
      tags: ['Koncept 3D', 'Masterplane', 'Leje Ndërtimi'],
      accent: 'Arkitekturë',
    },
    {
      num: '02',
      icon: Layers,
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc,
      tags: ['Llogaritje Statike', 'Eurocode 2 & 8', 'Plane Armimi'],
      accent: 'Inxhinieri',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc,
      tags: ['Kontroll Cilësie', 'Pranim Teknik', 'Audit Kantieri'],
      accent: 'Mbikëqyrje',
    },
    {
      num: '04',
      icon: Building2,
      title: t.about.pillar4Title,
      desc: t.about.pillar4Desc,
      tags: ['Rezidenca Private', 'Çelësa në Dorë', 'Zbatim Luksoz'],
      accent: 'Realizim',
    },
  ]

  return (
    <div className="relative overflow-hidden bg-[var(--bg-main)] min-h-screen text-stone-700 dark:text-stone-300 transition-colors duration-200">
      {/* Decorative Ambient Red Glowing Ellipses */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 md:h-[460px] md:w-[460px] rounded-full bg-[#D9222A]/10 dark:bg-[#D9222A]/15 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-2/3 h-80 w-80 md:h-[460px] md:w-[460px] rounded-full bg-[#D9222A]/8 dark:bg-[#D9222A]/12 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />
      {/* Architectural Page Header matching single services */}
      <PageHeader
        tag={t.about.tag}
        title={t.about.title}
        subtitle={t.about.p1}
        heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=85"
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.nav.about },
        ]}
      />

      <div className="pt-20 pb-24 max-w-7xl mx-auto px-6 md:px-12">
        {/* Narrative & Image Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-stone-900 dark:text-white font-normal">
              Gostivar • Arkitekturë & Inxhinieri
            </h2>
            <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              {t.about.p3}
            </p>

            <div className="pt-3 grid grid-cols-2 gap-5 border-t border-stone-200 dark:border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block mb-1 font-semibold">
                  {t.about.license1Title}
                </span>
                <p className="text-xs text-stone-900 dark:text-white">{t.about.license1Desc}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D9222A] block mb-1 font-semibold">
                  {t.about.license2Title}
                </span>
                <p className="text-xs text-stone-900 dark:text-white">{t.about.license2Desc}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[440px] w-full overflow-hidden border border-stone-200 dark:border-white/10 rounded-xl shadow-md">
            <Image
              src="https://pub-7ce7718d2d8f41d5bc61f3b85a63ce05.r2.dev/sanity/0e8666b62def86686cca0b07a020cd542d891ab6-1600x1067.jpg"
              alt="A-X Engineering Architecture Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[9px] uppercase tracking-widest text-[#FF4455] block mb-1 font-semibold">
                Zyra Qendrore
              </span>
              <p className="font-display text-base !text-white">Gostivar, North Macedonia</p>
            </div>
          </div>
        </div>

        {/* The 4 Pillars / Activities - Enhanced Architectural Cards */}
        <div className="relative mb-24 pt-12 border-t border-stone-200 dark:border-white/10">
          {/* Ambient red blurred ellipse behind cards */}
          <div
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-80 w-80 md:h-[450px] md:w-[450px] rounded-full bg-[#D9222A]/10 dark:bg-[#D9222A]/15 blur-[120px]"
            aria-hidden="true"
          />

          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-medium block mb-2.5">
              Fusha e Veprimit
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              Disiplinat & Kompetencat Kryesore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.num}
                  className="group relative p-6 sm:p-7 rounded-[26px] bg-white/90 dark:bg-[#0E0F12]/90 backdrop-blur-xl border border-stone-200/90 dark:border-white/10 shadow-lg shadow-black/[0.03] dark:shadow-black/20 hover:border-[#D9222A]/50 hover:shadow-2xl hover:shadow-[#D9222A]/15 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top shine */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent" />

                  <div>
                    {/* Header: Number Badge + Architectural Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D9222A]/10 text-[#D9222A] border border-[#D9222A]/20">
                        {pillar.num}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-800 dark:text-stone-200 group-hover:bg-[#D9222A] group-hover:text-white group-hover:border-[#D9222A] group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Accent Label */}
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9222A] font-semibold block mb-1">
                      {pillar.accent}
                    </span>

                    {/* Pillar Title */}
                    <h3 className="font-display text-lg md:text-xl text-stone-900 dark:text-white font-normal mb-3 leading-snug group-hover:text-[#D9222A] dark:group-hover:text-[#FF4455] transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="text-xs md:text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed font-normal mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Micro-tags / Deliverables */}
                  <div className="pt-4 border-t border-stone-100 dark:border-white/5 flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 font-normal border border-stone-200/60 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interactive red glow strip on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D9222A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )
            })}
          </div>
        </div>

        {/* STAFF & LEADERSHIP SECTION */}
        <section id="staff" className="mb-24 pt-12 border-t border-stone-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-medium block mb-2.5">
                {t.nav.staff}
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
                Arkitektët & Inxhinierët Tanë
              </h2>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 max-w-md">
              Ekipi ynë bashkon arkitektë të autorizuar, inxhinierë të lartë statikë dhe inspektorë kantiereve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, index) => {
              const mRole = language === 'mk' && member.role_mk ? member.role_mk : language === 'en' && member.role_en ? member.role_en : member.role
              const mBio = language === 'mk' && member.bio_mk ? member.bio_mk : language === 'en' && member.bio_en ? member.bio_en : member.bio

              return (
                <div
                  key={member.name || index}
                  className="group bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 hover:border-[#D9222A]/50 transition-all duration-300 overflow-hidden rounded-xl shadow-sm hover:shadow-md"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-stone-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-5 space-y-1.5">
                    <h3 className="font-display text-base text-stone-900 dark:text-white font-normal group-hover:text-[#D9222A] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-[#D9222A] tracking-wider uppercase font-normal">
                      {mRole}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pt-1 font-normal">
                      {mBio}
                    </p>

                    {member.email && (
                      <div className="pt-3 border-t border-stone-200 dark:border-white/5 flex items-center space-x-2 text-[10px] text-stone-500 dark:text-stone-400 hover:text-[#D9222A] transition-colors">
                        <Mail className="w-3.5 h-3.5 text-[#D9222A]" />
                        <span>{member.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* BLACK CTA BANNER */}
        <MainCtaBanner
          tag="BASHKËPUNIMI YNË"
          heading="Po Planifikoni Vilën Tuaj Apo një Kompleks Afarist?"
          description="Na vizitoni në zyrën tonë në Gostivar për të analizuar mundësitë e parcelës, parametrat urbanistikë dhe konceptin arkitektonik."
          buttonText="Fillo Llogaritjen e Ofertës"
          buttonHref="/kerko-oferte"
          className="!px-0 !py-0 mt-20"
        />
      </div>
    </div>
  )
}
