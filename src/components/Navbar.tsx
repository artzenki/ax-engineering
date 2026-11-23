'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, Lock } from 'lucide-react'

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/about' },
  { name: 'Staff', href: '/about#staff' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Do not render regular navbar inside /studio
  if (pathname?.startsWith('/studio')) {
    return null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <span className="w-10 h-10 border border-[#C5A880] flex items-center justify-center font-serif text-lg tracking-widest text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-black transition-all duration-300">
              AX
            </span>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-sm md:text-base text-white font-medium uppercase">
                AX Engineering
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase">
                Gostivar • Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#C5A880]'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880]" />
                  )}
                </Link>
              )
            })}

            {/* Direct Studio CMS Access */}
            <Link
              href="/studio"
              className="flex items-center space-x-1.5 text-[11px] tracking-wider uppercase text-stone-400 hover:text-[#C5A880] px-3 py-1.5 border border-stone-800 hover:border-[#C5A880]/50 rounded transition-all"
              title="Open Sanity CMS Studio"
            >
              <Lock className="w-3 h-3 text-[#C5A880]" />
              <span>CMS Studio</span>
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link
              href="/contact"
              className="group relative inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 bg-[#C5A880] text-black font-medium hover:bg-white transition-all duration-300"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-stone-200 hover:text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0B0C] pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden border-b border-stone-800">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-[0.2em] font-serif text-stone-300 hover:text-[#C5A880] transition-colors py-2 border-b border-stone-800"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/studio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 text-sm uppercase tracking-widest text-[#C5A880] py-2"
            >
              <Lock className="w-4 h-4" />
              <span>Sanity CMS Studio</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col space-y-4">
            <p className="text-xs text-stone-400 tracking-wider">
              Bulevard Braka Ginovski, Gostivar
            </p>
            <p className="text-xs text-[#C5A880]">contact@axengineering.mk</p>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#C5A880] text-black uppercase tracking-widest text-xs font-semibold"
            >
              Start Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
