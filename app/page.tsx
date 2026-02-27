import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import EventDetails from '@/components/EventDetails'
import SportSection from '@/components/SportSection'
import StackSection from '@/components/StackSection'
import LearnSection from '@/components/LearnSection'
import TestimonialSection from '@/components/TestimonialSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <CookieBanner />
      <Navigation />
      <Hero />
      <EventDetails />
      <SportSection />
      <StackSection />
      <LearnSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  )
}
