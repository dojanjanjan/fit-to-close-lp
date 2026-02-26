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
          <div className="font-mono text-accent text-sm mb-4 tracking-[0.3em] uppercase">Architecture / Performance</div>
          <h1 className="font-display text-7xl md:text-9xl font-black uppercase leading-[0.85] mb-12 tracking-tighter">
            {language === 'en' ? 'The' : 'เดอะ'}<br />
            <span className="text-white">{language === 'en' ? 'Architecture' : 'สถาปัตยกรรม'}</span>
          </h1>
          <div className="h-px bg-white/10 w-full mb-12" />
          <p className="font-mono text-lg md:text-xl text-muted max-w-3xl uppercase leading-tight">
            {language === 'en' 
              ? "A high-stakes sales ecosystem built on the raw energy of Bangkok's industrial landscape. We don't train. We engineer closers."
              : "ระบบนิเวศการขายที่มีเดิมพันสูงซึ่งสร้างขึ้นจากพลังงานดิบของภูมิทัศน์อุตสาหกรรมในกรุงเทพฯ เราไม่ได้ฝึกฝน แต่เราออกแบบนักปิดการขาย"}
          </p>
        </header>

        {/* Vision Section - Brutalist Style */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 mb-32 overflow-hidden">
          <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[400px] border-r border-white/10">
            <Image 
              src="/images/about/about_1.png" 
              alt="Bangkok Industrial" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center bg-white/[0.02]">
            <h2 className="font-display text-4xl font-black uppercase mb-8 tracking-tight">{t.vision}</h2>
            <div className="space-y-6 text-muted leading-relaxed font-light text-lg">
              <p>
                {language === 'en'
                  ? "FIT TO CLOSE emerged from the intersection of architectural precision and the relentless drive of Bangkok's street energy. We observed that traditional sales training lacked the structural integrity required for modern, high-pressure environments."
                  : "FIT TO CLOSE เกิดขึ้นจากการผสมผสานระหว่างความแม่นยำทางสถาปัตยกรรมและความมุ่งมั่นที่ไม่หยุดยั้งของพลังงานข้างถนนในกรุงเทพฯ"}
              </p>
              <p>
                {language === 'en'
                  ? "Our approach is built on the 5H Framework: a data-driven methodology that treats closing not as an art, but as a deliberate architectural feat. We strip away the fluff, leaving only the high-performance core."
                  : "แนวทางของเราสร้างขึ้นบนกรอบการทำงาน 5H: วิธีการที่ขับเคลื่อนด้วยข้อมูลซึ่งถือว่าการปิดการขายไม่ใช่ศิลปะ แต่เป็นความสำเร็จทางสถาปัตยกรรมที่ตั้งใจ"}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values - Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-32">
          <div className="bg-bg p-12 md:p-16 group hover:bg-accent/5 transition-colors">
            <div className="text-accent font-mono mb-8">01 / ENERGY</div>
            <h3 className="font-display text-3xl font-black uppercase mb-6 tracking-tight">{t.urban}</h3>
            <p className="text-muted leading-relaxed font-light">
              {language === 'en'
                ? "Bangkok is our laboratory. We harness the city's unique vibration—a mix of ancient tradition and hyper-modern speed—to push participants into their high-performance 'flow state'."
                : "กรุงเทพฯ คือห้องทดลองของเรา เราควบคุมแรงสั่นสะเทือนที่เป็นเอกลักษณ์ของเมืองเพื่อผลักดันผู้เข้าร่วมเข้าสู่ 'สภาวะลื่นไหล' ที่มีประสิทธิภาพสูง"}
            </p>
          </div>
          <div className="bg-bg p-12 md:p-16 group hover:bg-accent/5 transition-colors">
            <div className="text-accent font-mono mb-8">02 / LOGIC</div>
            <h3 className="font-display text-3xl font-black uppercase mb-6 tracking-tight">{t.logic}</h3>
            <p className="text-muted leading-relaxed font-light">
              {language === 'en'
                ? "Every interaction is mapped. Every objection is anticipated. We teach participants to view the sales process as a structural blueprint where every element has a specific, load-bearing purpose."
                : "ทุกปฏิสัมพันธ์จะถูกวางแผนไว้ ทุกข้อโต้แย้งจะถูกคาดการณ์ล่วงหน้า เราสอนผู้เข้าร่วมให้มองกระบวนการขายเป็นพิมพ์เขียวโครงสร้าง"}
            </p>
          </div>
        </section>

        {/* The 5H Framework - Technical Section */}
        <section className="border-l-2 border-accent pl-12 md:pl-24 py-12 mb-32">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase mb-12 tracking-tight">The 5H Framework</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['HUB', 'HEART', 'HEAD', 'HANDS', 'HABIT'].map((h, i) => (
              <div key={i} className="space-y-2">
                <div className="font-display text-2xl text-accent">{h}</div>
                <div className="h-1 bg-white/10 w-full" />
                <div className="font-mono text-[10px] text-muted uppercase">Core Element 0{i+1}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
