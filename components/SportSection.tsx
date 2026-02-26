'use client'

import { useEffect, useRef, useState } from 'react'

export default function SportSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full min-h-[80vh] z-0 relative overflow-hidden flex items-center justify-center">
      <div 
        className="absolute bg-cover bg-center bg-no-repeat ken-burns"
        style={{
          backgroundImage: 'url(/images/fit-to-close_sport_01.webp)',
          width: '150%',
          height: '150%',
          top: '-25%',
          left: '-25%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-30 pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 z-30 pointer-events-none" />
      <div className="relative z-40 max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className={`font-display text-3xl md:text-4xl font-black mb-8 text-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          The Urban Pulse of Performance.
        </h2>
        <div className={`font-mono text-lg md:text-xl leading-relaxed text-text space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <p>
            Where the raw, high-intensity energy of New York meets the visionary landscape of Bangkok. This is not another corporate seminar; it is a 5-hour high-stakes evolution designed for those who refuse to settle. We bridge the gap between sales mastery, mental resilience, and physical performance.
          </p>
        </div>
      </div>
    </section>
  )
}
