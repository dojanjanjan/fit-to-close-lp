'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, MessageSquare, Instagram, Linkedin, Send, Loader2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactPage() {
  const { language } = useLanguage()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [subscribeState, setSubscribeState] = useState({ email: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setFormState({ name: '', email: '', message: '' })
    }, 1500)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Subscribed successfully to the FTC Performance Newsletter.')
    setSubscribeState({ email: '' })
  }

  return (
    <div className="bg-bg min-h-screen text-text font-sans selection:bg-accent selection:text-black">
      <Navigation />
      
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <header className="mb-24 animate-slideIn">
            <div className="font-mono text-accent text-sm mb-4 tracking-[0.3em] uppercase">Connect / Inquire</div>
            <h1 className="font-display text-[11vw] md:text-9xl font-black uppercase leading-[0.85] mb-12 tracking-tighter break-words">
              GET IN<br />
              <span className="text-white">TOUCH</span>
            </h1>
            <div className="h-px bg-white/10 w-full" />
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Form Column */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h2 className="font-display text-4xl font-black uppercase tracking-tight italic">Direct Transmission</h2>
                <p className="text-muted-foreground font-light text-lg">Have a specific question about the next masterclass or corporate booking? Send us a message.</p>
              </div>

              {sent ? (
                <div className="p-12 border border-accent/30 bg-accent/5 rounded-xl text-center space-y-6">
                  <div className="text-accent text-5xl">✓</div>
                  <h3 className="font-display text-2xl font-black uppercase">Message Received</h3>
                  <p className="text-muted-foreground font-mono text-sm uppercase">Transmission successful. We will respond within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="text-accent font-mono text-xs uppercase tracking-widest border-b border-accent pb-1 hover:text-white hover:border-white transition-colors">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="block font-mono text-[10px] uppercase text-muted tracking-widest group-focus-within:text-accent transition-colors">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="NAME SURNAME"
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-accent text-white font-mono transition-all"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="block font-mono text-[10px] uppercase text-muted tracking-widest group-focus-within:text-accent transition-colors">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="EMAIL@DOMAIN.COM"
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-accent text-white font-mono transition-all"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="block font-mono text-[10px] uppercase text-muted tracking-widest group-focus-within:text-accent transition-colors">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="YOUR INQUIRY..."
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-accent text-white font-mono transition-all resize-none"
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={loading}
                    type="submit" 
                    className="group flex items-center gap-4 bg-white text-black px-12 py-5 font-display text-xl uppercase font-black hover:bg-accent transition-all hover:translate-x-2"
                  >
                    {loading ? <Loader2 className="animate-spin h-6 w-6" /> : <><Send size={20} /> SEND MESSAGE</>}
                  </button>
                </form>
              )}
            </div>

            {/* Side Info Column */}
            <div className="lg:col-span-5 space-y-16">
              
              {/* Newsletter Block */}
              <div className="bg-white/[0.03] border border-white/10 p-10 md:p-12 space-y-8">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight">The Performance Brief</h3>
                  <p className="font-mono text-[10px] text-muted uppercase tracking-widest">Monthly insights on Mindset, Movement & Sales.</p>
                </div>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input 
                    required
                    type="email" 
                    placeholder="EMAIL@DOMAIN.COM"
                    className="w-full bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-accent text-white font-mono text-sm transition-all"
                    value={subscribeState.email}
                    onChange={e => setSubscribeState({email: e.target.value})}
                  />
                  <button type="submit" className="w-full bg-accent text-bg py-4 font-display font-black uppercase hover:bg-white transition-colors">Subscribe Now</button>
                </form>
              </div>

              {/* Social Channels */}
              <div className="space-y-8">
                <h3 className="font-mono text-[10px] uppercase text-muted tracking-[0.3em] pl-1">Global Channels</h3>
                <div className="grid grid-cols-1 gap-4">
                  <a href="https://instagram.com/fit.to.close" target="_blank" className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 hover:border-accent/40 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Instagram className="h-5 w-5 text-white group-hover:text-accent" />
                      </div>
                      <span className="font-display text-lg uppercase font-black tracking-tight">Instagram</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted group-hover:text-accent transition-colors">@fit.to.close</span>
                  </a>
                  <a href="https://linkedin.com/company/fit-to-close" target="_blank" className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 hover:border-accent/40 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Linkedin className="h-5 w-5 text-white group-hover:text-accent" />
                      </div>
                      <span className="font-display text-lg uppercase font-black tracking-tight">LinkedIn</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted group-hover:text-accent transition-colors">Fit To Close</span>
                  </a>
                </div>
              </div>

              {/* Direct Info */}
              <div className="pt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-accent" />
                  <span className="font-mono text-[10px] text-muted uppercase tracking-widest">Digital HQ</span>
                </div>
                <div className="space-y-2 font-mono text-sm uppercase">
                  <p className="text-white">Young Creatives BKK / Hey Brand</p>
                  <p className="text-muted-foreground">Bangkok, Thailand</p>
                  <a href="mailto:hello@fit-to-close.com" className="text-accent hover:text-white transition-colors">hello@fit-to-close.com</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
