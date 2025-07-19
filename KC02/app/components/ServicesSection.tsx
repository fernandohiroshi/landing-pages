"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Palette,
  Smartphone,
  ShoppingCart,
  Search,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  console.log("ServicesSection rendering");

  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description:
        "Sites modernos e responsivos usando as tecnologias mais avançadas do mercado.",
      features: [
        "React & Next.js",
        "Performance otimizada",
        "SEO integrado",
        "Design responsivo",
      ],
      color: "konbini-blue",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description:
        "Interfaces intuitivas e experiências memoráveis para seus usuários.",
      features: [
        "Design System",
        "Prototipagem",
        "Testes de usabilidade",
        "Branding digital",
      ],
      color: "konbini-purple",
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android.",
      features: ["React Native", "Flutter", "PWA", "App Store Deploy"],
      color: "konbini-accent",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Lojas virtuais completas com sistemas de pagamento integrados.",
      features: ["Shopify", "WooCommerce", "Stripe", "Gestão de estoque"],
      color: "konbini-blue",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description:
        "Estratégias para aumentar sua visibilidade online e gerar mais leads.",
      features: ["Google Ads", "SEO técnico", "Analytics", "Social Media"],
      color: "konbini-purple",
    },
    {
      icon: BarChart3,
      title: "Consultoria Digital",
      description:
        "Análise completa e estratégias personalizadas para seu negócio digital.",
      features: [
        "Auditoria técnica",
        "Plano estratégico",
        "Otimização",
        "Treinamentos",
      ],
      color: "konbini-accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-konbini-dark">
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
            Nossos Serviços
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-konbini-text-primary mt-4 mb-6"
            data-konbinicode="services-title"
          >
            Soluções completas para sua
            <span className="text-konbini-blue"> presença digital</span>
          </h2>
          <p
            className="text-xl text-konbini-text-secondary max-w-3xl mx-auto"
            data-konbinicode="services-subtitle"
          >
            Do conceito ao lançamento, oferecemos todos os serviços necessários
            para transformar sua visão em uma realidade digital de sucesso.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-blue/50 transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${
                        service.color === "konbini-blue"
                          ? "bg-konbini-blue/10 border-konbini-blue/20"
                          : service.color === "konbini-purple"
                          ? "bg-konbini-purple/10 border-konbini-purple/20"
                          : "bg-konbini-accent/10 border-konbini-accent/20"
                      } border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon
                        className={`h-7 w-7 ${
                          service.color === "konbini-blue"
                            ? "text-konbini-blue"
                            : service.color === "konbini-purple"
                            ? "text-konbini-purple"
                            : "text-konbini-accent"
                        } group-hover:text-konbini-accent transition-colors`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-konbini-text-primary mb-4">
                    {service.title}
                  </h3>

                  <p className="text-konbini-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-konbini-text-secondary flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-konbini-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-konbini-blue/10 border-konbini-gray-light text-konbini-text-secondary hover:text-konbini-blue group-hover:border-konbini-blue/50 transition-all"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-konbini-blue/10 to-konbini-purple/10 rounded-2xl p-8 md:p-12 border border-konbini-blue/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-konbini-text-primary mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-lg text-konbini-text-secondary mb-8 max-w-2xl mx-auto">
            Criamos soluções personalizadas para cada necessidade. Vamos
            conversar sobre seu projeto e encontrar a melhor solução.
          </p>
          <Button
            size="lg"
            className="bg-konbini-blue hover:bg-konbini-blue/90 text-white px-8 py-6 text-lg font-semibold group"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
