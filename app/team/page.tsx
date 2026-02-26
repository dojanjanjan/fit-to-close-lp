'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Team() {
  const { language } = useLanguage()
  const t = translations[language].team

  const team = [
    {
      name: "Patrick Wilth",
      role: t.lead,
      bio: "High-stakes sales strategist with a track record of closing multi-million dollar deals across the DACH region and SE Asia.",
      image: "/images/fit-to-close_ceo_patrick_wilth.webp"
    },
    {
      name: "The Closer",
      role: t.closer,
      bio: "Master of psychological negotiation and tactical closing. The silent force behind the FTC architecture.",
      image: "/images/team/team_1.png"
    }
  ]

  return (
    <div className="bg-bg min-h-screen text-text font-sans">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-8 py-24">
        <header className="mb-24">
          <h1 className="font-display text-6xl md:text-8xl font-black uppercase italic leading-none mb-8 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            {t.title.split(' ')[0]}<br />{t.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="font-mono text-xl text-muted max-w-2xl uppercase tracking-tighter">
            Meet the minds behind high-stakes performance.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-8 border-l-4 border-accent border-white/5">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="space-y-4">
                <div className="font-mono text-accent text-sm uppercase tracking-widest">{member.role}</div>
                <h2 className="font-display text-4xl font-black uppercase italic">{member.name}</h2>
                <p className="text-muted leading-relaxed max-w-md">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-accent/5 p-12 md:p-24 border-y border-accent/20 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-4xl font-black uppercase italic">Join the Elite</h2>
            <p className="text-muted leading-relaxed">
              We don't just teach. We partner with the best in the industry to create a global network of elite closers. Our advisors come from the highest echelons of global finance and urban development.
            </p>
            <div className="flex justify-center gap-12 grayscale opacity-50">
               <div className="font-display text-xl">HK/HQ</div>
               <div className="font-display text-xl">BKK/XT</div>
               <div className="font-display text-xl">NYC/ST</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
