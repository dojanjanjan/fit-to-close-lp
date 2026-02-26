'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
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
        onClick={() => setLanguage('th')}
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
