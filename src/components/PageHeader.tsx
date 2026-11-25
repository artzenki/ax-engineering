'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  heroImage?: string
  breadcrumbs?: BreadcrumbItem[]
  badge?: string
  children?: React.ReactNode
}

function AnimatedLetterText({
  text,
  startIndex = 0,
  baseDelay = 0.2,
  className = '',
}: {
  text: string
  startIndex?: number
  baseDelay?: number
  className?: string
}) {
  const words = text.split(' ')
  let runningIndex = startIndex

  return (
    <span className={className}>
      {words.map((word, wIdx) => {
        const letters = Array.from(word)
        const wordEl = (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {letters.map((char, cIdx) => {
              const delay = `${baseDelay + (runningIndex + cIdx) * 0.022}s`
              return (
                <span
                  key={cIdx}
                  className="inline-block hero-letter-pop"
                  style={{ animationDelay: delay }}
                >
                  {char}
                </span>
              )
            })}
            {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        )
        runningIndex += letters.length + 1
        return wordEl
      })}
    </span>
  )
}

export default function PageHeader({
  tag,
  title,
  subtitle,
  heroImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
  breadcrumbs = [{ label: 'Ballina', href: '/' }],
  badge,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[46vh] sm:min-h-[50vh] flex flex-col justify-end pt-32 pb-14 md:pb-18 overflow-hidden text-white">
      {/* Background Architectural Photo with High-Contrast Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.35] contrast-[1.12]"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-black/55 to-black/75" />
      </div>

      {/* Ambient Red Glowing Ellipse */}
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#D9222A]/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-wider mb-5">
            {breadcrumbs.map((b, idx) => (
              <span key={idx} className="flex items-center space-x-2">
                {b.href ? (
                  <Link
                    href={b.href}
                    className="text-white/65 hover:text-white transition-colors flex items-center space-x-1"
                  >
                    {idx === 0 && <ArrowLeft className="w-3.5 h-3.5 mr-1" />}
                    <span>{b.label}</span>
                  </Link>
                ) : (
                  <span className="text-white/90 font-normal">{b.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-white/30">•</span>
                )}
              </span>
            ))}
          </div>
        )}

        <div className="max-w-4xl">
          {/* Tag Capsule - Animated expand like Hero */}
          {tag && (
            <div className="hero-pill-expand inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white text-[10px] md:text-[11px] font-normal uppercase tracking-[0.2em] mb-4 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#D9222A] animate-pulse shadow-sm shadow-[#D9222A]" />
              <span className="hero-pill-text hero-tag-text">{tag}</span>
              {badge && (
                <>
                  <span className="text-white/40">•</span>
                  <span className="text-[#FF4455]">{badge}</span>
                </>
              )}
            </div>
          )}

          {/* Monumental Animated Headline - Letter-by-letter popping up */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] mb-4 text-white">
            <AnimatedLetterText text={title} baseDelay={0.25} />
          </h1>

          {/* Subtitle with fade up */}
          {subtitle && (
            <p className="hero-desc-fade text-sm sm:text-base md:text-lg text-[#F4F4F5] leading-relaxed font-normal max-w-3xl">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}
