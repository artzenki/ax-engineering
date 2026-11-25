import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import { AppProvider } from '@/context/AppContext'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0C0E',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ax-engineering.vercel.app'),
  title: {
    default: 'A-X Engineering | Studio Arkitekture & Mbikëqyrje • Gostivar',
    template: '%s | A-X Engineering',
  },
  description:
    'A-X Engineering është studio e themeluar e projektimit arkitektonik, inxhinierisë strukturore dhe mbikëqyrjes profesionale të ndërtimit me seli në Gostivar, Maqedoni e Veriut. Specializuar në vila luksoze, qendra afariste dhe ndërtim cilësor.',
  keywords: [
    'A-X Engineering',
    'AX Engineering Gostivar',
    'Architecture Gostivar',
    'Gostivar construction',
    'Arkitekt Gostivar',
    'Projektim Gostivar',
    'Mbikëqyrje Gostivar',
    'Mbikëqyrje ndërtimi Gostivar',
    'Градежен надзор Гостивар',
    'Архитектура Гостивар',
    'Luxury villa design Macedonia',
    'Vila luksoze Gostivar',
  ],
  authors: [{ name: 'A-X Engineering', url: 'https://ax-engineering.vercel.app' }],
  creator: 'A-X Engineering',
  publisher: 'A-X Engineering',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'A-X Engineering | Studio Arkitekture & Inxhinieri Strukturore • Gostivar',
    description:
      'Premier architectural design, structural engineering, and certified site supervision in Gostivar, North Macedonia.',
    url: 'https://ax-engineering.vercel.app',
    siteName: 'A-X Engineering',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'A-X Engineering Gostivar - Architecture & Engineering Excellence',
      },
    ],
    locale: 'sq_MK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A-X Engineering | Studio Arkitekture & Mbikëqyrje • Gostivar',
    description:
      'Premier architectural design, structural engineering, and certified site supervision in Gostivar, North Macedonia.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sq" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.removeItem('ax_theme');
                var theme = localStorage.getItem('ax_theme_v2') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col selection:bg-[#D9222A] selection:text-white transition-colors duration-300">
        <AppProvider>
          <SmoothScroll />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
