'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Scissors, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronDown,
  Award,
  Users,
  Calendar,
  Shield,
  Zap,
  Trophy
} from 'lucide-react'

const services = [
  {
    name: "Corte Clássico",
    description: "Corte tradicional com acabamento perfeito",
    price: "R$ 45",
    image: "https://images.pexels.com/photos/7697390/pexels-photo-7697390.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  },
  {
    name: "Barba & Bigode", 
    description: "Aparação e modelagem completa",
    price: "R$ 35",
    image: "https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  },
  {
    name: "Combo Premium",
    description: "Corte + barba + tratamento capilar",
    price: "R$ 75", 
    image: "https://images.pexels.com/photos/3998404/pexels-photo-3998404.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  },
  {
    name: "Estilo Moderno",
    description: "Cortes contemporâneos e ousados", 
    price: "R$ 55",
    image: "https://images.pexels.com/photos/7697394/pexels-photo-7697394.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  }
]

const portfolioImages = [
  "https://images.pexels.com/photos/7518740/pexels-photo-7518740.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200",
  "https://images.pexels.com/photos/7697390/pexels-photo-7697390.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200", 
  "https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200",
  "https://images.pexels.com/photos/3998404/pexels-photo-3998404.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200",
  "https://images.pexels.com/photos/7697394/pexels-photo-7697394.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200",
  "https://images.pexels.com/photos/5584461/pexels-photo-5584461.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
]

const testimonials = [
  {
    name: "Carlos Silva", 
    comment: "Melhor barbearia da cidade! Atendimento impecável e resultado sempre perfeito.",
    rating: 5,
    image: "https://images.pexels.com/photos/1707832/pexels-photo-1707832.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  },
  {
    name: "Rafael Santos",
    comment: "Ambiente masculino, profissionais qualificados. Recomendo a todos!",
    rating: 5, 
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  },
  {
    name: "Miguel Ferreira",
    comment: "Tradição e modernidade em um só lugar. Meu visual nunca esteve tão em dia!",
    rating: 5,
    image: "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  }
]

const blogPosts = [
  {
    title: "As Tendências de Corte Masculino para 2024",
    excerpt: "Descubra os estilos que estão dominando as barbearias modernas e como adaptar para seu rosto.",
    date: "15 Jan 2024",
    image: "https://images.pexels.com/photos/13809247/pexels-photo-13809247.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  },
  {
    title: "Cuidados Essenciais com a Barba",
    excerpt: "Dicas profissionais para manter sua barba sempre saudável, hidratada e bem aparada.",
    date: "10 Jan 2024", 
    image: "https://images.pexels.com/photos/3998389/pexels-photo-3998389.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  },
  {
    title: "A Arte do Barbeiro Clássico",
    excerpt: "Conheça as técnicas tradicionais que fazem a diferença em um corte verdadeiramente profissional.",
    date: "05 Jan 2024",
    image: "https://images.pexels.com/photos/13809242/pexels-photo-13809242.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
  }
]

function FadeInSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Header() {
  return (
    <header className="fixed top-0 w-full bg-barber-cream/95 backdrop-blur-sm border-b border-barber-brown/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2" data-konbinicode="header-logo">
            <Scissors className="w-8 h-8 text-barber-gold rotate-45" />
            <span className="text-2xl font-bold text-barber-dark">Barber Bros Club</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-barber-text hover:text-barber-gold transition-colors">Início</a>
            <a href="#about" className="text-barber-text hover:text-barber-gold transition-colors">Sobre</a>
            <a href="#services" className="text-barber-text hover:text-barber-gold transition-colors">Serviços</a>
            <a href="#portfolio" className="text-barber-text hover:text-barber-gold transition-colors">Portfólio</a>
            <a href="#contact" className="text-barber-text hover:text-barber-gold transition-colors">Contato</a>
          </nav>
          <button className="bg-barber-gold text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
            <Calendar className="w-4 h-4 inline mr-2" />
            Agendar
          </button>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-barber-cream relative overflow-hidden">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-barber-gold font-serif text-lg" data-konbinicode="hero-tagline">
                Tradição • Estilo • Excelência
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-barber-dark leading-tight" data-konbinicode="hero-title">
                ONDE O CABELO
                <br />
                <span className="text-barber-gold">ENCONTRA</span>
                <br />
                SEU DESTINO
              </h1>
              <p className="text-xl text-barber-text/80 max-w-md" data-konbinicode="hero-description">
                Mais que um corte, uma experiência premium que une tradição centenária com técnicas modernas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-barber-dark text-white px-8 py-4 rounded-lg hover:bg-barber-brown transition-all transform hover:scale-105 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Agende Seu Horário
              </button>
              <button className="border-2 border-barber-dark text-barber-dark px-8 py-4 rounded-lg hover:bg-barber-dark hover:text-white transition-all">
                Conheça Nossos Serviços
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-barber-dark">15+</div>
                <div className="text-sm text-barber-text/60">Anos de Tradição</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-barber-dark">5000+</div>
                <div className="text-sm text-barber-text/60">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-barber-dark">4.9★</div>
                <div className="text-sm text-barber-text/60">Avaliação Média</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-900 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3162022/pexels-photo-3162022.jpeg"
                alt="Barber Bros Club Interior"
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
                data-konbinicode="hero-image"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-barber-gold text-white p-4 rounded-full">
              <Scissors className="w-8 h-8" />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-barber-gold" />
      </motion.div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-16">
          <p className="text-barber-gold font-serif text-lg mb-4">Nossa História</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-barber-dark mb-6" data-konbinicode="about-title">
            Tradição que Se Reinventa
          </h2>
          <p className="text-xl text-barber-text/80 max-w-3xl mx-auto" data-konbinicode="about-description">
            Há mais de 15 anos, o Barber Bros Club combina as técnicas clássicas da barbearia tradicional 
            com a inovação e estilo contemporâneo. Cada corte é uma obra de arte, cada cliente é tratado como família.
          </p>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-barber-dark mb-4">Nossa Missão</h3>
                <p className="text-barber-text/80 leading-relaxed">
                  Proporcionar uma experiência única que vai além do corte de cabelo. Oferecemos um momento 
                  de relaxamento e autocuidado em um ambiente genuinamente masculino, onde cada detalhe 
                  foi pensado para sua comodidade e satisfação.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Award className="w-12 h-12 text-barber-gold mx-auto mb-3" />
                  <div className="font-bold text-barber-dark">Excelência</div>
                  <div className="text-sm text-barber-text/60">em cada serviço</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-barber-gold mx-auto mb-3" />
                  <div className="font-bold text-barber-dark">Comunidade</div>
                  <div className="text-sm text-barber-text/60">masculina unida</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-barber-gold mx-auto mb-3" />
                  <div className="font-bold text-barber-dark">Confiança</div>
                  <div className="text-sm text-barber-text/60">e tradição</div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.pexels.com/photos/7518692/pexels-photo-7518692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
                  alt="Cliente relaxando"
                  width={1200}
                  height={1200}
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <Image
                 src="https://images.pexels.com/photos/13809242/pexels-photo-13809242.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
                 alt="Ferramentas profissionais"
                 width={1200}
                 height={1200}
                 className="w-full aspect-square object-cover rounded-lg"
               />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                 src="https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
                 alt="Interior moderno"
                 width={1200}
                 height={1200}
                 className="w-full aspect-square object-cover rounded-lg"
               />
                <Image
                 src="https://images.pexels.com/photos/7518698/pexels-photo-7518698.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
                 alt="Ambiente profissional"
                 width={1200}
                 height={1200}
                 className="w-full aspect-[3/4] object-cover rounded-lg"
               />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-barber-cream">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-16">
          <p className="text-barber-gold font-serif text-lg mb-4">Nossos Serviços</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-barber-dark mb-6" data-konbinicode="services-title">
            Serviços Premium
          </h2>
          <p className="text-xl text-barber-text/80 max-w-2xl mx-auto">
            Cada serviço é executado com precisão artesanal e atenção aos mínimos detalhes
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-barber-dark mb-2">{service.name}</h3>
                  <p className="text-barber-text/70 mb-4 text-sm">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-barber-gold">{service.price}</span>
                    <button className="bg-barber-dark text-white px-4 py-2 rounded-lg hover:bg-barber-brown transition-colors text-sm">
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-16">
          <p className="text-barber-gold font-serif text-lg mb-4">Nosso Trabalho</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-barber-dark mb-6" data-konbinicode="portfolio-title">
            Galeria de Estilos
          </h2>
          <p className="text-xl text-barber-text/80 max-w-2xl mx-auto">
            Cada corte conta uma história. Veja alguns de nossos trabalhos mais marcantes
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <FadeInSection key={index}>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`Trabalho ${index + 1}`}
                  width={1200}
                  height={1200}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Scissors className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Estilo Premium</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Agendamento Online",
      description: "Sistema inteligente que se adapta à sua rotina. Agende em segundos pelo site ou app."
    },
    {
      icon: Trophy, 
      title: "Experiência Premium",
      description: "Ambiente exclusivo com Wi-Fi, bebidas cortesia e atendimento personalizado."
    },
    {
      icon: Clock,
      title: "Pontualidade Garantida", 
      description: "Respeitamos seu tempo. Horários rigorosamente cumpridos, sem esperas desnecessárias."
    }
  ]

  return (
    <section className="py-20 bg-barber-dark text-white">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-16">
          <p className="text-barber-gold font-serif text-lg mb-4">Diferenciais</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por Que Escolher o Barber Bros Club?
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeInSection key={index}>
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <benefit.icon className="w-16 h-16 text-barber-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechniquesSection() {
  const techniques = [
    {
      title: "Corte a Navalha",
      description: "Técnica tradicional para acabamento perfeito e duradouro",
      image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
    },
    {
      title: "Máquina Profissional",
      description: "Equipamentos de última geração para precisão milimétrica",
      image: "https://images.pexels.com/photos/13809242/pexels-photo-13809242.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
    },
    {
      title: "Tesoura Artesanal",
      description: "Cortes manuais com tesouras alemãs de alta qualidade",
      image: "https://images.pexels.com/photos/3998389/pexels-photo-3998389.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
    }
  ]

  return (
    <section className="py-20 bg-barber-cream">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-16">
          <p className="text-barber-gold font-serif text-lg mb-4">Técnicas & Equipamentos</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-barber-dark mb-6">
            Ferramentas de Mestre
          </h2>
          <p className="text-xl text-barber-text/80 max-w-3xl mx-auto">
            Utilizamos apenas os melhores equipamentos e técnicas refinadas ao longo de gerações de barbeiros
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <FadeInSection key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={technique.image}
                    alt={technique.title}
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-barber-dark mb-3">{technique.title}</h3>
                  <p className="text-barber-text/70">{technique.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-16">
          <p className="text-barber-gold font-serif text-lg mb-4">Depoimentos</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-barber-dark mb-6">
            O Que Nossos Clientes Dizem
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index}>
              <div className="bg-barber-cream p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-barber-gold fill-current" />
                  ))}
                </div>
                <p className="text-barber-text mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={1200}
                    height={1200}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-barber-dark">{testimonial.name}</div>
                    <div className="text-sm text-barber-text/60">Cliente Fiel</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogSection() {
  return (
    <section className="py-20 bg-barber-cream">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-16">
          <p className="text-barber-gold font-serif text-lg mb-4">Blog</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-barber-dark mb-6">
            Dicas & Tendências
          </h2>
          <p className="text-xl text-barber-text/80 max-w-2xl mx-auto">
            Fique por dentro das últimas tendências e aprenda a cuidar melhor do seu visual
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeInSection key={index}>
              <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-barber-gold mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-barber-dark mb-3 group-hover:text-barber-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-barber-text/70 mb-4">{post.excerpt}</p>
                  <button className="text-barber-gold font-semibold hover:text-barber-dark transition-colors">
                    Ler mais →
                  </button>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-barber-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Pronto para uma
            <br />
            <span className="text-barber-gold">Transformação?</span>
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Não deixe para amanhã o visual que você pode ter hoje. Agende agora e descubra 
            por que somos a barbearia preferida dos homens de estilo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-barber-gold text-barber-dark px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-barber-dark transition-all">
              <Phone className="w-5 h-5 inline mr-2" />
              Ligar Agora
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-barber-gold">15+</div>
              <div className="text-white/60">Anos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-barber-gold">5000+</div>
              <div className="text-white/60">Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-barber-gold">4.9★</div>
              <div className="text-white/60">Avaliação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-barber-gold">100%</div>
              <div className="text-white/60">Satisfação</div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-barber-text text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="w-8 h-8 text-barber-gold rotate-45" />
              <span className="text-2xl font-bold">Barber Bros Club</span>
            </div>
            <p className="text-white/70">
              Onde tradição e modernidade se encontram para criar o visual perfeito.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-white/70 hover:text-barber-gold transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 text-white/70 hover:text-barber-gold transition-colors cursor-pointer" />
              <Twitter className="w-6 h-6 text-white/70 hover:text-barber-gold transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-barber-gold">Contato</h3>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-barber-gold" />
                <span>Rua Augusta, 123 - São Paulo/SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-barber-gold" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-barber-gold" />
                <span>Segunda a Sábado: 8h - 20h</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-barber-gold">Serviços</h3>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Corte Clássico</li>
              <li className="hover:text-white transition-colors cursor-pointer">Barba & Bigode</li>
              <li className="hover:text-white transition-colors cursor-pointer">Combo Premium</li>
              <li className="hover:text-white transition-colors cursor-pointer">Estilo Moderno</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-barber-gold">Links Úteis</h3>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Sobre Nós</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfólio</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Agendamento</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Barber Bros Club. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default function BarberLanding() {
  console.log('BarberLanding component rendered')
  
  return (
    <main className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BenefitsSection />
      <TechniquesSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}