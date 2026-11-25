'use client'

import Link from 'next/link'
import { ShieldCheck, Lock, FileText, ArrowLeft, Building2 } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { COMPANY_INFO } from '@/data/projectsData'

export default function PrivacyClient() {
  const { language } = useApp()

  const content = {
    sq: {
      tag: 'Siguria & Privatësia',
      title: 'Politika e Privatësisë',
      subtitle: 'Si i mbrojmë të dhënat dhe dokumentacionin tuaj teknik në A-X Engineering.',
      lastUpdated: 'Përditësuar së fundmi: Nëntor 2026',
      backHome: 'Kthehu në Ballinë',
      sections: [
        {
          title: '1. Mbledhja e Informacionit',
          text: 'A-X Engineering mbledh të dhëna të nevojshme për hartimin e projekteve arkitekturore, kërkesave për ofertë dhe mbikëqyrje ndërtimi. Këto përfshijnë: emrin, email-in, numrin e telefonit, lokacionin e parcelës ose pronës, dhe të dhënat kadastrale që na i dorëzoni me dëshirë.',
        },
        {
          title: '2. Përdorimi i të Dhënave Teknike',
          text: 'Të gjitha skicat, planet gjeodezike, llogaritjet statike dhe dokumentacioni i ndërtimit përdoren ekskluzivisht për qëllime të licencimit, projektimit dhe zbatimit të objektit tuaj në përputhje me legjislacionin urbanistik.',
        },
        {
          title: '3. Konfidencialiteti dhe Siguria',
          text: 'Dokumentacioni i projekteve ruhet në servera të sigurt dhe arkivën tonë të mbrojtur dixhitale. Asnjë e dhënë personale ose skicë arkitekturore nuk i jepet palëve të treta pa pëlqimin tuaj paraprak me shkrim.',
        },
        {
          title: '4. Cookies dhe Analitika',
          text: 'Faqja jonë përdor cookies thelbësore për të ruajtur preferencat e gjuhës (Shqip, Maqedonisht, Anglisht) dhe performancën e faqes. Nuk përdorim cookies ndjekëse invazive.',
        },
        {
          title: '5. Të Drejtat Tuaja',
          text: 'Ju keni të drejtë të kërkoni qasje, korrigjim ose fshirje të të dhënave tuaja të kontaktit në çdo kohë duke na kontaktuar në zyrat tona në Gostivar.',
        },
      ],
    },
    mk: {
      tag: 'Безбедност и Приватност',
      title: 'Политика за Приватност',
      subtitle: 'Како ги заштитуваме вашите податоци и техничка документација во А-Х Инженеринг.',
      lastUpdated: 'Последно ажурирано: Ноември 2026',
      backHome: 'Назад кон Почетна',
      sections: [
        {
          title: '1. Собирање на Информации',
          text: 'А-Х Инженеринг собира податоци потребни за изработка на архитектонски проекти, барања за понуда и градежен надзор. Ова вклучува: име, е-пошта, телефонски број, локација на парцелата и катастарски податоци доставени по ваша волја.',
        },
        {
          title: '2. Употреба на Техничките Податоци',
          text: 'Сите скици, геодетски елаборати, статички пресметки и градежна документација се користат исклучиво за потребите на проектирање, лиценцирање и изведба согласно важечките урбанистички закони.',
        },
        {
          title: '3. Доверливост и Безбедност',
          text: 'Проектната документација се чува на безбедни сервери и во нашата дигитална архива. Ниту еден личен податок или проектен план не се споделува со трети страни без ваша претходна писмена согласност.',
        },
        {
          title: '4. Колачиња (Cookies)',
          text: 'Нашата веб-страница користи основни колачиња за зачувување на јазичните преференции и функционалноста. Не користиме инвазивни колачиња за следење.',
        },
        {
          title: '5. Ваши Права',
          text: 'Имате право да побарате увид, корекција или бришење на вашите податоци во секое време преку контакт со нашата канцеларија во Гостивар.',
        },
      ],
    },
    en: {
      tag: 'Security & Privacy',
      title: 'Privacy Policy',
      subtitle: 'How we safeguard your data and architectural engineering files at A-X Engineering.',
      lastUpdated: 'Last Updated: November 2026',
      backHome: 'Back to Home',
      sections: [
        {
          title: '1. Information Collection',
          text: 'A-X Engineering collects necessary information to prepare architectural blueprints, quote calculations, and structural audit reviews. This includes your name, email, phone number, plot coordinates, and project specifications.',
        },
        {
          title: '2. Technical Data Usage',
          text: 'All blueprints, CAD drawings, structural calculations, and permit files are processed strictly for engineering, architectural design, and municipal regulatory compliance.',
        },
        {
          title: '3. Confidentiality & Security',
          text: 'Client designs and commercial specifications are stored on encrypted digital archives. We never disclose proprietary technical plans to unauthorized third parties.',
        },
        {
          title: '4. Essential Cookies',
          text: 'Our platform utilizes strictly functional cookies to preserve language preferences (SQ, MK, EN) and session rendering performance.',
        },
        {
          title: '5. Your Rights',
          text: 'You maintain the right to inspect, amend, or request deletion of your contact records by contacting our headquarters in Gostivar.',
        },
      ],
    },
  }

  const t = content[language] || content.sq

  return (
    <div className="relative overflow-hidden pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-8">
      {/* Decorative Ambient Red Glowing Ellipses */}
      <div
        className="pointer-events-none absolute -left-28 top-1/4 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#D9222A]/10 dark:bg-[#D9222A]/15 blur-[100px] md:blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 top-2/3 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#D9222A]/8 dark:bg-[#D9222A]/12 blur-[100px] md:blur-[130px]"
        aria-hidden="true"
      />
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-xs font-normal text-stone-500 hover:text-[#D9222A] transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{t.backHome}</span>
      </Link>

      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 shadow-xl relative overflow-hidden">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D9222A]/10 border border-[#D9222A]/20 text-[#D9222A] text-[11px] font-normal w-fit mb-5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{t.tag}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-white tracking-tight mb-3">
          {t.title}
        </h1>

        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-normal leading-relaxed mb-6">
          {t.subtitle}
        </p>

        <p className="text-xs text-stone-400 font-mono mb-10 pb-6 border-b border-stone-200 dark:border-white/10">
          {t.lastUpdated} • {COMPANY_INFO.name} ({COMPANY_INFO.address})
        </p>

        <div className="space-y-8">
          {t.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="font-display text-lg sm:text-xl font-normal text-stone-900 dark:text-white">
                {sec.title}
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 font-normal leading-relaxed">
                {sec.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <span>{COMPANY_INFO.contactEmail}</span>
          <span>{COMPANY_INFO.mobile}</span>
        </div>
      </div>
    </div>
  )
}
