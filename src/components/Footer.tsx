'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import { COMPANY_INFO } from '@/data/projectsData'

export default function Footer() {
  const pathname = usePathname()

  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <footer className="bg-[#070708] text-stone-300 border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Pre-Footer Call to Action */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] block mb-3">
              Commence Your Vision
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-tight max-w-xl">
              Let us shape your next architectural landmark.
            </h2>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[#C5A880] hover:bg-white text-black font-medium uppercase tracking-[0.2em] text-xs transition-all duration-300"
            >
              <span>Schedule Initial Meeting</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Col 1: Identity */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <span className="w-9 h-9 border border-[#C5A880] flex items-center justify-center font-serif text-base text-[#C5A880]">
                AX
              </span>
              <span className="font-serif tracking-[0.2em] text-base text-white uppercase">
                AX Engineering
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
              Licensed architectural projection office, structural engineering, and construction supervision based in Gostivar. Specializing in high-end private residences and bespoke developments.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-[#C5A880] tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Certified Technical Audit Office</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-white font-medium mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <Link href="/projects" className="text-stone-400 hover:text-[#C5A880] transition-colors">
                  Selected Works & Gallery
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-stone-400 hover:text-[#C5A880] transition-colors">
                  Disciplines & Scope
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-[#C5A880] transition-colors">
                  Studio Philosophy & History
                </Link>
              </li>
              <li>
                <Link href="/about#staff" className="text-stone-400 hover:text-[#C5A880] transition-colors">
                  Engineering Leadership & Staff
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-[#C5A880] transition-colors">
                  Direct Inquiries
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-[#C5A880] hover:text-white transition-colors flex items-center space-x-1">
                  <span>Client CMS Studio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-white font-medium mb-6">
              Expertise
            </h3>
            <ul className="space-y-3 text-xs tracking-wider text-stone-400">
              <li>Luxury Residential Architecture</li>
              <li>Signature AX Residences</li>
              <li>Seismic & Static Engineering</li>
              <li>Licensed Site Supervision (Nadzor)</li>
              <li>Interior Living & Spatial Styling</li>
              <li>Legal Permitting & Technical Audit</li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-white font-medium mb-6">
              Headquarters
            </h3>
            <div className="space-y-4 text-xs text-stone-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{COMPANY_INFO.phone} / {COMPANY_INFO.mobile}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="text-white">{COMPANY_INFO.contactEmail}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 tracking-wider">
          <p>© {new Date().getFullYear()} AX Engineering Gostivar. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span>Architecture</span>
            <span>•</span>
            <span>Engineering</span>
            <span>•</span>
            <span>Construction</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
