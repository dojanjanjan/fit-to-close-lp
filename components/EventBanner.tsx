'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function EventBanner() {
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
    <section ref={sectionRef} className="relative z-10 bg-bg py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className={`border border-accent/30 p-12 md:p-16 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-accent text-bg px-4 py-1 font-bold text-sm uppercase tracking-widest">
            Upcoming Event
          </div>

          <div className="relative aspect-[21/9] w-full mb-8 overflow-hidden">
            <Image
              src="/images/kohfit_x_fittclose.webp"
              alt="KOH FIT x FIT TO CLOSE — Elite fitness meets high-performance sales coaching in Koh Samui"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <h3 className="font-display text-4xl md:text-6xl font-black uppercase italic leading-none mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                KOH FIT x FIT TO CLOSE
              </h3>
              <p className="font-mono text-xl md:text-2xl text-accent uppercase tracking-tight mb-6">
                Aug. 10th &ndash; Aug. 16th, 2026
              </p>
              <p className="font-display text-lg md:text-xl uppercase italic text-text mb-3">
                One week. One environment. Full transformation.
              </p>
              <p className="font-mono text-sm text-muted max-w-lg leading-relaxed">
                Train your body. Sharpen your mind. Elevate your business.<br />
                Elite fitness meets high-performance sales &amp; business coaching — in Koh Samui.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4 md:mt-2">
              <span className="font-mono text-sm text-muted uppercase tracking-widest">
                More Information TBA
              </span>
              <Link
                href="/book-now"
                className="inline-block border border-accent text-accent px-8 py-3 font-display text-lg uppercase italic font-black hover:bg-accent hover:text-bg transition-colors duration-300"
              >
                Stay Tuned
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
