import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'AX Engineering | Architecture, Engineering & Construction • Gostivar',
  description:
    'AX Engineering is an established architectural design, structural engineering, and construction supervision firm based in Gostivar, North Macedonia. Specializing in luxury private residences, commercial projects, and technical audits.',
  keywords: [
    'AX Engineering',
    'AX Engineering Gostivar',
    'Architecture Gostivar',
    'Gostivar construction',
    'Luxury villa design Macedonia',
    'Engineering projection office',
    'Construction site supervision Gostivar',
    'Static structural calculations',
  ],
  authors: [{ name: 'AX Engineering' }],
  openGraph: {
    title: 'AX Engineering | Architecture & Construction Excellence',
    description: 'Premier architecture, engineering, and luxury residence construction in Gostivar, North Macedonia.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AX Engineering',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0B0B0C] text-[#F5F5F7] flex flex-col selection:bg-[#C5A880] selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
