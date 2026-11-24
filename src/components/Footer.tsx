'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ArrowUpRight, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import { COMPANY_INFO } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

export default function Footer() {
  const pathname = usePathname()
  const { language } = useApp()
  const t = translations[language]

  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <footer className="relative overflow-hidden bg-[#F0F2F6] dark:bg-[#060608] text-stone-700 dark:text-stone-300 border-t border-stone-200 dark:border-white/5 pt-16 pb-12 transition-colors duration-200">
      {/* Decorative Blurred Ambient Ellipses on Sides */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 md:h-[400px] md:w-[400px] rounded-full bg-[#D9222A]/12 dark:bg-[#D9222A]/18 blur-[90px] md:blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 md:h-[420px] md:w-[420px] rounded-full bg-[#D9222A]/10 dark:bg-[#D9222A]/15 blur-[100px] md:blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 -top-20 -translate-x-1/2 h-36 w-96 rounded-full bg-white/50 dark:bg-white/5 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Pre-Footer Call to Action */}
        <div className="pb-12 border-b border-stone-200 dark:border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] font-medium block mb-2">
              {t.footer.tag}
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-stone-900 dark:text-white font-normal tracking-tight max-w-xl leading-tight">
              {t.footer.title}
            </h2>
          </div>
          <div>
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2.5 pl-4 pr-1.5 py-1.5 bg-[#D9222A] hover:bg-[#F03542] text-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 shadow-xl shadow-[#D9222A]/20"
            >
              <span>{t.footer.scheduleMeeting}</span>
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-white group-hover:bg-black/35 transition-colors">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-stone-200 dark:border-white/10">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 shrink-0 p-0.5 rounded-full border border-stone-300 dark:border-stone-800 bg-stone-900 flex items-center justify-center">
                <Image
                  src="/images/logo-dark-theme.png"
                  alt="A-X Engineering Logo"
                  width={34}
                  height={34}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display tracking-[0.16em] text-sm text-stone-900 dark:text-white uppercase font-bold">
                  A-X Engineering
                </span>
                <span className="text-[9px] tracking-[0.24em] text-[#D9222A] uppercase font-semibold">
                  Architecture Studio
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-[#D9222A] tracking-wider uppercase font-medium">
              <ShieldCheck className="w-4 h-4 text-[#D9222A]" />
              <span>{t.footer.certifiedAudit}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-stone-900 dark:text-white font-semibold mb-5 font-display">
              {t.footer.navigationTitle}
            </h3>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <Link href="/projects" className="text-stone-600 dark:text-stone-400 hover:text-[#D9222A] dark:hover:text-[#D9222A] transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-stone-600 dark:text-stone-400 hover:text-[#D9222A] dark:hover:text-[#D9222A] transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-600 dark:text-stone-400 hover:text-[#D9222A] dark:hover:text-[#D9222A] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/about#staff" className="text-stone-600 dark:text-stone-400 hover:text-[#D9222A] dark:hover:text-[#D9222A] transition-colors">
                  {t.nav.staff}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-600 dark:text-stone-400 hover:text-[#D9222A] dark:hover:text-[#D9222A] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-stone-900 dark:text-white font-semibold mb-5 font-display">
              {t.footer.expertiseTitle}
            </h3>
            <ul className="space-y-2.5 text-xs tracking-wider text-stone-600 dark:text-stone-400">
              <li>Vila & Rezidenca Private</li>
              <li>A-X Signature Residences</li>
              <li>Projektim Statik & Sizmik</li>
              <li>Mbikëqyrje e Licencuar (Nadzor)</li>
              <li>Dizajn Enterieri & 3D Render</li>
              <li>Audit Teknik & Legalizim</li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-stone-900 dark:text-white font-semibold mb-5 font-display">
              {t.footer.headquartersTitle}
            </h3>
            <div className="space-y-3.5 text-xs text-stone-600 dark:text-stone-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D9222A] shrink-0" />
                <span>{COMPANY_INFO.mobile}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#D9222A] shrink-0" />
                <span className="text-stone-900 dark:text-white font-medium">{COMPANY_INFO.contactEmail}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                <span>{t.contact.hoursValue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 tracking-wider">
          <p>© {new Date().getFullYear()} A-X Engineering Architecture Studio. {t.footer.rights}</p>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-[#D9222A] transition-colors">
              {language === 'sq' ? 'Politika e Privatësisë' : language === 'mk' ? 'Политика за Приватност' : 'Privacy Policy'}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#D9222A] transition-colors">
              {language === 'sq' ? 'Kushtet e Përdorimit' : language === 'mk' ? 'Услови за Користење' : 'Terms & Conditions'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
