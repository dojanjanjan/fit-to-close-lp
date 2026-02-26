import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SportSection from '@/components/SportSection'
import StackSection from '@/components/StackSection'
import TestimonialSection from '@/components/TestimonialSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import Pinpad from '@/components/Pinpad'

export default function Home() {
  return (
    <>
      <Pinpad />
      <Navigation />
      <div className="max-w-[1200px] mx-auto px-8">
        <Hero />
      </div>
      <SportSection />
      <StackSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  )
}
