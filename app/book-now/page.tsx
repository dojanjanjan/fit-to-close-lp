'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function BookNow() {
  const { language } = useLanguage()
  const t = translations[language].book
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    package: 'standard'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate Omise Payment Processing
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  if (success) {
    return (
      <div className="bg-bg min-h-screen text-text flex flex-col selection:bg-accent selection:text-black animate-slideIn">
        <Navigation />
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="max-w-2xl w-full border border-accent p-16 md:p-24 text-center space-y-12 bg-accent/[0.02] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 border-[20px] border-accent/5 pointer-events-none" />
            <div className="w-32 h-32 border-8 border-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <span className="text-accent text-6xl">✓</span>
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">{t.success_title}</h1>
              <p className="font-mono text-muted uppercase text-md tracking-wider max-w-md mx-auto">
                {t.success_p}
              </p>
            </div>
            <div className="h-px bg-accent/20 w-full" />
            <a 
              href="/"
              className="inline-block bg-accent text-black px-12 py-4 font-display uppercase font-black hover:bg-white transition-colors"
            >
              Enter Dashboard
            </a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-bg min-h-screen text-text font-sans selection:bg-accent selection:text-black">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-12 animate-slideIn">
            <header className="space-y-6">
              <div className="font-mono text-accent text-sm tracking-[0.3em] uppercase">Limited Availability / Masterclass</div>
              <h1 className="font-display text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
                {t.title.split(' ')[0]}<br />
                <span className="text-white">{t.title.split(' ').slice(1).join(' ')}</span>
              </h1>
            </header>

            <div className="space-y-8">
              <p className="text-white text-xl font-light leading-relaxed">
                Connect with the elite. Elevate your system. This is your high-stakes upgrade. Join us on the rooftops of Bangkok.
              </p>
              
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                <div className="bg-white/[0.02] p-8 space-y-2">
                  <div className="font-display text-3xl">15</div>
                  <div className="font-mono text-[10px] text-white uppercase tracking-widest">Seats Total</div>
                </div>
                <div className="bg-white/[0.02] p-8 space-y-2">
                  <div className="font-display text-3xl text-accent">04</div>
                  <div className="font-mono text-[10px] text-white uppercase tracking-widest">Left for BKK</div>
                </div>
              </div>

              <div className="p-8 bg-accent text-bg clip-path-learn">
                 <div className="font-display text-2xl uppercase mb-4">Standard Entry Package</div>
                 <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-display text-5xl">€ 1.490</span>
                    <span className="font-mono text-xs uppercase">inc. VAT</span>
                 </div>
                 <ul className="space-y-3 font-mono text-xs uppercase tracking-tight">
                    <li className="flex gap-3">/ Full 5H Performance Masterclass</li>
                    <li className="flex gap-3">/ FTC Playbook (Hardcover + Digital)</li>
                    <li className="flex gap-3">/ Private Rooftop Dinner Bangkok</li>
                    <li className="flex gap-3">/ Lifetime Elite Network Access</li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-6">
            <div className="sticky top-32 bg-white/[0.02] border border-white/10 p-12 md:p-16 space-y-12 backdrop-blur-sm shadow-2xl shadow-accent/5">
              <div className="space-y-2">
                <h2 className="font-display text-3xl font-black uppercase tracking-tight">Registration</h2>
                <div className="h-0.5 bg-accent w-12" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2 group">
                  <label className="block font-mono text-[10px] uppercase text-muted tracking-widest group-focus-within:text-accent transition-colors">{t.form_name}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-accent text-white font-mono transition-all text-lg"
                    placeholder="NAME SURNAME"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="block font-mono text-[10px] uppercase text-muted tracking-widest group-focus-within:text-accent transition-colors">{t.form_email}</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-accent text-white font-mono transition-all text-lg"
                    placeholder="EMAIL@DOMAIN.COM"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="block font-mono text-[10px] uppercase text-muted tracking-widest group-focus-within:text-accent transition-colors">{t.form_company}</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-accent text-white font-mono transition-all text-lg"
                    placeholder="ORGANIZATION"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div className="pt-8 space-y-8">
                  <div className="flex items-center justify-between grayscale opacity-30 hover:opacity-100 transition-opacity">
                    <span className="font-mono text-[10px] uppercase tracking-tighter text-muted">Secured by Omise</span>
                    <div className="flex gap-4">
                      <div className="w-8 h-5 bg-white/10 rounded-sm" />
                      <div className="w-8 h-5 bg-white/10 rounded-sm" />
                    </div>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="group relative w-full bg-white text-black font-display text-2xl py-8 uppercase font-black hover:bg-accent transition-all duration-500 disabled:opacity-50 overflow-hidden"
                  >
                    <span className="relative z-10">{loading ? 'Processing...' : t.form_btn}</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                  
                  <p className="text-[10px] text-muted font-mono uppercase text-center tracking-widest leading-relaxed">
                    By clicking complete payment, you agree to the FTC terms of performance. All sales are final. Access is non-transferable.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Slanted Bottom Section */}
        <section className="relative z-10 mt-32 -mx-8 md:-mx-24 lg:-mx-32">
          <div className="py-24 bg-accent text-bg clip-path-cta text-center">
             <h3 className="font-display text-4xl font-black uppercase italic tracking-tighter">Start Monday. Close Faster.</h3>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
