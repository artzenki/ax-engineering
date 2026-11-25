'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useApp, Language } from '@/context/AppContext'
import { translations } from '@/translations'
import { COMPANY_INFO } from '@/data/projectsData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useApp()
  const t = translations[language]

  // Do not render regular navbar inside /studio
  if (pathname?.startsWith('/studio')) {
    return null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ]

  const languages: { code: Language; label: string }[] = [
    { code: 'sq', label: 'SQ' },
    { code: 'mk', label: 'MK' },
    { code: 'en', label: 'EN' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 transition-all duration-300">
        <div
          className={`relative max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 md:px-5 py-2 flex items-center justify-between ${
            isScrolled
              ? 'bg-white/95 text-stone-900 shadow-2xl backdrop-blur-md border border-stone-200/80 py-1.5'
              : 'bg-white text-stone-900 shadow-2xl border border-stone-100 py-2'
          }`}
        >
          {/* Left: Clean Emblem Logo */}
          <Link href="/" className="group flex items-center shrink-0 z-10">
            <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0 flex items-center justify-center p-0.5 rounded-full bg-stone-900 border border-stone-800 shadow-sm">
              <Image
                src="/images/logo-dark-theme.png"
                alt="A-X Engineering Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Dead Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-1 pointer-events-auto">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href)

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-normal transition-all px-3 py-1.5 rounded-full flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-[#F2EDE4] text-stone-950 shadow-inner'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/80'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9222A] shrink-0" />
                  )}
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Controls: Language Switcher + Theme Toggle + Compact CTA */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0 z-10">
            {/* Language Switcher Capsule [SQ | MK | EN] */}
            <div className="flex items-center bg-stone-100 p-0.5 rounded-full border border-stone-200">
              {languages.map((l) => {
                const isCurrent = language === l.code
                return (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-normal tracking-wide uppercase transition-all duration-200 ${
                      isCurrent
                        ? 'bg-[#D9222A] text-white shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                    aria-label={`Switch language to ${l.label}`}
                  >
                    {l.label}
                  </button>
                )
              })}
            </div>

            {/* Smaller CTA Button (regular font weight, no bold) */}
            <Link
              href="/kerko-oferte"
              className="group inline-flex items-center space-x-2 pl-3.5 pr-1.5 py-1 bg-[#D9222A] hover:bg-stone-900 text-white hover:text-white border border-[#D9222A] hover:border-stone-900 text-[11px] font-normal rounded-full transition-all duration-300 shadow-md shadow-[#D9222A]/20 hover:scale-[1.02]"
            >
              <span>{t.nav.inquire}</span>
              <span className="w-5 h-5 rounded-full bg-black/20 group-hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>
          </div>

          {/* Mobile / Tablet Right Controls: Lang + Hamburger */}
          <div className="flex lg:hidden items-center space-x-2 z-10">
            {/* Quick Lang Switch */}
            <div className="flex items-center bg-stone-100 p-0.5 rounded-full border border-stone-200">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-1.5 py-0.5 rounded-full text-[9px] font-normal ${
                    language === l.code
                      ? 'bg-[#D9222A] text-white'
                      : 'text-stone-600'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-800 hover:text-black rounded-full hover:bg-stone-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Floating Card Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Ambient Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Rounded Card Menu */}
          <div className="fixed top-[70px] md:top-[80px] left-0 right-0 z-50 px-4 md:px-8 pointer-events-none lg:hidden">
            <div className="max-w-lg md:max-w-xl mx-auto pointer-events-auto">
              <div className="bg-white/98 dark:bg-[#0E0F12]/98 backdrop-blur-2xl border border-stone-200/90 dark:border-white/10 rounded-[28px] p-5 sm:p-6 shadow-2xl shadow-black/30 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-3 duration-300">
                {/* Navigation Links */}
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === '/'
                        ? pathname === '/'
                        : pathname?.startsWith(link.href)

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group px-4 py-2.5 rounded-2xl text-[14px] font-normal transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-[#F2EDE4] dark:bg-white/10 text-stone-950 dark:text-white font-medium shadow-sm'
                            : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100/80 dark:hover:bg-white/5 hover:text-stone-950 dark:hover:text-white'
                        }`}
                      >
                        <span className="flex items-center space-x-2.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              isActive ? 'bg-[#D9222A]' : 'bg-transparent'
                            }`}
                          />
                          <span>{link.name}</span>
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isActive
                              ? 'text-[#D9222A]'
                              : 'text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white group-hover:-rotate-45'
                          }`}
                        />
                      </Link>
                    )
                  })}
                </div>

                {/* Bottom Details & CTA Card Footer */}
                <div className="pt-3.5 border-t border-stone-200/80 dark:border-white/10 flex flex-col space-y-3.5">
                  <div className="flex items-center justify-between text-xs px-1">
                    <div>
                      <p className="font-normal text-stone-800 dark:text-stone-300 text-[11px]">
                        Bulevard Braka Ginovski, Gostivar
                      </p>
                      <p className="text-[#D9222A] text-[11px] font-mono mt-0.5">
                        {COMPANY_INFO.mobile}
                      </p>
                    </div>

                    {/* Language switch inside card */}
                    <div className="flex items-center bg-stone-100 dark:bg-white/10 p-0.5 rounded-full border border-stone-200 dark:border-white/10">
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => setLanguage(l.code)}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-normal tracking-wide transition-all ${
                            language === l.code
                              ? 'bg-[#D9222A] text-white shadow-sm'
                              : 'text-stone-600 dark:text-stone-400'
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Prominent Red CTA Pill */}
                  <Link
                    href="/kerko-oferte"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group w-full py-2.5 pl-5 pr-2 bg-[#D9222A] hover:bg-stone-900 text-white text-[12px] font-normal rounded-full flex items-center justify-between space-x-2 transition-all duration-300 shadow-xl shadow-[#D9222A]/25 hover:scale-[1.01]"
                  >
                    <span>{t.nav.inquire}</span>
                    <span className="w-6 h-6 rounded-full bg-black/20 group-hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
