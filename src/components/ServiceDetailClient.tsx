'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Layers,
  ShieldCheck,
  Compass,
  FileCheck2,
  Calendar,
  Sparkles,
  Building2,
  FileSpreadsheet
} from 'lucide-react'
import { ServiceItem } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'

interface ServiceDetailClientProps {
  service: ServiceItem
  allServices: ServiceItem[]
}

export default function ServiceDetailClient({
  service,
  allServices,
}: ServiceDetailClientProps) {
  const { language } = useApp()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Localized text resolution
  const title =
    language === 'mk' && service.title_mk
      ? service.title_mk
      : language === 'en' && service.title_en
      ? service.title_en
      : service.title

  const shortDesc =
    language === 'mk' && service.shortDescription_mk
      ? service.shortDescription_mk
      : language === 'en' && service.shortDescription_en
      ? service.shortDescription_en
      : service.shortDescription

  const fullDesc =
    language === 'mk' && service.description_mk
      ? service.description_mk
      : language === 'en' && service.description_en
      ? service.description_en
      : service.description

  const features =
    language === 'mk' && service.features_mk && service.features_mk.length > 0
      ? service.features_mk
      : language === 'en' && service.features_en && service.features_en.length > 0
      ? service.features_en
      : service.features || []

  const deliverables =
    language === 'mk' && service.deliverables_mk && service.deliverables_mk.length > 0
      ? service.deliverables_mk
      : language === 'en' && service.deliverables_en && service.deliverables_en.length > 0
      ? service.deliverables_en
      : service.deliverables || [
          'Dosja e Plotë Teknike (Ideore & Zbatuese)',
          'Modelet 3D BIM & Renderat Fotorealistë',
          'Llogaritjet Sizmike & Statike sipas Eurocode',
          'Procesverbalet Zyrtare të Mbikëqyrjes (Libri i Ndërtimit)',
        ]

  const workflow = service.workflow && service.workflow.length > 0
    ? service.workflow
    : [
        {
          stepNumber: '01',
          title: 'Konsultimi Fillestar & Analiza e Parcelës',
          title_mk: 'Почетна Консултација и Анализа на Локација',
          title_en: 'Initial Consultation & Site Analysis',
          description: 'Diskutimi i qëllimeve të investimit, analizimi i parametrave urbanistikë dhe verifikimi gjeodezik i truallit.',
          description_mk: 'Дефинирање на инвестициските цели, увид во деталниот урбанистички план и геодетска проверка.',
          description_en: 'Defining project parameters, zoning compliance audit, and comprehensive topographical review.',
        },
        {
          stepNumber: '02',
          title: 'Projekt-Ideja & Koncepti 3D',
          title_mk: 'Идеен Проект и 3Д Концепт',
          title_en: 'Conceptual Architecture & 3D Modeling',
          description: 'Skicimi i vëllimeve hapësinore, zgjidhja funksionale e ambienteve dhe vizualizimi fotorealist 3D.',
          description_mk: 'Архитектонско моделирање, просторна функционалност и фотореалистични 3Д рендери.',
          description_en: 'Spatial floorplans, volume articulation, and high-fidelity photorealistic visualizations.',
        },
        {
          stepNumber: '03',
          title: 'Projekti Kryesor & Licencimi',
          title_mk: 'Основен Проект и Дозвола за Градба',
          title_en: 'Execution Blueprints & Permitting',
          description: 'Përpilimi i fazave statike, elektrike, hidroteknike dhe marrja e lejes së ndërtimit në komunë.',
          description_mk: 'Изработка на статички, машински и електрични фази за добивање градежна дозвола.',
          description_en: 'Complete structural statics, MEP engineering, and municipal building permit clearance.',
        },
        {
          stepNumber: '04',
          title: 'Mbikëqyrja Teknike & Dorëzimi',
          title_mk: 'Стручен Надзор и Предавање',
          title_en: 'Technical Oversight & Handover',
          description: 'Inspektimi ditor i cilësisë së betonit, armaturës dhe dorëzimi i objektit me çelësa në dorë.',
          description_mk: 'Контрола на бетонирањето, проверка на арматура и финално предавање на објектот.',
          description_en: 'On-site technical inspection, concrete stress tests, and final occupancy sign-off.',
        },
      ]

  const faqs = service.faqs && service.faqs.length > 0
    ? service.faqs
    : [
        {
          question: 'Sa zgjat zakonisht hartimi i një projekti arkitekturor?',
          question_mk: 'Колку време е потребно за изработка на архитектонски проект?',
          question_en: 'How long does architectural drafting and permitting take?',
          answer: 'Për vila individuale dhe rezidenca, faza e projekt-idesë merr 2-3 javë, ndërsa projekti kryesor me të gjitha fazat inxhinierike dhe dosjen e lejes përfundon brenda 30-45 ditëve.',
          answer_mk: 'За семејни куќи и вили идејниот проект трае 2-3 недели, додека основниот проект со сите фази се завршува за 30-45 дена.',
          answer_en: 'For bespoke residences, conceptual drafting spans 2-3 weeks, while comprehensive execution dossiers conclude within 30-45 business days.',
        },
        {
          question: 'A është e detyrueshme mbikëqyrja inxhinierike (nadzor)?',
          question_mk: 'Дали стручниот градежен надзор е законски задолжителен?',
          question_en: 'Is licensed construction supervision legally mandated?',
          answer: 'Po, sipas Ligjit për Ndërtim në RMV, çdo objekt kërkon inxhinier të licencuar të mbikëqyrjes për të verifikuar armaturën, betonin dhe për të vulosur librin e ndërtimit.',
          answer_mk: 'Да, според Законот за градење во РСМ, секој објект бара овластен надзорен инженер за водење на градежниот дневник.',
          answer_en: 'Yes, pursuant to municipal building codes, licensed supervision is mandatory to guarantee structural compliance and issue occupancy certification.',
        },
        {
          question: 'Si mund të marr një ofertë të detajuar financiare?',
          question_mk: 'Како можам да добијам детална финансиска понуда?',
          question_en: 'How can I request a detailed cost estimation?',
          answer: 'Ju mund të plotësoni formularin tonë interaktiv "Kërko Ofertë" ose të na vizitoni në zyrat tona në Gostivar me dokumentacionin tuaj kadastral.',
          answer_mk: 'Пополнете го нашиот интерактивен формулар "Побарај Понуда" или посетете нè во нашата канцеларија во Гостивар.',
          answer_en: 'Complete our online interactive quote calculator or schedule a consultation at our Gostivar headquarters.',
        },
      ]

  const heroImage =
    service.heroImage ||
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'

  const labels = {
    sq: {
      servicesBreadcrumb: 'Shërbimet',
      homeBreadcrumb: 'Ballina',
      requestQuote: 'Kërko Ofertë për këtë Shërbim',
      viewAllServices: 'Shiko të Gjitha Shërbimet',
      methodologyTitle: 'Metodologjia e Punës',
      methodologySubtitle: 'Si e realizojmë këtë shërbim hap pas hapi nga koncepti deri te çelësat në dorë.',
      deliverablesTitle: 'Çfarë Përfshin ky Shërbim',
      deliverablesSubtitle: 'Dorëzimet zyrtare teknike dhe dokumentacioni i vulosur nga inxhinierët tanë.',
      faqTitle: 'Pyetjet e Shpeshta',
      faqSubtitle: 'Përgjigje të sakta për rregulloret, afatet dhe procedurat.',
      ctaHeading: 'Keni një Projekt në Mendje?',
      ctaDesc: 'Konsultohuni me inxhinierët tanë në Gostivar për një vlerësim të saktë teknik dhe financiar.',
      ctaBtn: 'Fillo Llogaritjen e Ofertës',
    },
    mk: {
      servicesBreadcrumb: 'Услуги',
      homeBreadcrumb: 'Почетна',
      requestQuote: 'Побарај Понуда за оваа Услуга',
      viewAllServices: 'Види ги Сите Услуги',
      methodologyTitle: 'Методологија на Работа',
      methodologySubtitle: 'Како ја реализираме услугата чекор по чекор од концепт до клуч на рака.',
      deliverablesTitle: 'Што Опфаќа оваа Услуга',
      deliverablesSubtitle: 'Официјална техничка документација заверена од нашите лиценцирани инженери.',
      faqTitle: 'Често Поставувани Прашања',
      faqSubtitle: 'Јасни одговори за законските процедури, роковите и цените.',
      ctaHeading: 'Планирате Нов Проект?',
      ctaDesc: 'Консултирајте се со нашиот стручен тим во Гостивар за прецизна проценка.',
      ctaBtn: 'Започни Пресметка на Понуда',
    },
    en: {
      servicesBreadcrumb: 'Services',
      homeBreadcrumb: 'Home',
      requestQuote: 'Request Quote for this Service',
      viewAllServices: 'View All Services',
      methodologyTitle: 'Project Methodology',
      methodologySubtitle: 'Our structured execution process from preliminary study to turnkey completion.',
      deliverablesTitle: 'Scope & Deliverables',
      deliverablesSubtitle: 'Certified blueprints, engineering stamps, and regulatory compliance dossiers.',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Authoritative answers regarding permitting, codes, and project timelines.',
      ctaHeading: 'Ready to Bring Your Vision to Life?',
      ctaDesc: 'Consult with our senior architects in Gostivar for an uncompromised structural evaluation.',
      ctaBtn: 'Configure Your Project Quote',
    },
  }

  const l = labels[language] || labels.sq

  return (
    <article className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* 1. MONUMENTAL HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pt-32 pb-16 md:pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.38] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Breadcrumb & Pill */}
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider mb-6">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{l.homeBreadcrumb}</span>
            </Link>
            <span className="text-white/30">•</span>
            <Link
              href="/#services"
              className="text-white/60 hover:text-white transition-colors"
            >
              {l.servicesBreadcrumb}
            </Link>
            <span className="text-white/30">•</span>
            <span className="text-[#FF4455] font-normal">{service.number}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D9222A]/25 border border-[#D9222A]/50 text-white text-[11px] font-normal mb-5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#D9222A] animate-pulse" />
              <span>SHËRBIM I SPECIALIZUAR • {service.number}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] mb-6 text-white">
              {title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal max-w-3xl mb-8">
              {shortDesc}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/kerko-oferte?sherbimi=${encodeURIComponent(service.number)}`}
                className="group inline-flex items-center space-x-2.5 pl-5 pr-2 py-2 bg-[#D9222A] hover:bg-white text-white hover:text-[#D9222A] border border-[#D9222A] hover:border-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 shadow-xl shadow-[#D9222A]/30 hover:scale-[1.02]"
              >
                <span>{l.requestQuote}</span>
                <span className="w-5 h-5 rounded-full bg-black/20 group-hover:bg-[#D9222A]/10 flex items-center justify-center text-white group-hover:text-[#D9222A] transition-colors">
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-5 py-2 border border-white/30 hover:border-[#D9222A] text-white hover:text-white text-[12px] md:text-[13px] font-normal rounded-full transition-all duration-300 bg-black/40 hover:bg-[#D9222A] backdrop-blur-md hover:scale-[1.02]"
              >
                <span>Kontakto Zyrën</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & SCOPE SPLIT */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Detailed Narrative Left */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] block font-normal">
              PËRSHKRIMI TEKNIK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-stone-900 dark:text-white font-normal leading-tight">
              Ekselencë në Projektim dhe Siguri Konstruktive
            </h2>
            <div className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              <p>{fullDesc}</p>
            </div>

            {/* Key Features Badge Grid */}
            <div className="pt-6">
              <h3 className="font-display text-lg text-stone-900 dark:text-white font-normal mb-4">
                Pikat Kryesore të Shërbimit:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 flex items-start space-x-3 shadow-sm hover:border-[#D9222A]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-normal">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables Right Column */}
          <div className="lg:col-span-5 p-7 sm:p-9 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D9222A] font-normal">
              <FileCheck2 className="w-4 h-4 text-[#D9222A]" />
              <span>DORËZIMET ZYRTARE</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-stone-900 dark:text-white font-normal">
              {l.deliverablesTitle}
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-normal leading-relaxed">
              {l.deliverablesSubtitle}
            </p>

            <ul className="space-y-3.5 pt-2 border-t border-stone-200 dark:border-white/10">
              {deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-normal"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D9222A] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-stone-200 dark:border-white/10">
              <Link
                href="/kerko-oferte"
                className="group w-full py-2.5 pl-5 pr-2 bg-[#D9222A] hover:bg-stone-900 text-white font-normal text-[12px] md:text-[13px] rounded-full flex items-center justify-between transition-all shadow-lg shadow-[#D9222A]/20"
              >
                <span>{l.ctaBtn}</span>
                <span className="w-5 h-5 rounded-full bg-black/20 group-hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW STEPPER */}
      <section className="py-20 bg-[#F0F2F6] dark:bg-[#0C0D10] border-t border-b border-stone-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] block font-normal mb-2">
              PROCESI I REALIZIMIT
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              {l.methodologyTitle}
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-3 font-normal leading-relaxed">
              {l.methodologySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, idx) => {
              const stepTitle =
                language === 'mk' && step.title_mk
                  ? step.title_mk
                  : language === 'en' && step.title_en
                  ? step.title_en
                  : step.title

              const stepDesc =
                language === 'mk' && step.description_mk
                  ? step.description_mk
                  : language === 'en' && step.description_en
                  ? step.description_en
                  : step.description

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200 dark:border-white/10 shadow-md hover:border-[#D9222A]/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#D9222A]/10 text-[#D9222A] border border-[#D9222A]/30 flex items-center justify-center font-display text-sm font-normal mb-5 group-hover:bg-[#D9222A] group-hover:text-white transition-colors">
                      {step.stepNumber || `0${idx + 1}`}
                    </div>
                    <h4 className="font-display text-base font-normal text-stone-900 dark:text-white mb-2 leading-snug">
                      {stepTitle}
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
                      {stepDesc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D9222A] block font-normal mb-2">
            INFORMACIONE SHTESË
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-stone-900 dark:text-white font-normal">
            {l.faqTitle}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 font-normal">
            {l.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const q =
              language === 'mk' && faq.question_mk
                ? faq.question_mk
                : language === 'en' && faq.question_en
                ? faq.question_en
                : faq.question

            const a =
              language === 'mk' && faq.answer_mk
                ? faq.answer_mk
                : language === 'en' && faq.answer_en
                ? faq.answer_en
                : faq.answer

            const isOpen = openFaq === idx

            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#111215] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 cursor-pointer hover:bg-stone-50/50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="font-display text-sm sm:text-base font-normal text-stone-900 dark:text-white">
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D9222A]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-normal leading-relaxed border-t border-stone-100 dark:border-white/5 pt-4">
                    {a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="pb-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-stone-950 text-white relative overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#D9222A]/20 blur-[100px]" />

          <div className="relative z-10 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF4455] block font-normal mb-2">
              BASHKËPUNIMI YNË
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-3">
              {l.ctaHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
              {l.ctaDesc}
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/kerko-oferte?sherbimi=${encodeURIComponent(service.number)}`}
              className="group w-full sm:w-auto inline-flex items-center justify-between space-x-2.5 pl-6 pr-2 py-2.5 bg-[#D9222A] hover:bg-white text-white hover:text-[#D9222A] border border-[#D9222A] hover:border-white text-[13px] font-normal rounded-full transition-all duration-300 shadow-xl shadow-[#D9222A]/30 hover:scale-[1.02]"
            >
              <span>{l.ctaBtn}</span>
              <span className="w-6 h-6 rounded-full bg-black/20 group-hover:bg-[#D9222A]/10 flex items-center justify-center text-white group-hover:text-[#D9222A] transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
