import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Benefits from '@/components/benefits'
import Technologies from '@/components/technologies'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Benefits />
      <Technologies />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}