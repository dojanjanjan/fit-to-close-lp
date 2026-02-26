'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <div className="bg-bg min-h-screen text-text font-sans">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-8 py-24">
        <header className="mb-24">
          <h1 className="font-display text-6xl md:text-8xl font-black uppercase italic leading-none mb-8 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            {t.title.split(' ')[0]}<br />{t.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="font-mono text-xl text-muted max-w-2xl uppercase tracking-tighter">
            Where high-stakes sales performance meets the raw energy of urban Bangkok.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative aspect-[21/9] bg-muted overflow-hidden group border border-white/5">
             <Image src="/images/about/about_1.png" alt="NYC Urban Industrial" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-black uppercase mb-6 italic">{t.vision}</h2>
            <p className="text-muted leading-relaxed mb-6">
              {t.vision_p1}
            </p>
            <p className="text-muted leading-relaxed">
              We combined the precision of data-driven strategy with the physical and mental stamina of an athlete. This is not just a masterclass; it's an architecture for closers.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="space-y-6">
            <div className="aspect-square bg-muted relative overflow-hidden group border border-white/5">
              <Image src="/images/about/about_2.png" alt="Bangkok Energy" fill className="object-cover" />
            </div>
            <h3 className="font-display text-2xl font-black uppercase italic">{t.urban}</h3>
            <p className="text-muted text-sm leading-relaxed">
              We leverage the relentless drive of Bangkok's urban landscape to push our participants beyond their perceived limits.
            </p>
          </div>
          <div className="space-y-6">
            <div className="aspect-square bg-muted relative overflow-hidden group border border-white/5">
              <Image src="/images/about/about_3.png" alt="Modern Architecture" fill className="object-cover" />
            </div>
            <h3 className="font-display text-2xl font-black uppercase italic">{t.logic}</h3>
            <p className="text-muted text-sm leading-relaxed">
              Every move is calculated. Every word is strategic. We teach the science behind the art of the deal.
            </p>
          </div>
          <div className="p-12 border border-accent flex flex-col justify-center text-center">
            <div className="font-display text-6xl text-accent mb-4">5H</div>
            <div className="font-mono text-sm uppercase tracking-widest text-text">Performance System</div>
            <div className="h-px bg-accent/30 w-full my-6" />
            <p className="text-muted text-xs uppercase">The framework for the next generation of sales leaders.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
