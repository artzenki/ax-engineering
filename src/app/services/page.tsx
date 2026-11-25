import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { getServices } from '@/sanity/lib/dataService'

export const metadata: Metadata = {
  title: 'Fushat e Veprimtarisë & Shërbimet | A-X Engineering',
  description: 'Shërbimet profesionale inxhinierike dhe arkitekturore të A-X Engineering: Projektim, Statikë, Mbikëqyrje Ndërtimi, dhe Enterier.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="relative overflow-hidden min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* Architectural Page Header matching all pages - animated title, without pill */}
      <PageHeader
        title="Shërbime të Licencuara Inxhinierike"
        subtitle="Nga skicat e para konceptuale deri te vulosja e librit të ndërtimit dhe çelësat në dorë. Zbuloni disiplinat tona të integruara."
        heroImage="https://pub-7ce7718d2d8f41d5bc61f3b85a63ce05.r2.dev/sanity/cb0f407ebaa75ed2f2d9f7ae70e2819de85230e5-1600x1067.jpg"
        breadcrumbs={[
          { label: 'Ballina', href: '/' },
          { label: 'Shërbimet' },
        ]}
      />

      {/* Decorative Ambient Red Glowing Ellipses */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 md:h-[480px] md:w-[480px] rounded-full bg-[#D9222A]/10 dark:bg-[#D9222A]/15 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-2/3 h-80 w-80 md:h-[480px] md:w-[480px] rounded-full bg-[#D9222A]/8 dark:bg-[#D9222A]/12 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />

      <div className="pt-16 pb-24 max-w-7xl mx-auto px-6 md:px-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const sSlug = srv.slug || (idx === 0 ? 'arkitekture-dhe-projektim' : idx === 1 ? 'mbikeqyrje-e-licencuar-kantier' : idx === 2 ? 'ndertim-rezidencial-luksoz' : idx === 3 ? 'inxhinieri-strukturore-statike' : 'arkitekture-enterieri-3d')
            const image = srv.heroImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'

            return (
              <Link
                key={srv.number || idx}
                href={`/services/${sSlug}`}
                className="group rounded-3xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#D9222A]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-display text-xs font-normal px-3 py-1 bg-black/70 backdrop-blur-md text-white rounded-full border border-white/20">
                      {srv.number}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-normal text-stone-900 dark:text-white group-hover:text-[#D9222A] transition-colors leading-snug mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 font-normal leading-relaxed line-clamp-3">
                      {srv.shortDescription || srv.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-xs text-[#D9222A]">
                    <span className="font-display font-normal">Eksploro Shërbimin</span>
                    <span className="w-6 h-6 rounded-full bg-[#D9222A]/10 text-[#D9222A] group-hover:bg-[#D9222A] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
