'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Home,
  Building2,
  Briefcase,
  Layers,
  ShieldCheck,
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MapPin,
  Maximize2,
  Calendar,
  Send,
  Phone,
  MessageCircle,
  HelpCircle,
  CheckCircle2
} from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { COMPANY_INFO } from '@/data/projectsData'

export default function QuoteStepperClient() {
  const { language } = useApp()
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  // Form State
  const [projectType, setProjectType] = useState('residential')
  const [area, setArea] = useState<number>(350)
  const [floors, setFloors] = useState('P + 1')
  const [location, setLocation] = useState('Gostivar')
  const [plotStatus, setPlotStatus] = useState('free_plot')
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'architecture',
    'statics',
  ])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Localized copy
  const t = {
    sq: {
      tag: 'LLOGARITËSI INTERAKTIV I PROJEKTIT',
      title: 'Kërko Ofertë Profesionale',
      subtitle: 'Konfiguroni parametrat e objektit tuaj në 4 hapa të thjeshtë dhe merrni një vlerësim teknik paraprak nga inxhinierët tanë.',
      step1Title: 'Hapi 1: Tipologjia e Objektit',
      step1Desc: 'Zgjidhni kategorinë e projektimit ose ndërtimit.',
      step2Title: 'Hapi 2: Madhësia & Lokacioni',
      step2Desc: 'Përcaktoni përmasat orientuese dhe vendndodhjen e pronës.',
      step3Title: 'Hapi 3: Fusha e Shërbimeve',
      step3Desc: 'Cilat faza inxhinierike dëshironi të përfshihen?',
      step4Title: 'Hapi 4: Kontakt & Finalizim',
      step4Desc: 'Ku mund t\'ju dërgojmë vlerësimin dhe analizën paraprake?',
      nextBtn: 'Vazhdo te Hapi Tjetër',
      prevBtn: 'Kthehu Prapa',
      submitBtn: 'Dërgo Kërkesën për Ofertë',
      summaryTitle: 'Përmbledhja e Kërkesës',
      summaryType: 'Tipologjia:',
      summaryArea: 'Sipërfaqja:',
      summaryFloors: 'Katet:',
      summaryLocation: 'Lokacioni:',
      summaryServices: 'Shërbimet e zgjedhura:',
      successTitle: 'Kërkesa u Dërgua me Sukses!',
      successDesc: 'Faleminderit! Inxhinierët tanë të A-X Engineering në Gostivar po shqyrtojnë parametrat tuaj dhe do t\'ju kontaktojnë brenda 24 orëve me një vlerësim të detajuar.',
      directCall: 'Na Telefononi Drejtpërdrejt',
      chatWhatsApp: 'Kontakto në WhatsApp',
      backHome: 'Kthehu në Ballinë',
    },
    mk: {
      tag: 'ИНТЕРАКТИВЕН КАЛКУЛАТОР ЗА ПРОЕКТ',
      title: 'Побарај Професионална Понуда',
      subtitle: 'Конфигурирајте ги параметрите во 4 едноставни чекори за прелиминарна инженерска проценка.',
      step1Title: 'Чекор 1: Тип на Објект',
      step1Desc: 'Изберете категорија на планираниот објект.',
      step2Title: 'Чекор 2: Големина и Локација',
      step2Desc: 'Дефинирајте површина и град на локацијата.',
      step3Title: 'Чекор 3: Потребни Услуги',
      step3Desc: 'Кои инженерски фази ви се потребни?',
      step4Title: 'Чекор 4: Контакт Податоци',
      step4Desc: 'Каде да ви ја испратиме деталната понуда?',
      nextBtn: 'Следен Чекор',
      prevBtn: 'Назад',
      submitBtn: 'Испрати Барање за Понуда',
      summaryTitle: 'Преглед на Барањето',
      summaryType: 'Тип:',
      summaryArea: 'Површина:',
      summaryFloors: 'Катност:',
      summaryLocation: 'Локација:',
      summaryServices: 'Избрани услуги:',
      successTitle: 'Барањето е успешно примено!',
      successDesc: 'Ви благодариме! Нашите инженери од Гостивар ќе ве контактираат во рок од 24 часа со детална понуда.',
      directCall: 'Јавете се директно',
      chatWhatsApp: 'Пишете на WhatsApp',
      backHome: 'Назад кон Почетна',
    },
    en: {
      tag: 'INTERACTIVE PROJECT CALCULATOR',
      title: 'Request a Bespoke Proposal',
      subtitle: 'Configure your structural and architectural scope across 4 intuitive steps for a certified estimate.',
      step1Title: 'Step 1: Project Typology',
      step1Desc: 'Select the primary building classification.',
      step2Title: 'Step 2: Scale & Geography',
      step2Desc: 'Specify approximate floor area and municipal location.',
      step3Title: 'Step 3: Engineering Scope',
      step3Desc: 'Choose required architectural and supervisory packages.',
      step4Title: 'Step 4: Contact & Submission',
      step4Desc: 'Provide coordinates to receive your formal dossier.',
      nextBtn: 'Proceed to Next Step',
      prevBtn: 'Back',
      submitBtn: 'Submit Proposal Request',
      summaryTitle: 'Project Scope Summary',
      summaryType: 'Typology:',
      summaryArea: 'Calculated Area:',
      summaryFloors: 'Floors:',
      summaryLocation: 'Location:',
      summaryServices: 'Selected Packages:',
      successTitle: 'Proposal Request Received!',
      successDesc: 'Thank you! Our senior architectural engineering partners in Gostivar are reviewing your parameters and will respond within 24 hours.',
      directCall: 'Direct Phone Line',
      chatWhatsApp: 'Chat via WhatsApp',
      backHome: 'Return to Homepage',
    },
  }[language] || {
    tag: 'LLOGARITËSI INTERAKTIV I PROJEKTIT',
    title: 'Kërko Ofertë Profesionale',
    subtitle: 'Konfiguroni parametrat e objektit tuaj në 4 hapa të thjeshtë dhe merrni një vlerësim teknik paraprak nga inxhinierët tanë.',
    step1Title: 'Hapi 1: Tipologjia e Objektit',
    step1Desc: 'Zgjidhni kategorinë e projektimit ose ndërtimit.',
    step2Title: 'Hapi 2: Madhësia & Lokacioni',
    step2Desc: 'Përcaktoni përmasat orientuese dhe vendndodhjen e pronës.',
    step3Title: 'Hapi 3: Fusha e Shërbimeve',
    step3Desc: 'Cilat faza inxhinierike dëshironi të përfshihen?',
    step4Title: 'Hapi 4: Kontakt & Finalizim',
    step4Desc: 'Ku mund t\'ju dërgojmë vlerësimin dhe analizën paraprake?',
    nextBtn: 'Vazhdo te Hapi Tjetër',
    prevBtn: 'Kthehu Prapa',
    submitBtn: 'Dërgo Kërkesën për Ofertë',
    summaryTitle: 'Përmbledhja e Kërkesës',
    summaryType: 'Tipologjia:',
    summaryArea: 'Sipërfaqja:',
    summaryFloors: 'Katet:',
    summaryLocation: 'Lokacioni:',
    summaryServices: 'Shërbimet e zgjedhura:',
    successTitle: 'Kërkesa u Dërgua me Sukses!',
    successDesc: 'Faleminderit! Inxhinierët tanë të A-X Engineering në Gostivar po shqyrtojnë parametrat tuaj dhe do t\'ju kontaktojnë brenda 24 orëve me një vlerësim të detajuar.',
    directCall: 'Na Telefononi Drejtpërdrejt',
    chatWhatsApp: 'Kontakto në WhatsApp',
    backHome: 'Kthehu në Ballinë',
  }

  const projectTypes = [
    {
      id: 'residential',
      name: language === 'sq' ? 'Vilë Private Luksoze' : language === 'mk' ? 'Семејна Вила' : 'Luxury Private Villa',
      desc: language === 'sq' ? 'Rezidenca individuale, vila pushimi me pishinë dhe interier bashkëkohor.' : 'High-end detached residences and private holiday estates.',
      icon: Home,
    },
    {
      id: 'commercial',
      name: language === 'sq' ? 'Ndërtesë Afariste & Komerciale' : language === 'mk' ? 'Деловен Објект' : 'Commercial & Office Building',
      desc: language === 'sq' ? 'Qendra tregtare, zyra administrative, hotele dhe parqe biznesi.' : 'Corporate headquarters, boutique retail, and hospitality spaces.',
      icon: Briefcase,
    },
    {
      id: 'multi_family',
      name: language === 'sq' ? 'Kompleks Banimi Kolektiv' : language === 'mk' ? 'Станбена Зграда' : 'Multi-Family Residential Complex',
      desc: language === 'sq' ? 'Ndërtesa shumëkatëshe banimi, garazhe nëntokësore dhe hapësira komunitare.' : 'Mid-to-high rise residential apartments with underground parking.',
      icon: Building2,
    },
    {
      id: 'supervision',
      name: language === 'sq' ? 'Mbikëqyrje e Licencuar (Nadzor)' : language === 'mk' ? 'Градежен Надзор' : 'Licensed Site Supervision (Nadzor)',
      desc: language === 'sq' ? 'Audit teknik, kontroll i cilësisë së betonit dhe libër zyrtar ndërtimi.' : 'Comprehensive structural audit, testing verification, and legal sign-offs.',
      icon: ShieldCheck,
    },
  ]

  const serviceOptions = [
    {
      id: 'architecture',
      name: language === 'sq' ? 'Projekt-Ide & Koncept 3D' : language === 'mk' ? 'Идеен Проект и 3Д' : 'Architectural Concept & 3D',
      desc: language === 'sq' ? 'Zgjidhje hapësinore dhe render fotorealist' : 'Spatial floorplans and photorealistic views',
    },
    {
      id: 'statics',
      name: language === 'sq' ? 'Llogaritje Statike & Sizmike' : language === 'mk' ? 'Статика и Сеизмика' : 'Structural & Seismic Engineering',
      desc: language === 'sq' ? 'Llogaritjet e betonit dhe armaturës Eurocode' : 'Full structural Eurocode calculations',
    },
    {
      id: 'mep',
      name: language === 'sq' ? 'Instalimet Elektrike & Hidroteknike' : language === 'mk' ? 'Електрика и Водовод' : 'MEP Infrastructure Engineering',
      desc: language === 'sq' ? 'Skemat e energjisë, HVAC dhe ujësjellësit' : 'Plumbing, electrical and climate controls',
    },
    {
      id: 'supervision',
      name: language === 'sq' ? 'Mbikëqyrje e Licencuar në Kantier' : language === 'mk' ? 'Стручен Градежен Надзор' : 'Licensed Site Supervision',
      desc: language === 'sq' ? 'Inspektime ditore dhe vulosje e librit' : 'Daily inspection logs and contractor oversight',
    },
    {
      id: 'permits',
      name: language === 'sq' ? 'Procedura për Leje Ndërtimi' : language === 'mk' ? 'Дозвола за Градба' : 'Municipal Permitting Clearance',
      desc: language === 'sq' ? 'Përgatitja e plotë e dosjes në komunë' : 'Complete filing for municipal authorization',
    },
    {
      id: 'interior',
      name: language === 'sq' ? 'Dizajn Enterieri & Detajim' : language === 'mk' ? 'Внатрешен Дизајн' : 'Interior Architecture & Millwork',
      desc: language === 'sq' ? 'Përzgjedhja e materialeve dhe ndriçimit' : 'Bespoke joinery, lighting and stone styling',
    },
  ]

  const floorOptions = ['Përdhesë (1 Kat)', 'P + 1', 'P + 2', 'P + 3', 'P + 5+', 'Kompleks i Madh']

  const locationOptions = [
    'Gostivar',
    'Tetovë',
    'Shkup',
    'Ohër / Strugë',
    'Kërçovë',
    'Qytet Tjetër në RMV',
    'Kosovë / Rajon',
  ]

  const selectedTypeName =
    projectTypes.find((p) => p.id === projectType)?.name || projectType

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-12">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-normal text-stone-500 hover:text-[#D9222A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.backHome}</span>
            </Link>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D9222A]/10 border border-[#D9222A]/20 text-[#D9222A] text-[11px] font-normal mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D9222A]" />
            <span>{t.tag}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-white tracking-tight leading-[1.08] mb-4">
            {t.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* STEPPER PROGRESS INDICATOR */}
        {!submitted && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3 text-xs font-display">
              <span className={`font-normal ${currentStep >= 1 ? 'text-[#D9222A]' : 'text-stone-400'}`}>
                01. Tipologjia
              </span>
              <span className={`font-normal ${currentStep >= 2 ? 'text-[#D9222A]' : 'text-stone-400'}`}>
                02. Përmasat
              </span>
              <span className={`font-normal ${currentStep >= 3 ? 'text-[#D9222A]' : 'text-stone-400'}`}>
                03. Shërbimet
              </span>
              <span className={`font-normal ${currentStep >= 4 ? 'text-[#D9222A]' : 'text-stone-400'}`}>
                04. Kontakti
              </span>
            </div>
            {/* Visual Bar */}
            <div className="w-full h-2 rounded-full bg-stone-200 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#D9222A] transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* MAIN INTERACTIVE WORKSPACE */}
        {submitted ? (
          /* SUCCESS SCREEN */
          <div className="p-10 sm:p-16 rounded-3xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 shadow-2xl text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-normal text-stone-900 dark:text-white mb-3">
              {t.successTitle}
            </h2>

            <p className="text-sm text-stone-600 dark:text-stone-300 font-normal leading-relaxed mb-8">
              {t.successDesc}
            </p>

            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-black/40 border border-stone-200 dark:border-white/10 text-left mb-8 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Objekti:</span>
                <span className="font-normal text-stone-900 dark:text-white">{selectedTypeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Sipërfaqja:</span>
                <span className="font-normal text-stone-900 dark:text-white">{area} m² ({floors})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Lokacioni:</span>
                <span className="font-normal text-stone-900 dark:text-white">{location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#D9222A] hover:bg-stone-900 text-white rounded-full text-xs font-normal transition-all shadow-lg"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.directCall} ({COMPANY_INFO.phone})</span>
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-stone-300 dark:border-white/20 text-stone-700 dark:text-stone-300 rounded-full text-xs font-normal hover:bg-stone-100 dark:hover:bg-white/10 transition-colors"
              >
                {t.backHome}
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* LEFT / CENTER: ACTIVE STEP CONTENT */}
            <div className="w-full lg:w-[63%] p-7 sm:p-10 rounded-3xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 shadow-xl">
              {/* STEP 1: TYPOLOGY */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-stone-900 dark:text-white">
                      {t.step1Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 font-normal">
                      {t.step1Desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {projectTypes.map((pt) => {
                      const Icon = pt.icon
                      const isSelected = projectType === pt.id
                      return (
                        <div
                          key={pt.id}
                          onClick={() => setProjectType(pt.id)}
                          className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-3 ${
                            isSelected
                              ? 'bg-[#D9222A]/5 border-[#D9222A] shadow-md ring-1 ring-[#D9222A]/50'
                              : 'bg-stone-50/50 dark:bg-black/30 border-stone-200 dark:border-white/10 hover:border-[#D9222A]/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'bg-[#D9222A] text-white shadow-md'
                                  : 'bg-stone-200 dark:bg-white/10 text-stone-700 dark:text-stone-300'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <span
                              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'bg-[#D9222A] border-[#D9222A] text-white'
                                  : 'border-stone-300 dark:border-white/20'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-display text-base font-normal text-stone-900 dark:text-white leading-snug">
                              {pt.name}
                            </h4>
                            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed font-normal">
                              {pt.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: SCALE & LOCATION */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-stone-900 dark:text-white">
                      {t.step2Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 font-normal">
                      {t.step2Desc}
                    </p>
                  </div>

                  {/* Surface Area Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display uppercase tracking-wider text-stone-700 dark:text-stone-300">
                        Sipërfaqja e Përafërt (m²):
                      </span>
                      <span className="font-display text-2xl font-normal text-[#D9222A]">
                        {area} m²
                      </span>
                    </div>

                    <input
                      type="range"
                      min={80}
                      max={3500}
                      step={25}
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full accent-[#D9222A] cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                      <span>80 m² (Rezidencë Kompakte)</span>
                      <span>850 m² (Vilë e Madhe)</span>
                      <span>3,500 m²+ (Kompleks)</span>
                    </div>
                  </div>

                  {/* Number of Floors */}
                  <div className="space-y-3">
                    <label className="text-xs font-display uppercase tracking-wider text-stone-700 dark:text-stone-300 block">
                      Katet e Planifikuara:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {floorOptions.map((fl) => (
                        <button
                          type="button"
                          key={fl}
                          onClick={() => setFloors(fl)}
                          className={`p-3 rounded-xl border text-xs font-normal transition-all ${
                            floors === fl
                              ? 'bg-[#D9222A] border-[#D9222A] text-white shadow-md'
                              : 'bg-stone-50 dark:bg-black/30 border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-[#D9222A]/40'
                          }`}
                        >
                          {fl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Location Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-display uppercase tracking-wider text-stone-700 dark:text-stone-300 block">
                      Qyteti / Lokacioni:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {locationOptions.map((loc) => (
                        <button
                          type="button"
                          key={loc}
                          onClick={() => setLocation(loc)}
                          className={`p-3 rounded-xl border text-xs font-normal transition-all ${
                            location === loc
                              ? 'bg-[#D9222A] border-[#D9222A] text-white shadow-md'
                              : 'bg-stone-50 dark:bg-black/30 border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-[#D9222A]/40'
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: SERVICES */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-stone-900 dark:text-white">
                      {t.step3Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 font-normal">
                      {t.step3Desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {serviceOptions.map((srv) => {
                      const isChecked = selectedServices.includes(srv.id)
                      return (
                        <div
                          key={srv.id}
                          onClick={() => toggleService(srv.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                            isChecked
                              ? 'bg-[#D9222A]/5 border-[#D9222A] shadow-sm ring-1 ring-[#D9222A]/40'
                              : 'bg-stone-50/50 dark:bg-black/30 border-stone-200 dark:border-white/10 hover:border-[#D9222A]/30'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-[#D9222A] border-[#D9222A] text-white'
                                : 'border-stone-300 dark:border-white/20'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <h4 className="font-display text-sm font-normal text-stone-900 dark:text-white">
                              {srv.name}
                            </h4>
                            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-snug">
                              {srv.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & NOTES */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-stone-900 dark:text-white">
                      {t.step4Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 font-normal">
                      {t.step4Desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 block mb-2 font-display">
                        Emri & Mbiemri *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="p.sh. Agron Berisha"
                        className="w-full p-3.5 rounded-xl border border-stone-300 dark:border-white/10 bg-white dark:bg-black/40 text-stone-900 dark:text-white text-xs font-normal focus:outline-none focus:border-[#D9222A]"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 block mb-2 font-display">
                        Telefoni / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+389 7X XXX XXX"
                        className="w-full p-3.5 rounded-xl border border-stone-300 dark:border-white/10 bg-white dark:bg-black/40 text-stone-900 dark:text-white text-xs font-normal focus:outline-none focus:border-[#D9222A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 block mb-2 font-display">
                      Email Adresa *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@shembull.com"
                      className="w-full p-3.5 rounded-xl border border-stone-300 dark:border-white/10 bg-white dark:bg-black/40 text-stone-900 dark:text-white text-xs font-normal focus:outline-none focus:border-[#D9222A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 block mb-2 font-display">
                      Shënime Shtesë / Kërkesa Specifike
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Përshkruani nëse keni parcelë të përgatitur, orientimin e dëshiruar, apo afatet kohore..."
                      className="w-full p-3.5 rounded-xl border border-stone-300 dark:border-white/10 bg-white dark:bg-black/40 text-stone-900 dark:text-white text-xs font-normal focus:outline-none focus:border-[#D9222A]"
                    />
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-3 border border-stone-300 dark:border-white/20 text-stone-700 dark:text-stone-300 rounded-full text-xs font-normal hover:bg-stone-100 dark:hover:bg-white/10 transition-colors flex items-center space-x-2 shrink-0 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.prevBtn}</span>
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-[#D9222A] hover:bg-stone-900 text-white rounded-full text-xs font-normal tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl shadow-[#D9222A]/30 cursor-pointer hover:scale-[1.01]"
                    >
                      <span>{t.submitBtn}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP CONTROLS (NEXT / PREV) */}
              {currentStep < 4 && (
                <div className="pt-8 mt-8 border-t border-stone-200 dark:border-white/10 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-2 border border-stone-300 dark:border-white/20 text-stone-700 dark:text-stone-300 rounded-full text-xs font-normal hover:bg-stone-100 dark:hover:bg-white/10 transition-colors flex items-center space-x-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.prevBtn}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="group inline-flex items-center space-x-2.5 pl-6 pr-2 py-2 bg-[#D9222A] hover:bg-stone-900 text-white text-xs font-normal rounded-full transition-all duration-300 shadow-xl shadow-[#D9222A]/30 hover:scale-[1.02] cursor-pointer"
                  >
                    <span>{t.nextBtn}</span>
                    <span className="w-6 h-6 rounded-full bg-black/20 group-hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT: LIVE SUMMARY CARD */}
            <div className="w-full lg:w-[37%] p-7 rounded-3xl bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 shadow-xl space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D9222A] font-display">
                <ShieldCheck className="w-4 h-4 text-[#D9222A]" />
                <span>{t.summaryTitle}</span>
              </div>

              <div className="space-y-4 pt-2 border-t border-stone-200 dark:border-white/10 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider mb-1">
                    {t.summaryType}
                  </span>
                  <p className="font-display text-sm font-normal text-stone-900 dark:text-white">
                    {selectedTypeName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider mb-1">
                      {t.summaryArea}
                    </span>
                    <p className="font-display text-base font-normal text-[#D9222A]">
                      {area} m²
                    </p>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider mb-1">
                      {t.summaryFloors}
                    </span>
                    <p className="font-display text-base font-normal text-stone-900 dark:text-white">
                      {floors}
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider mb-1">
                    {t.summaryLocation}
                  </span>
                  <p className="font-display text-sm font-normal text-stone-900 dark:text-white">
                    {location}
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider mb-1">
                    {t.summaryServices}
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {selectedServices.map((id) => {
                      const sName = serviceOptions.find((o) => o.id === id)?.name
                      return (
                        <span
                          key={id}
                          className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-white/10 text-[10px] text-stone-700 dark:text-stone-300 font-normal"
                        >
                          {sName}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Studio Guarantee */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-black/30 border border-stone-200 dark:border-white/5 space-y-1.5 text-[11px] text-stone-600 dark:text-stone-400">
                <p className="font-display text-xs text-stone-900 dark:text-white font-normal flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D9222A]" />
                  <span>Garancia Inxhinierike A-X</span>
                </p>
                <p className="leading-relaxed">
                  Llogaritjet strukturore kryhen në përputhje me standardet e licencuara Eurocode 2 & 8.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
