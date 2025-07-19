"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  console.log("TestimonialsSection rendering");

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechFlow Startup",
      avatar:
        "https://images.pexels.com/photos/1181259/pexels-photo-1181259.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
      rating: 5,
      content:
        "A Konbini Code transformou completamente nossa presença digital. O site ficou incrível e nosso faturamento aumentou 200% em 6 meses. Equipe profissional e muito dedicada!",
      project: "Plataforma SaaS",
    },
    {
      name: "João Santos",
      role: "Fundador, E-commerce Fashion",
      avatar:
        "https://images.pexels.com/photos/7441387/pexels-photo-7441387.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
      rating: 5,
      content:
        "Trabalho excepcional! A loja virtual ficou moderna, rápida e as vendas triplicaram. O suporte é fantástico e sempre disponível quando precisamos.",
      project: "Loja Virtual",
    },
    {
      name: "Ana Oliveira",
      role: "Diretora de Marketing, HealthCare",
      avatar:
        "https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
      rating: 5,
      content:
        "A parceria com a Konbini Code foi fundamental para digitalizarmos nossos processos. O portal médico entregou exatamente o que precisávamos.",
      project: "Portal Médico",
    },
    {
      name: "Carlos Pereira",
      role: "Gerente de TI, Consultoria",
      avatar:
        "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
      rating: 5,
      content:
        "Impressionante a qualidade técnica e o cuidado com cada detalhe. O aplicativo mobile superou todas as nossas expectativas. Recomendo totalmente!",
      project: "App Mobile",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-konbini-dark">
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
            Depoimentos
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-konbini-text-primary mt-4 mb-6"
            data-konbinicode="testimonials-title"
          >
            O que nossos clientes
            <span className="text-konbini-purple"> falam sobre nós</span>
          </h2>
          <p
            className="text-xl text-konbini-text-secondary max-w-3xl mx-auto"
            data-konbinicode="testimonials-subtitle"
          >
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que
            eles têm a dizer sobre a parceria com a Konbini Code.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-purple/50 transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-konbini-purple/50 mb-6" />

                  {/* Content */}
                  <p className="text-konbini-text-secondary mb-8 leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-konbini-blue text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-konbini-text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-konbini-text-secondary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-konbini-accent font-semibold uppercase tracking-wider">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-konbini-purple/10 to-konbini-blue/10 rounded-2xl p-8 md:p-12 border border-konbini-purple/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                4.9/5
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Avaliação Média
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                98%
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Clientes Satisfeitos
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                150+
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Projetos Entregues
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                5+
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Anos de Experiência
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
