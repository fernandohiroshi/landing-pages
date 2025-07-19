import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import BenefitsSection from './components/BenefitsSection'
import TechnologiesSection from './components/TechnologiesSection'
import TestimonialsSection from './components/TestimonialsSection'
import BlogSection from './components/BlogSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-konbini-dark">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BenefitsSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
