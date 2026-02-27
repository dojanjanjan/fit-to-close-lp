'use client'

import Image from 'next/image'

export default function EventDetails() {
  return (
    <section className="bg-bg py-24 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="font-mono text-accent text-sm tracking-[0.3em] uppercase">Next Masterclass / BKK</div>
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
                11. APRIL<br />
                <span className="text-white">HOUSE 94</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 border-l border-accent pl-6">
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest">Time Slot</div>
                <div className="text-2xl font-display uppercase text-white">10:00 — 15:00</div>
              </div>
              <div className="space-y-2 border-l border-white/20 pl-6">
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest">Experience</div>
                <div className="text-2xl font-display uppercase text-white">5H High-Intensity</div>
              </div>
            </div>

            <p className="text-white text-lg font-light leading-relaxed max-w-xl">
              Join us at the iconic <span className="text-accent font-medium">House 94</span> for a deep dive into high-stakes performance. 
              The 5-hour format is designed to dismantle traditional sales training and replace it with a holistic performance system.
            </p>

            <a 
              href="/book-now"
              className="inline-block bg-white text-black px-12 py-4 font-display text-xl uppercase font-black hover:bg-accent transition-all hover:scale-105"
            >
              Secure your seat
            </a>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative overflow-hidden border border-white/10 group">
              <Image 
                src="/images/house94_pool.jpg"
                alt="House 94 Poolside Location"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <div className="font-mono text-accent text-[10px] uppercase tracking-[0.2em]">Location Context</div>
                <div className="text-white font-display text-2xl uppercase">House 94 Poolside</div>
              </div>
            </div>
            {/* Design Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-accent opacity-40 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}
