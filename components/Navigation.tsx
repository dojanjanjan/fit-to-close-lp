'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 flex justify-between items-center py-8 px-8 uppercase text-sm tracking-wider transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-sm' : ''
    }`}>
      <div className="flex items-center gap-3">
        <div className="font-display text-2xl font-black italic bg-gradient-to-b from-white to-accent bg-clip-text text-transparent">
          FTC<span className="text-xs">©</span>
        </div>
        <div className="font-mono text-sm text-muted uppercase tracking-wider">
          Bangkok 2026
        </div>
      </div>
      <div className="flex gap-8">
        <a href="#program" className="text-text hover:text-accent transition-colors">
          About
        </a>
        <a href="#team" className="text-text hover:text-accent transition-colors">
          Team
        </a>
        <a href="#book-now" className="text-text hover:text-accent transition-colors">
          Book now
        </a>
        <a href="#contact" className="text-text hover:text-accent transition-colors">
          Contact
        </a>
      </div>
    </nav>
  )
}
