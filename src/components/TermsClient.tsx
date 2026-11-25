'use client'

import Link from 'next/link'
import { FileText, CheckCircle2, ArrowLeft, Scale } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { COMPANY_INFO } from '@/data/projectsData'

export default function TermsClient() {
  const { language } = useApp()

  const content = {
    sq: {
      tag: 'Kushtet Juridike',
      title: 'Kushtet e Përdorimit',
      subtitle: 'Kushtet e përgjithshme për shërbimet profesionale dhe platformën A-X Engineering.',
      lastUpdated: 'Përditësuar së fundmi: Nëntor 2026',
      backHome: 'Kthehu në Ballinë',
      sections: [
        {
          title: '1. Fusha e Shërbimeve',
          text: 'A-X Engineering ofron shërbime të projektimit arkitektonik, llogaritjes statike, mbikëqyrjes profesionale të ndërtimit, mbikëqyrjes teknike dhe auditimeve strukturore në përputhje me standardet e Republikës së Maqedonisë së Veriut dhe Eurocode.',
        },
        {
          title: '2. Pronësia Intelektuale',
          text: 'Të gjitha planet arkitekturore, renderat 3D, fotografitë e projekteve, konceptet dhe materialet e publikuara në këtë faqe janë pronë ekskluzive e A-X Engineering dhe mbrohen nga ligji për të drejtat e autorit.',
        },
        {
          title: '3. Ofertat dhe Vlerësimet Paraprake',
          text: 'Llogaritjet dhe ofertat e gjeneruara përmes platformës sonë "Kërko Ofertë" janë vlerësime orientuese tekniko-financiare dhe nuk përbëjnë kontratë ligjore deri në nënshkrimin e marrëveshjes zyrtare dypalëshe.',
        },
        {
          title: '4. Detyrimet e Palëve në Kantier',
          text: 'Mbikëqyrja e punimeve kryhet në bazë të protokolleve zyrtare të ndërtimit dhe librit të ndërtimit. Çdo ndryshim thelbësor në kantier kërkon aprovimin paraprak të inxhinierit kryesor përgjegjës.',
        },
        {
          title: '5. Juridiksioni',
          text: 'Çdo mosmarrëveshje rreth kushteve apo shërbimeve rregullohet sipas legjislacionit në fuqi në Gjykatën Themelore në Gostivar.',
        },
      ],
    },
    mk: {
      tag: 'Правни Услови',
      title: 'Услови за Користење',
      subtitle: 'Општи услови за професионални услуги и веб-платформата на А-Х Инженеринг.',
      lastUpdated: 'Последно ажурирано: Ноември 2026',
      backHome: 'Назад кон Почетна',
      sections: [
        {
          title: '1. Опсег на Услуги',
          text: 'А-Х Инженеринг обезбедува архитектонско проектирање, статички пресметки, лиценциран градежен надзор и технички ревизии согласно стандардите на Р.С. Македонија и Еврокод регулативите.',
        },
        {
          title: '2. Интелектуална Сопственост',
          text: 'Сите архитектонски планови, 3Д рендери, фотографии и проектни материјали се ексклузивна интелектуална сопственост на А-Х Инженеринг и се заштитени со авторски права.',
        },
        {
          title: '3. Понуди и Пресметки',
          text: 'Информативните пресметки преку формуларот за понуда претставуваат ориентациони проценки и добиваат правна важност исклучиво по потпишување на официјален договор.',
        },
        {
          title: '4. Одговорности на Градилиште',
          text: 'Градежниот надзор се врши врз основа на градежен дневник и законски протоколи. Секоја промена бара согласност од одговорниот инжинер.',
        },
        {
          title: '5. Надлежен Суд',
          text: 'Евентуалните спорови се решаваат согласно законите на Р.С. Македонија пред надлежниот суд во Гостивар.',
        },
      ],
    },
    en: {
      tag: 'Legal Terms',
      title: 'Terms & Conditions',
      subtitle: 'Standard conditions governing architectural engineering commissions and site usage.',
      lastUpdated: 'Last Updated: November 2026',
      backHome: 'Back to Home',
      sections: [
        {
          title: '1. Service Scope',
          text: 'A-X Engineering delivers licensed architectural drafting, structural engineering, on-site construction supervision, and technical compliance audits complying with North Macedonia and Eurocode building codes.',
        },
        {
          title: '2. Intellectual Property Rights',
          text: 'All architectural drawings, 3D renderings, site photographs, and creative drafts are proprietary works of A-X Engineering and protected by international intellectual property treaties.',
        },
        {
          title: '3. Estimates & Quotations',
          text: 'Calculations produced via our "Request a Quote" module are indicative and non-binding until formalized through an executed master engineering contract.',
        },
        {
          title: '4. Site Oversight Protocol',
          text: 'Site supervision conforms to rigorous engineering logs and municipal safety benchmarks. Structural deviations require prior written approval by our lead engineer.',
        },
        {
          title: '5. Jurisdiction',
          text: 'Any contractual matters are governed by the applicable commercial laws under the jurisdiction of Gostivar courts.',
        },
      ],
    },
  }

  const t = content[language] || content.sq

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-8">
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-xs font-normal text-stone-500 hover:text-[#D9222A] transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{t.backHome}</span>
      </Link>

      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 shadow-xl relative overflow-hidden">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D9222A]/10 border border-[#D9222A]/20 text-[#D9222A] text-[11px] font-normal w-fit mb-5">
          <Scale className="w-3.5 h-3.5" />
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
