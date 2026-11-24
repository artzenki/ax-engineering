'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { translations } from '@/translations'

export default function ContactForm() {
  const { language } = useApp()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Vila Luksoze / Rezidencë Private',
    location: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 bg-[#111215] border border-[#D9222A]/40 text-center space-y-5 rounded-xl shadow-2xl">
        <CheckCircle2 className="w-12 h-12 text-[#D9222A] mx-auto" />
        <h3 className="font-display text-2xl text-white">{t.contact.successTitle}</h3>
        <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
          {t.contact.successDesc}
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: 'Vila Luksoze / Rezidencë Private',
              location: '',
              message: '',
            })
          }}
          className="text-xs uppercase tracking-widest text-[#D9222A] hover:text-[#F03542] underline pt-4"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-wider text-stone-300 theme-text-heading block font-medium">
            {t.contact.fullName}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Besnik Iseni"
            className="w-full bg-[#111215] border border-white/10 px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D9222A] rounded-lg transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-wider text-stone-300 theme-text-heading block font-medium">
            {t.contact.email}
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full bg-[#111215] border border-white/10 px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D9222A] rounded-lg transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-wider text-stone-300 theme-text-heading block font-medium">
            {t.contact.phone}
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+389 70 000 000"
            className="w-full bg-[#111215] border border-white/10 px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D9222A] rounded-lg transition-colors"
          />
        </div>

        {/* Service Requested */}
        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-wider text-stone-300 theme-text-heading block font-medium">
            {t.contact.discipline}
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-[#111215] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D9222A] rounded-lg transition-colors"
          >
            <option value="Vila Luksoze / Rezidencë Private">Vila Luksoze / Rezidencë Private</option>
            <option value="Objekt Afarist / Qendër Tregtare">Objekt Afarist / Qendër Tregtare</option>
            <option value="Mbikëqyrje Ndërtimi (Nadzor)">Mbikëqyrje Ndërtimi (Nadzor)</option>
            <option value="Projektim Statik & Sizmik">Projektim Statik & Sizmik</option>
            <option value="A-X Signature Residences">A-X Signature Residences</option>
            <option value="Enterier & Dizajn Hapësinor">Enterier & Dizajn Hapësinor</option>
          </select>
        </div>
      </div>

      {/* Project Location */}
      <div className="space-y-1.5">
        <label className="text-[11px] uppercase tracking-wider text-stone-300 theme-text-heading block font-medium">
          {t.contact.location}
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="e.g. Gostivar, Mavrovë, Tetovë, Shkup, etj."
          className="w-full bg-[#111215] border border-white/10 px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D9222A] rounded-lg transition-colors"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-1.5">
        <label className="text-[11px] uppercase tracking-wider text-stone-300 theme-text-heading block font-medium">
          {t.contact.brief}
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Shënoni hollësi për parcelën, sipërfaqen e dëshiruar në m², afatet kohore, etj."
          className="w-full bg-[#111215] border border-white/10 px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D9222A] rounded-lg transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full py-2.5 bg-[#D9222A] hover:bg-[#F03542] text-white text-[12px] md:text-[13px] font-normal rounded-full flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-xl shadow-[#D9222A]/20 disabled:opacity-50"
      >
        <span>{isSubmitting ? t.contact.transmitting : t.contact.submitBtn}</span>
        <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-white group-hover:bg-black/35 transition-colors">
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </button>

      <p className="text-[10px] text-stone-500 text-center tracking-wider">
        {t.contact.confidentialNotice}
      </p>
    </form>
  )
}
