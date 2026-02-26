'use client'

import { useState, useEffect } from 'react'

type Language = 'en' | 'th'

export default function LanguageSelector() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'th')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    // You can add language change logic here (e.g., context, i18n)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`font-mono text-xs uppercase tracking-wider transition-colors ${
          language === 'en'
            ? 'text-accent'
            : 'text-muted hover:text-text'
        }`}
      >
        EN
      </button>
      <span className="text-muted">/</span>
      <button
        onClick={() => handleLanguageChange('th')}
        className={`font-mono text-xs uppercase tracking-wider transition-colors ${
          language === 'th'
            ? 'text-accent'
            : 'text-muted hover:text-text'
        }`}
      >
        TH
      </button>
    </div>
  )
}
