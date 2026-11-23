import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Award, CheckCircle2, Users, Mail } from 'lucide-react'
import { getTeamMembers } from '@/sanity/lib/dataService'
import { SITE_STATS, COMPANY_INFO } from '@/data/projectsData'

export const metadata: Metadata = {
  title: 'About Us & Leadership Staff | AX Engineering Gostivar',
  description:
    'Discover AX Engineering: premier architectural projection office, structural engineering, and construction supervision firm based in Gostivar, North Macedonia.',
}

export default async function AboutPage() {
  const team = await getTeamMembers()

  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0B0B0C] min-h-screen text-stone-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-3">
            Company Profile
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-tight">
            Engineering Precision. Architectural Vision.
          </h1>
          <p className="text-stone-400 text-sm md:text-base mt-4 leading-relaxed font-light">
            Founded in Gostivar, AX Engineering operates as an integrated architectural projection office, licensed civil engineering practice, and construction contractor.
          </p>
        </div>

        {/* Narrative & Image Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
              Rooted in Gostivar, Engineered for Longevity
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              AX Engineering was created to elevate local building standards to European tier-one benchmarks. Our multifaceted capabilities unite two historically divided fields: imaginative architectural artistry and rigorous structural static engineering.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed">
              According to municipal and regional business registries, AX Engineering holds complete statutory licensing across four fundamental competencies: architectural conceptualization, static and structural projection, independent construction site supervision (Nadzor), and turnkey building execution.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed">
              Today, our practice is widely recognized for bespoke luxury villas, large-scale commercial structures, and our expansion into proprietary residential developments with our signature AX Residences in Gostivar.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] block mb-1">
                  Chamber of Engineers
                </span>
                <p className="text-xs text-white">Fully Licensed Authorization A & B</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] block mb-1">
                  Technical Audit
                </span>
                <p className="text-xs text-white">Certified Legal Construction Supervision</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[480px] w-full overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
              alt="AX Engineering Architecture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">
                Field Office
              </span>
              <p className="font-serif text-lg text-white">Gostivar, North Macedonia</p>
            </div>
          </div>
        </div>

        {/* The 4 Pillars / Activities */}
        <div className="mb-28 pt-16 border-t border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-3">
              Official Scope
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Core Activities & Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#131316] border border-white/5 space-y-3">
              <span className="font-mono text-xs text-[#C5A880]">01</span>
              <h3 className="font-serif text-lg text-white">Architectural Services</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Conceptualizing luxury residences, modern villas, interior spatial choreography, and 3D photorealistic renderings.
              </p>
            </div>

            <div className="p-6 bg-[#131316] border border-white/5 space-y-3">
              <span className="font-mono text-xs text-[#C5A880]">02</span>
              <h3 className="font-serif text-lg text-white">Projection Office</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Preparation of main execution projects, Eurocode static calculations, MEP engineering, and municipal building permitting.
              </p>
            </div>

            <div className="p-6 bg-[#131316] border border-white/5 space-y-3">
              <span className="font-mono text-xs text-[#C5A880]">03</span>
              <h3 className="font-serif text-lg text-white">Site Supervision & Audit</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Independent construction site supervision (Nadzor), concrete strength testing, safety inspections, and legal technical audit.
              </p>
            </div>

            <div className="p-6 bg-[#131316] border border-white/5 space-y-3">
              <span className="font-mono text-xs text-[#C5A880]">04</span>
              <h3 className="font-serif text-lg text-white">Construction & Developments</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Turnkey construction of private luxury residences and breaking ground on our own upcoming AX Signature Developments in Gostivar.
              </p>
            </div>
          </div>
        </div>

        {/* STAFF & LEADERSHIP SECTION */}
        <section id="staff" className="mb-28 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-3">
                Leadership
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-tight">
                Engineering Staff & Architects
              </h2>
            </div>
            <p className="text-xs text-stone-400 max-w-md">
              Our multidisciplinary team combines licensed architects, senior structural engineers, CAD/BIM coordinators, and site inspectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name || index}
                className="group bg-[#131316] border border-white/5 hover:border-[#C5A880]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-80 w-full overflow-hidden bg-stone-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg text-white font-normal group-hover:text-[#C5A880] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#C5A880] tracking-wider uppercase">
                    {member.role}
                  </p>
                  <p className="text-xs text-stone-400 leading-relaxed pt-2">
                    {member.bio}
                  </p>

                  {member.email && (
                    <div className="pt-4 border-t border-white/5 flex items-center space-x-2 text-[11px] text-stone-400 hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{member.email}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <div className="p-8 md:p-14 bg-gradient-to-r from-[#171410] via-[#121215] to-[#121215] border border-[#C5A880]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C5A880] block mb-2">
              Collaborate With AX Engineering
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-light">
              Planning your private villa or commercial complex?
            </h3>
            <p className="text-xs text-stone-400 mt-2 max-w-xl">
              Meet our team at our Gostivar office to review terrain feasibility, permit schedules, and architectural concepts.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#C5A880] hover:bg-white text-black font-semibold uppercase tracking-[0.2em] text-xs transition-all shrink-0"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
