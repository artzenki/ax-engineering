'use client'

import { useState } from 'react'
import { Send, CheckCircle2, ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Luxury Residential Architecture',
    location: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate instant fast submission (can connect to Formspree, Resend, or API)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 bg-[#121215] border border-[#C5A880]/40 text-center space-y-5">
        <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto" />
        <h3 className="font-serif text-2xl text-white">Inquiry Received</h3>
        <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-white font-medium">{formData.name}</span>. Our lead architectural and engineering office in Gostivar has received your project briefing and will contact you within 24 business hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: 'Luxury Residential Architecture',
              location: '',
              message: '',
            })
          }}
          className="text-xs uppercase tracking-widest text-[#C5A880] underline pt-4"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-stone-300 block">
            Full Name / Organisation *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Besnik Iseni"
            className="w-full bg-[#121215] border border-white/10 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C5A880] transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-stone-300 block">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full bg-[#121215] border border-white/10 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C5A880] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-stone-300 block">
            Telephone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+389 70 000 000"
            className="w-full bg-[#121215] border border-white/10 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C5A880] transition-colors"
          />
        </div>

        {/* Service Requested */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-stone-300 block">
            Discipline Required
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-[#121215] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
          >
            <option value="Luxury Residential Architecture">Luxury Villa / Private Residence</option>
            <option value="Commercial Development">Commercial & Mixed-Use Hub</option>
            <option value="Site Supervision & Audit">Construction Site Supervision & Audit (Nadzor)</option>
            <option value="Structural & Seismic Engineering">Structural & Static Engineering</option>
            <option value="AX Signature Residences">Inquire about AX Signature Residences</option>
            <option value="Interior Architecture">Bespoke Interior & Living Design</option>
          </select>
        </div>
      </div>

      {/* Project Location */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-stone-300 block">
          Plot / Project Location
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="e.g. Gostivar, Mavrovo, Tetovo, Skopje, or International"
          className="w-full bg-[#121215] border border-white/10 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C5A880] transition-colors"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-stone-300 block">
          Project Brief / Scope of Work *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Provide details regarding the land plot, desired square meters, timeline, or current construction status..."
          className="w-full bg-[#121215] border border-white/10 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#C5A880] hover:bg-white text-black uppercase tracking-[0.25em] text-xs font-semibold flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50"
      >
        <span>{isSubmitting ? 'Transmitting Brief...' : 'Transmit Project Brief'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-[11px] text-stone-500 text-center tracking-wider">
        Your data is treated with confidentiality. Initial architectural consultation is non-binding.
      </p>
    </form>
  )
}
