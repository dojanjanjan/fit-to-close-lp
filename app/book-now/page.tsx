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
      <div className="bg-bg min-h-screen text-text flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="max-w-md w-full border border-accent p-12 text-center space-y-8 bg-accent/5">
            <div className="w-24 h-24 border-4 border-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <span className="text-accent text-4xl">✓</span>
            </div>
            <h1 className="font-display text-4xl font-black uppercase italic">{t.success_title}</h1>
            <p className="font-mono text-muted uppercase text-sm">
              {t.success_p}
            </p>
            <div className="h-px bg-accent/20 w-full" />
            <button 
              onClick={() => setSuccess(false)}
              className="text-accent font-mono text-xs uppercase tracking-widest hover:underline"
            >
              Back to Dashboard
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-bg min-h-screen text-text font-sans">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="font-display text-6xl md:text-8xl font-black uppercase italic leading-none mb-8 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              {t.title.split(' ')[0]}<br />{t.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="font-mono text-xl text-muted max-w-sm uppercase tracking-tighter mb-12">
              Limited slots. High stakes. The Masterclass starts soon.
            </p>

            <div className="space-y-8">
              <div className="p-8 border-l-4 border-accent bg-accent/5">
                <div className="font-display text-2xl uppercase mb-2">Standard Entry</div>
                <div className="font-mono text-accent text-xl mb-4">€ 1.490</div>
                <ul className="text-muted text-sm space-y-2 uppercase list-disc list-inside">
                  <li>Full 5H Masterclass access</li>
                  <li>FTC Playbook (Digital)</li>
                  <li>BKK Networking Dinner</li>
                </ul>
              </div>
              
              <div className="relative aspect-video bg-muted overflow-hidden border border-white/5">
                <Image src="/images/book-now/book_1.png" alt="Premium Access" fill className="object-cover opacity-80" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32 p-12 bg-black border border-white/10 shadow-2xl shadow-accent/5">
              <h2 className="font-display text-3xl font-black uppercase italic mb-8">Registration</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase text-muted mb-2 tracking-widest">{t.form_name}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-muted p-3 focus:outline-none focus:border-accent text-text font-mono transition-colors"
                    placeholder="Enter name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase text-muted mb-2 tracking-widest">{t.form_email}</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-muted p-3 focus:outline-none focus:border-accent text-text font-mono transition-colors"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase text-muted mb-2 tracking-widest">{t.form_company}</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-muted p-3 focus:outline-none focus:border-accent text-text font-mono transition-colors"
                    placeholder="Enter company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div className="pt-8">
                  <div className="flex items-center gap-4 mb-8 grayscale opacity-50">
                    <div className="text-[10px] font-mono border border-muted px-2 py-1">VISA</div>
                    <div className="text-[10px] font-mono border border-muted px-2 py-1">MASTERCARD</div>
                    <div className="text-[10px] font-mono border border-muted px-2 py-1 text-accent border-accent">OMISE SECURE</div>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full bg-accent text-black font-display text-xl p-6 uppercase italic font-black hover:bg-white transition-colors duration-300 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : t.form_btn}
                  </button>
                  <p className="mt-4 text-[10px] text-muted font-mono uppercase text-center tracking-widest">
                    Your payment is secured by Omise. Total: € 1.490
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
