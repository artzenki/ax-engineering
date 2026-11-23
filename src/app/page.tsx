import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowDown, ShieldCheck, CheckCircle2, Building2, Compass, HardHat, Ruler } from 'lucide-react'
import ProjectMasonry from '@/components/ProjectMasonry'
import { getAllProjects, getServices } from '@/sanity/lib/dataService'
import { SITE_STATS, COMPANY_INFO } from '@/data/projectsData'

export default async function HomePage() {
  const [projects, services] = await Promise.all([
    getAllProjects(),
    getServices(),
  ])

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Hero Background with High-end Architecture Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
            alt="AX Engineering Architecture"
            fill
            priority
            className="object-cover object-center filter brightness-[0.4] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-black/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0B0B0C]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left flex flex-col justify-between pt-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 border border-[#C5A880]/40 bg-black/40 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Gostivar • Architecture & Technical Audit
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-6">
              Sculpting <span className="italic font-normal text-[#C5A880]">Enduring</span> Spaces.
            </h1>

            <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light mb-10">
              AX Engineering is a leading architectural projection office and structural engineering firm based in Gostivar. Specializing in high-end private villas, commercial hubs, licensed site supervision, and upcoming proprietary residences.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] hover:bg-white text-black font-medium uppercase tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-[#C5A880] text-white hover:text-[#C5A880] uppercase tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center"
              >
                <span>Initiate Project</span>
              </Link>
            </div>
          </div>

          {/* Quick stats ribbon */}
          <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {SITE_STATS.map((stat, i) => (
              <div key={i} className="space-y-1">
                <span className="font-serif text-2xl md:text-3xl text-white font-light tracking-tight">
                  {stat.value}
                </span>
                <p className="text-[11px] uppercase tracking-wider text-stone-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT OVERVIEW / PHILOSOPHY */}
      <section className="py-24 md:py-32 bg-[#0E0E10] border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block">
                The AX Standard
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight">
                Where architectural vision meets precision engineering.
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Headquartered in Gostivar, AX Engineering has established an authoritative presence in the Balkan construction landscape. Our practice bridges the delicate balance between sculptural aesthetic design and rigorous technical discipline.
              </p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Whether overseeing large-scale civil audits, engineering complex cantilevers for luxury hillside villas, or breaking ground on our own upcoming signature residences, we manage the complete lifecycle from sketch to occupancy certification.
              </p>

              {/* Core Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#141418] border border-white/5 flex items-start space-x-3">
                  <Compass className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-medium">Bespoke Projection</h4>
                    <p className="text-[11px] text-stone-400 mt-1">Concept drawings & photorealistic 3D rendering.</p>
                  </div>
                </div>
                <div className="p-4 bg-[#141418] border border-white/5 flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-medium">Licensed Audit</h4>
                    <p className="text-[11px] text-stone-400 mt-1">Independent site supervision & quality control.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors"
                >
                  <span>Read our full philosophy & team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[480px] md:h-[540px] w-full overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                  alt="AX Engineering Luxury Residence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">
                    Upcoming Development
                  </span>
                  <p className="font-serif text-lg text-white">
                    AX Signature Residences — Gostivar Central
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    32 luxury apartments, penthouse duplexes, and private wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE OF PROJECTS (MASONRY & QUICK FILTERS) */}
      <section className="py-24 md:py-32 bg-[#0B0B0C] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-3">
                Portfolio
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-tight">
                Selected Works & Developments
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 border border-white/20 hover:border-[#C5A880] text-stone-300 hover:text-white transition-all self-start md:self-auto"
            >
              <span>Explore All Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Project Masonry with Filters */}
          <ProjectMasonry projects={projects} showFilters={true} limit={6} />
        </div>
      </section>

      {/* DISCIPLINES / WHAT WE DO */}
      <section id="services" className="py-24 md:py-32 bg-[#101013] border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-3">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-tight">
              Integrated Architectural & Engineering Services
            </h2>
            <p className="text-stone-400 text-sm mt-4 leading-relaxed">
              From preliminary sketches and seismic calculations to technical audit and turnkey building construction in Gostivar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={service.number || idx}
                className="group p-8 bg-[#141418] border border-white/5 hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#C5A880] tracking-widest">
                      {service.number}
                    </span>
                    <Building2 className="w-4 h-4 text-stone-500 group-hover:text-[#C5A880] transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl text-white font-light mb-3 group-hover:text-[#C5A880] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <ul className="space-y-2 border-t border-white/5 pt-6 text-[11px] text-stone-400">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <span className="w-1 h-1 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Inquire Card */}
            <div className="p-8 bg-gradient-to-br from-[#1C1813] to-[#121215] border border-[#C5A880]/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-3">
                  Tailored Commission
                </span>
                <h3 className="font-serif text-2xl text-white font-light mb-3">
                  Require a specialized engineering audit or villa design?
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-6">
                  We review terrain topographies, planning zoning constraints, and structural blueprints for private and institutional investors.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 py-3 px-6 bg-[#C5A880] hover:bg-white text-black font-semibold text-xs uppercase tracking-widest transition-all"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING DEVELOPMENTS SPOTLIGHT */}
      <section className="py-24 bg-[#0B0B0C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative border border-white/10 bg-[#121215] p-8 md:p-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] block">
                  Proprietary Real Estate Development
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-white font-light">
                  AX Signature Residences — Gostivar
                </h2>
                <p className="text-stone-300 text-sm leading-relaxed">
                  AX Engineering is expanding beyond client projection into premier residential property development. Our debut development in Central Gostivar blends Italian minimalism with cutting-edge German triple glazing and sound insulation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                  <div className="border-l border-[#C5A880] pl-4">
                    <span className="font-serif text-xl text-white block">32</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Exclusive Units</span>
                  </div>
                  <div className="border-l border-[#C5A880] pl-4">
                    <span className="font-serif text-xl text-white block">4</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Top Penthouses</span>
                  </div>
                  <div className="border-l border-[#C5A880] pl-4">
                    <span className="font-serif text-xl text-white block">2026</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Handover Date</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/projects/ax-signature-residences"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#C5A880] transition-all"
                  >
                    <span>View Development Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[360px] md:h-[420px] w-full overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85"
                  alt="AX Signature Residences Rendering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
