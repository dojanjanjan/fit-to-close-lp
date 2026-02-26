'use client'

import { useEffect, useRef, useState } from 'react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} id="book-now" className="relative z-10 bg-bg">
      <div className="py-40 text-center bg-accent text-bg clip-path-cta">
        <div className="max-w-[1200px] mx-auto px-8">
        <h2 className={`font-display text-[5rem] uppercase mb-8 md:text-[5rem] max-md:text-4xl font-black transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          JOIN THE CORE
        </h2>
          <a
            href="#"
            className={`inline-block bg-bg text-accent px-16 py-6 font-display text-2xl uppercase transition-all duration-500 hover:scale-105 hover:bg-accent hover:text-bg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  )
}
