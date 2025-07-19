'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function PortfolioSection() {
  console.log('PortfolioSection rendering')

  const projects = [
    {
      title: 'TechFlow Dashboard',
      category: 'Web App',
      description: 'Plataforma de análise de dados com interface moderna e funcionalidades avançadas para empresas de tecnologia.',
      image: 'https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      featured: true
    },
    {
      title: 'E-commerce Fashion',
      category: 'Loja Virtual',
      description: 'Loja online completa com sistema de pagamento integrado e gestão de estoque automatizada.',
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      featured: false
    },
    {
      title: 'StartupLab Platform',
      category: 'SaaS',
      description: 'Plataforma colaborativa para startups com ferramentas de gestão de projetos e comunicação.',
      image: 'https://images.pexels.com/photos/7441387/pexels-photo-7441387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      tags: ['Vue.js', 'Firebase', 'TypeScript', 'PWA'],
      featured: false
    },
    {
      title: 'FinanceApp Mobile',
      category: 'App Mobile',
      description: 'Aplicativo de controle financeiro pessoal com interface intuitiva e recursos de IA.',
      image: 'https://images.pexels.com/photos/1181259/pexels-photo-1181259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      tags: ['React Native', 'TensorFlow', 'Redux', 'Node.js'],
      featured: false
    },
    {
      title: 'HealthCare Portal',
      category: 'Sistema Web',
      description: 'Portal médico completo com agendamento online, prontuários digitais e telemedicina.',
      image: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      tags: ['Angular', 'Python', 'MySQL', 'WebRTC'],
      featured: true
    },
    {
      title: 'Marketing Agency Site',
      category: 'Website',
      description: 'Site institucional moderno com animações personalizadas e otimização para SEO.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      tags: ['Gatsby', 'GraphQL', 'Contentful', 'GSAP'],
      featured: false
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-konbini-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-konbini-accent font-semibold text-sm uppercase tracking-wider">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-konbini-text-primary mt-4 mb-6" data-macaly="portfolio-title">
            Projetos que 
            <span className="text-konbini-purple"> transformaram negócios</span>
          </h2>
          <p className="text-xl text-konbini-text-secondary max-w-3xl mx-auto" data-macaly="portfolio-subtitle">
            Cada projeto é único e desenvolvido com tecnologias de ponta para 
            entregar resultados excepcionais aos nossos clientes.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-blue/50 transition-all duration-300 group overflow-hidden">
                  
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-konbini-dark/60 to-transparent group-hover:from-konbini-dark/40 transition-all duration-300"></div>
                    
                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-konbini-blue/90 text-white border-none">
                      {project.category}
                    </Badge>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-konbini-text-primary mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-konbini-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-konbini-blue/30 text-konbini-blue bg-konbini-blue/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-purple/50 transition-all duration-300 group overflow-hidden h-full">
                
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-konbini-dark/60 to-transparent"></div>
                  
                  <Badge className="absolute top-3 left-3 bg-konbini-purple/90 text-white border-none text-xs">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-konbini-text-primary mb-3">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-konbini-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="border-konbini-purple/30 text-konbini-purple bg-konbini-purple/5 text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="border-konbini-text-muted text-konbini-text-muted bg-transparent text-xs">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="border-konbini-blue text-konbini-blue hover:bg-konbini-blue hover:text-white px-8 py-6 text-lg font-semibold"
          >
            Ver Todos os Projetos
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}