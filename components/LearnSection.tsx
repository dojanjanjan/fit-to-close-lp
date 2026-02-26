'use client'

import { useEffect, useRef, useState } from 'react'

export default function LearnSection() {
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
    <section ref={sectionRef} className="relative z-10 bg-bg">
      <div className="py-40 text-center bg-accent text-bg clip-path-learn">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className={`font-display text-4xl md:text-5xl uppercase mb-8 font-black transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Learn from the best
          </h2>
          <div className={`font-mono text-lg md:text-xl leading-relaxed text-bg space-y-6 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <p>
              Through a curated stack of elite sales experience, mindset training, and strategic nutrition, we equip you with the tools to dominate your field. You leave with fresh impulses, a sustainable community, and the definitive FTC Playbook. Leave the noise behind. Strengthen your mindset. Master the close.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
