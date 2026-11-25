'use client'

import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'
import MainCtaBanner from '@/components/MainCtaBanner'
import { COMPANY_INFO } from '@/data/projectsData'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

export default function ContactClient() {
  const { language } = useApp()
  const t = translations[language]

  return (
    <div className="relative overflow-hidden bg-[var(--bg-main)] min-h-screen text-stone-700 dark:text-stone-300 transition-colors duration-200">
      {/* Decorative Ambient Red Glowing Ellipses */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 md:h-[480px] md:w-[480px] rounded-full bg-[#D9222A]/10 dark:bg-[#D9222A]/15 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-2/3 h-80 w-80 md:h-[480px] md:w-[480px] rounded-full bg-[#D9222A]/8 dark:bg-[#D9222A]/12 blur-[110px] md:blur-[150px]"
        aria-hidden="true"
      />
      {/* Architectural Page Header matching single services */}
      <PageHeader
        tag={t.contact.tag}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.nav.contact },
        ]}
      />

      <div className="pt-20 pb-24 max-w-7xl mx-auto px-6 md:px-12">
        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 space-y-6 rounded-xl shadow-md">
              <h3 className="font-display text-lg text-stone-900 dark:text-white font-normal">{t.contact.officeTitle}</h3>

              <div className="space-y-5 text-xs">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#D9222A] text-[9px] block mb-0.5 font-medium">
                      {t.contact.addressLabel}
                    </span>
                    <p className="text-stone-900 dark:text-white font-medium">{COMPANY_INFO.address}</p>
                    <p className="text-stone-500 dark:text-stone-400 mt-0.5">Republic of North Macedonia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#D9222A] text-[9px] block mb-0.5 font-medium">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.mobile.replace(/\s+/g, '')}`}
                      className="text-stone-900 dark:text-white font-medium hover:text-[#D9222A] block transition-colors"
                    >
                      {COMPANY_INFO.mobile} (Direct Mobile / WhatsApp)
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-stone-500 dark:text-stone-400 hover:text-[#D9222A] block transition-colors mt-0.5"
                    >
                      {COMPANY_INFO.phone} (Office Desk)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#D9222A] text-[9px] block mb-0.5 font-medium">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}`}
                      className="text-stone-900 dark:text-white font-medium hover:text-[#D9222A] transition-colors"
                    >
                      {COMPANY_INFO.contactEmail}
                    </a>
                    <p className="text-stone-500 dark:text-stone-400 mt-0.5">info@axengineering.mk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-4 h-4 text-[#D9222A] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#D9222A] text-[9px] block mb-0.5 font-medium">
                      {t.contact.hoursLabel}
                    </span>
                    <p className="text-stone-900 dark:text-white font-medium">{t.contact.hoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-3 border-t border-stone-200 dark:border-white/10">
                <a
                  href={`https://wa.me/13092598885?text=Pershendetje%20A-X%20Engineering,%20deshiroj%20te%20konsultohem%20per%20nje%20projekt`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 bg-emerald-50 hover:bg-emerald-100 dark:bg-[#1B2B1B] dark:hover:bg-[#253D25] border border-emerald-200 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-300 text-[12px] md:text-[13px] font-normal flex items-center justify-center space-x-2 rounded-full transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.contact.whatsAppBtn}</span>
                </a>
              </div>
            </div>

            {/* Licensure badge */}
            <div className="p-5 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/5 flex items-center space-x-3.5 rounded-xl shadow-sm">
              <ShieldCheck className="w-7 h-7 text-[#D9222A] shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-900 dark:text-white font-medium font-display">
                  {t.contact.registryTitle}
                </h4>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                  {t.contact.registryDesc}
                </p>
              </div>
            </div>

            {/* Gostivar Map Embed */}
            <div className="relative h-56 w-full bg-stone-100 dark:bg-[#111215] border border-stone-200 dark:border-white/10 overflow-hidden rounded-xl group shadow-sm">
              <iframe
                title="A-X Engineering Gostivar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47663.85408332467!2d20.871952!3d41.796328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135165d70b77b819%3A0x67946cf67fba9ad7!2sGostivar!5e0!3m2!1sen!2smk!4v1700000000000!5m2!1sen!2smk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="contrast-90 dark:invert-[90%] dark:hue-rotate-180"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 px-3 py-1 text-[9px] uppercase tracking-widest text-[#D9222A] border border-stone-200 dark:border-white/10 rounded-md font-medium shadow-sm">
                Gostivar, North Macedonia
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Brief Form */}
          <div className="lg:col-span-7 p-7 md:p-10 bg-white dark:bg-[#111215] border border-stone-200 dark:border-white/10 rounded-xl shadow-md">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9222A] block mb-1.5 font-medium">
              {t.contact.formTitle}
            </span>
            <h2 className="font-display text-xl md:text-2xl text-stone-900 dark:text-white font-normal mb-3">
              {t.contact.title}
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
              {t.contact.formSubtitle}
            </p>

            <ContactForm />
          </div>
        </div>

        {/* BLACK CTA BANNER */}
        <MainCtaBanner
          tag="LLOGARITËSI INTERAKTIV"
          heading="Dëshironi një Vlerësim të Shpejtë në 4 Hapa?"
          description="Përdorni kalkulatorin tonë interaktiv për të konfiguruar sipërfaqen, katet dhe paketat inxhinierike të projektit tuaj."
          buttonText="Hap Formularin e Ofertës"
          buttonHref="/kerko-oferte"
          className="!px-0 !py-0 mt-20"
        />
      </div>
    </div>
  )
}
