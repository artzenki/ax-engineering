import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AppProvider } from '@/context/AppContext'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'A-X Engineering | Architecture Studio & Construction Supervision • Gostivar',
  description:
    'A-X Engineering is an established architectural design, structural engineering, and construction supervision firm based in Gostivar, North Macedonia. Specializing in luxury private residences, commercial projects, and technical audits.',
  keywords: [
    'A-X Engineering',
    'AX Engineering Gostivar',
    'Architecture Gostivar',
    'Gostivar construction',
    'Arkitekt Gostivar',
    'Projektim Gostivar',
    'Nadzor Gostivar',
    'Градежен надзор Гостивар',
    'Архитектура Гостивар',
    'Luxury villa design Macedonia',
  ],
  authors: [{ name: 'A-X Engineering' }],
  openGraph: {
    title: 'A-X Engineering | Architecture Studio & Engineering Excellence',
    description: 'Premier architecture, engineering, and luxury residence construction in Gostivar, North Macedonia.',
    type: 'website',
    locale: 'sq_MK',
    siteName: 'A-X Engineering',
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
