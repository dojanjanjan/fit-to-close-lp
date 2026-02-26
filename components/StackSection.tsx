'use client'

import { useEffect, useRef, useState } from 'react'

const stackItems = [
  {
    num: '01 / MINDSET',
    title: 'BREATHWORK',
    description: 'Controlled stress response for high-pressure negotiations.',
  },
  {
    num: '02 / MOVEMENT',
    title: 'PERFORMANCE',
    description: 'Gym & Yoga designed for endurance and mental clarity.',
  },
  {
    num: '03 / FUEL',
    title: 'NUTRITION',
    description: 'Strategic eating protocols to master the sales day.',
  },
  {
    num: '04 / REVENUE',
    title: 'THE CLOSE',
    description: 'Advanced strategies for closing high-ticket deals.',
  },
]

export default function StackSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} id="program" className="relative z-10 bg-bg/80 py-32 w-full">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className={`font-display text-5xl uppercase text-accent font-semibold transition-opacity duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            THE 5H STACK
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className={`border border-muted p-8 transition-all duration-500 bg-bg hover:border-accent hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-sm text-accent mb-4 block transition-colors duration-300">{item.num}</span>
              <h3 className="font-display text-2xl mb-4 uppercase transition-colors duration-300">{item.title}</h3>
              <p className="transition-opacity duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
