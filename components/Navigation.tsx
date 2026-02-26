'use client'

import { useEffect, useState } from 'react'

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
    <nav className={`sticky top-0 z-50 flex justify-between items-center py-8 px-8 uppercase text-sm tracking-wider transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-sm' : ''
    }`}>
      <div className="flex items-center gap-3">
        <div className="font-display text-2xl font-black italic bg-gradient-to-b from-white to-accent bg-clip-text text-transparent">
          FTC<span className="text-xs">©</span>
        </div>
        <div className="font-mono text-sm text-muted uppercase tracking-wider hidden md:block">
          Bangkok 2026
        </div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
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

      {/* Mobile Burger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-full bg-accent transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-full bg-accent transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-full bg-accent transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md transform transition-transform duration-300 z-50 md:hidden ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-6 p-8 pt-24">
          <a 
            href="#program" 
            className="text-text hover:text-accent transition-colors uppercase"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#team" 
            className="text-text hover:text-accent transition-colors uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Team
          </a>
          <a 
            href="#book-now" 
            className="text-text hover:text-accent transition-colors uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Book now
          </a>
          <a 
            href="#contact" 
            className="text-text hover:text-accent transition-colors uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
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
