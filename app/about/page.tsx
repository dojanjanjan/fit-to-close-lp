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
    <div className="bg-bg min-h-screen text-text font-sans selection:bg-accent selection:text-black">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-8 py-24">
        {/* Header Section */}
        <header className="mb-32 animate-slideIn">
          <div className="font-mono text-accent text-sm mb-4 tracking-[0.3em] uppercase">Holistic Performance / BKK</div>
          <h1 className="font-display text-6xl md:text-9xl font-black uppercase leading-[0.85] mb-12 tracking-tighter">
            {t.title.split(' ')[0]}<br />
            <span className="text-white">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="h-px bg-white/10 w-full mb-12" />
          <p className="font-mono text-lg md:text-xl text-white max-w-3xl uppercase leading-tight">
            {t.tagline}
          </p>
        </header>

        {/* Vision Section - Brutalist Style */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 mb-32 overflow-hidden">
          <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[400px] border-r border-white/10">
            <Image 
              src="/images/about/about_1.png" 
              alt="Bangkok Rooftop" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md px-4 py-2 border border-accent/20">
               <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">Join the Elite</span>
            </div>
          </div>
          <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center bg-white/[0.02]">
            <h2 className="font-display text-4xl font-black uppercase mb-8 tracking-tight">{t.vision}</h2>
            <div className="space-y-6 text-white leading-relaxed font-light text-lg">
              <p>{t.vision_p1}</p>
              <p>{t.vision_p2}</p>
            </div>
          </div>
        </section>

        {/* Core Values - Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-32">
          <div className="bg-bg p-12 md:p-16 group hover:bg-accent/5 transition-colors">
            <div className="text-accent font-mono mb-8">01 / PERFORMANCE</div>
            <h3 className="font-display text-3xl font-black uppercase mb-6 tracking-tight">{t.urban}</h3>
            <p className="text-white leading-relaxed font-light">
              {t.urban_p}
            </p>
          </div>
          <div className="bg-bg p-12 md:p-16 group hover:bg-accent/5 transition-colors">
            <div className="text-accent font-mono mb-8">02 / ACTIONABLE</div>
            <h3 className="font-display text-3xl font-black uppercase mb-6 tracking-tight">{t.logic}</h3>
            <p className="text-white leading-relaxed font-light">
              {t.logic_p}
            </p>
          </div>
        </section>

        {/* Slanted CTA Section */}
        <section className="relative z-10 my-40">
          <div className="py-32 text-center bg-accent text-bg clip-path-cta">
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter italic">
                {language === 'en' ? 'Elevate Your System.' : 'ยกระดับระบบของคุณ'}
              </h2>
              <a 
                href="/book-now" 
                className="inline-block bg-bg text-accent px-12 py-4 font-display text-xl uppercase font-black hover:scale-105 transition-transform"
              >
                {language === 'en' ? 'Join Us in Bangkok' : 'เข้าร่วมกับเราที่กรุงเทพฯ'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
