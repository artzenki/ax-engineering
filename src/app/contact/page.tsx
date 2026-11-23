import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { COMPANY_INFO } from '@/data/projectsData'

export const metadata: Metadata = {
  title: 'Contact AX Engineering | Office in Gostivar, North Macedonia',
  description:
    'Contact AX Engineering projection and construction office in Gostivar. Inquire about luxury villa design, engineering audit, site supervision, or commercial developments.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0B0B0C] min-h-screen text-stone-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-3">
            Direct Dialogue
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-tight">
            Consult With Our Principal Engineers
          </h1>
          <p className="text-stone-400 text-sm md:text-base mt-4 leading-relaxed font-light">
            Whether you are embarking on a bespoke residence, requiring legal construction site supervision in the Polog region, or inquiring about our upcoming AX Signature Developments, our office is at your disposal.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-10">
            {/* Office Information Cards */}
            <div className="p-8 bg-[#121215] border border-white/10 space-y-8">
              <h3 className="font-serif text-xl text-white">Gostivar Headquarters</h3>

              <div className="space-y-6 text-xs">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#C5A880] text-[10px] block mb-1">
                      Office Address
                    </span>
                    <p className="text-white font-medium">{COMPANY_INFO.address}</p>
                    <p className="text-stone-400 mt-0.5">Republic of North Macedonia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#C5A880] text-[10px] block mb-1">
                      Direct Telephony & WhatsApp
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.mobile.replace(/\s+/g, '')}`}
                      className="text-white font-medium hover:text-[#C5A880] block transition-colors"
                    >
                      {COMPANY_INFO.mobile} (Direct Mobile / WhatsApp)
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-stone-400 hover:text-white block transition-colors mt-0.5"
                    >
                      {COMPANY_INFO.phone} (Office Desk)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#C5A880] text-[10px] block mb-1">
                      Electronic Mail
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}`}
                      className="text-white font-medium hover:text-[#C5A880] transition-colors"
                    >
                      {COMPANY_INFO.contactEmail}
                    </a>
                    <p className="text-stone-400 mt-0.5">info@axengineering.mk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="uppercase tracking-widest text-[#C5A880] text-[10px] block mb-1">
                      Working Consultations
                    </span>
                    <p className="text-white">{COMPANY_INFO.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/38970850120?text=Hello%20AX%20Engineering,%20I%20would%20like%20to%20inquire%20about%20a%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#1B2B1B] hover:bg-[#253D25] border border-green-700/50 text-green-300 text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-green-400" />
                  <span>Instant WhatsApp Direct Chat</span>
                </a>
              </div>
            </div>

            {/* Licensure badge */}
            <div className="p-6 bg-[#121215] border border-white/5 flex items-center space-x-4">
              <ShieldCheck className="w-8 h-8 text-[#C5A880] shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-wider text-white font-medium">Official Registry</h4>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Authorized design & construction supervision licensed by the Ministry of Transport and Communications.
                </p>
              </div>
            </div>

            {/* Gostivar Map Placeholder / Embed Visual */}
            <div className="relative h-64 w-full bg-[#161619] border border-white/10 overflow-hidden group">
              <iframe
                title="AX Engineering Gostivar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47663.85408332467!2d20.871952!3d41.796328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135165d70b77b819%3A0x67946cf67fba9ad7!2sGostivar!5e0!3m2!1sen!2smk!4v1700000000000!5m2!1sen!2smk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#C5A880] border border-white/10">
                Gostivar, North Macedonia
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Brief Form */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-[#101013] border border-white/10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-2 font-medium">
              Project Specification
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-6">
              Transmit Your Project Parameters
            </h2>
            <p className="text-xs text-stone-400 mb-8 leading-relaxed">
              Please share essential information regarding your planned development. Our project office will review land cadastral data, urban planning factors, and preliminary engineering feasibility.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
