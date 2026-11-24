'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'sq' | 'mk' | 'en'
export type Theme = 'dark' | 'light'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType>({
  language: 'sq',
  setLanguage: () => {},
  theme: 'light',
  toggleTheme: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('sq')
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    // Clean up legacy dark default key if present
    localStorage.removeItem('ax_theme')

    // Read persisted language
    const savedLang = localStorage.getItem('ax_language') as Language
    if (savedLang && ['sq', 'mk', 'en'].includes(savedLang)) {
      setLanguageState(savedLang)
    }

    // Read persisted theme (strictly default to 'light')
    const savedTheme = localStorage.getItem('ax_theme_v2') as Theme
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setThemeState(savedTheme)
      applyTheme(savedTheme)
    } else {
      setThemeState('light')
      applyTheme('light')
    }
  }, [])

  const applyTheme = (t: Theme) => {
    const root = document.documentElement
    if (t === 'dark') {
      root.classList.remove('light')
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('ax_language', lang)
  }

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setThemeState(nextTheme)
    localStorage.setItem('ax_theme_v2', nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
