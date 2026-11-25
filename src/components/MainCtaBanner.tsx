'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useApp } from '@/context/AppContext'

interface MainCtaBannerProps {
  tag?: string
  heading?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  className?: string
}

export default function MainCtaBanner({
  tag,
  heading,
  description,
  buttonText,
  buttonHref = '/kerko-oferte',
  className = '',
}: MainCtaBannerProps) {
  const { language } = useApp()

  const defaults = {
    sq: {
      tag: 'BASHKËPUNIMI YNË',
      heading: 'Keni një Projekt në Mendje?',
      description:
        'Konsultohuni me inxhinierët tanë në Gostivar për një vlerësim të saktë teknik dhe financiar.',
      buttonText: 'Fillo Llogaritjen e Ofertës',
    },
    mk: {
      tag: 'НАШАТА СОРАБОТКА',
      heading: 'Имате Проект во План?',
      description:
        'Консултирајте се со нашиот инженерски тим во Гостивар за точна техничка и финансиска проценка.',
      buttonText: 'Започни Пресметка на Понуда',
    },
    en: {
      tag: 'OUR COLLABORATION',
      heading: 'Have a Project in Mind?',
      description:
        'Consult with our senior engineers in Gostivar for an uncompromised architectural and structural estimate.',
      buttonText: 'Configure Project Quote',
    },
  }[language] || {
    tag: 'BASHKËPUNIMI YNË',
    heading: 'Keni një Projekt në Mendje?',
    description:
      'Konsultohuni me inxhinierët tanë në Gostivar për një vlerësim të saktë teknik dhe financiar.',
    buttonText: 'Fillo Llogaritjen e Ofertës',
  }

  const finalTag = tag || defaults.tag
  const finalHeading = heading || defaults.heading
  const finalDesc = description || defaults.description
  const finalBtnText = buttonText || defaults.buttonText

  return (
    <section className={`py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12 ${className}`}>
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0B0C0E] text-white relative overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Architectural Ambient Red Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 w-88 h-88 rounded-full bg-[#D9222A]/20 blur-[110px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-[#D9222A]/10 blur-[90px]" />

        <div className="relative z-10 max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#FF4455] block font-normal mb-3">
            {finalTag}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-3 text-white">
            {finalHeading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-stone-300 font-normal leading-relaxed">
            {finalDesc}
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full sm:w-auto">
          <Link
            href={buttonHref}
            className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start space-x-3 pl-6 pr-2 py-2.5 bg-[#D9222A] hover:bg-white text-white hover:text-[#D9222A] border border-[#D9222A] hover:border-white text-[13px] font-normal rounded-full transition-all duration-300 shadow-xl shadow-[#D9222A]/35 hover:shadow-2xl hover:scale-[1.02]"
          >
            <span>{finalBtnText}</span>
            <span className="w-6 h-6 rounded-full bg-black/25 group-hover:bg-[#D9222A]/10 flex items-center justify-center text-white group-hover:text-[#D9222A] transition-colors">
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
