'use client'

import { useEffect, useState } from 'react'
import LanguageSelector from './LanguageSelector'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="sticky top-0 z-[100] flex justify-between items-center py-8 px-8 uppercase text-sm tracking-wider transition-all duration-300 bg-black/80 backdrop-blur-sm">
      <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="font-display text-2xl font-black italic bg-gradient-to-b from-white to-accent bg-clip-text text-transparent">
          FTC<span className="text-xs">©</span>
        </div>
        <div className="font-mono text-sm text-muted uppercase tracking-wider hidden md:block">
          Bangkok 2026
        </div>
      </a>
      
      <div className="flex items-center gap-4">
        {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-text hover:text-accent transition-all duration-300 hover:scale-105">
              Home
            </a>
            <a href="/about" className="text-text hover:text-accent transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="/team" className="text-text hover:text-accent transition-all duration-300 hover:scale-105">
              Team
            </a>
            <a href="/book-now" className="text-text hover:text-accent transition-all duration-300 hover:scale-105">
              Book now
            </a>
            <a href="/contact" className="text-text hover:text-accent transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </div>
        <LanguageSelector />
      </div>

      {/* Mobile Burger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 focus:outline-none relative z-[120]"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-full bg-accent transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-full bg-accent transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-full bg-accent transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-black/98 backdrop-blur-xl transform transition-transform duration-500 z-[110] md:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-white/5 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-8 pt-24 justify-between">
          <div className="flex flex-col gap-8">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Team', href: '/team' },
              { label: 'Book now', href: '/book-now' },
              { label: 'Contact', href: '/contact' }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-text hover:text-accent transition-colors uppercase text-2xl font-display font-black tracking-tighter italic"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="space-y-6 pb-12">
            <div className="h-px bg-white/10 w-full" />
            <div className="grid grid-cols-1 gap-4">
              <a href="https://line.me/ti/p/@fit.to.close" target="_blank" className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center italic font-black text-accent border border-white/10">L</div>
                Line ID
              </a>
              <a href="https://instagram.com/fit.to.close" target="_blank" className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center italic font-black text-accent border border-white/10">I</div>
                Instagram
              </a>
              <a href="https://maps.app.goo.gl/xxx" target="_blank" className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center italic font-black text-accent border border-white/10">M</div>
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  )
}
