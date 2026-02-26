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
      location: "Hamburg / Bangkok",
      bio: "High-stakes sales strategist and Head of Sales DACH. Patrick bridges European precision with Asian market energy. Specialist in scaling sales operations through high-performance culture.",
      image: "/images/fit-to-close_ceo_patrick_wilth.webp"
    },
    {
      name: "The Closer",
      role: t.closer,
      location: "Bangkok",
      bio: "Master of tactical negotiation. Specializes in complex high-ticket closing and psychological leverage. The architect of the FTC closing scripts.",
      image: "/images/team/team_1.png"
    }
  ]

  return (
    <div className="bg-bg min-h-screen text-text font-sans selection:bg-accent selection:text-black">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-8 py-24">
        <header className="mb-32 animate-slideIn">
          <div className="font-mono text-accent text-sm mb-4 tracking-[0.3em] uppercase">Human Capital / Leadership</div>
          <h1 className="font-display text-7xl md:text-9xl font-black uppercase leading-[0.85] mb-12 tracking-tighter">
            {t.title.split(' ')[0]}<br />
            <span className="text-white">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="h-px bg-white/10 w-full mb-12" />
        </header>

        <section className="space-y-32">
          {team.map((member, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:col-span-6 relative aspect-[4/5] overflow-hidden bg-white/[0.02] border border-white/10 group ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                   <div className="font-mono text-accent text-xs uppercase tracking-widest">{member.location}</div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-2">
                  <div className="font-mono text-accent text-sm uppercase tracking-widest">{member.role}</div>
                  <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight">{member.name}</h2>
                </div>
                <p className="text-muted text-lg leading-relaxed font-light max-w-xl">
                  {member.bio}
                </p>
                <div className="pt-4 flex gap-4">
                  <div className="w-12 h-px bg-accent self-center" />
                  <span className="font-mono text-[10px] uppercase text-muted tracking-widest">Available for Private Coaching</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Network Section */}
        <section className="mt-48 pt-24 border-t border-white/10 text-center">
          <h2 className="font-display text-4xl font-black uppercase mb-16 tracking-tight">The Global Network</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
             {['AIMPOWER', 'HEY BRAND', 'YOUNG CREATIVES', 'BKK DISTRICT'].map((partner, i) => (
               <div key={i} className="font-display text-xl tracking-tighter grayscale">{partner}</div>
             ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
