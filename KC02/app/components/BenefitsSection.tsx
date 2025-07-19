"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  HeartHandshake,
  CheckCircle,
  Star,
} from "lucide-react";

export default function BenefitsSection() {
  console.log("BenefitsSection rendering");

  const benefits = [
    {
      icon: Zap,
      title: "Performance Otimizada",
      description:
        "Sites e aplicações ultra-rápidos que garantem a melhor experiência do usuário.",
      metric: "3x mais rápido",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description:
        "Protocolos de segurança avançados para proteger seus dados e dos seus clientes.",
      metric: "99.9% uptime",
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description:
        "Time especializado disponível para ajudar você a alcançar seus objetivos.",
      metric: "24/7 disponível",
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description:
        "Soluções estratégicas que geram resultados reais para seu negócio.",
      metric: "150% ROI médio",
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description:
        "Metodologias ágeis garantindo entregas no prazo sem comprometer a qualidade.",
      metric: "30 dias médio",
    },
    {
      icon: HeartHandshake,
      title: "Parceria Duradoura",
      description:
        "Construímos relacionamentos de longo prazo, não apenas projetos pontuais.",
      metric: "98% retenção",
    },
  ];

  const achievements = [
    { icon: CheckCircle, label: "Projetos Entregues", value: "150+" },
    { icon: Star, label: "Avaliação Média", value: "4.9/5" },
    { icon: Users, label: "Clientes Satisfeitos", value: "120+" },
    { icon: TrendingUp, label: "Crescimento Médio", value: "200%" },
  ];

  return (
    <section id="benefits" className="py-20 bg-konbini-dark">
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
            Por Que Escolher a Konbini Code
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-konbini-text-primary mt-4 mb-6"
            data-konbinicode="benefits-title"
          >
            Benefícios que fazem a
            <span className="text-konbini-accent"> diferença</span>
          </h2>
          <p
            className="text-xl text-konbini-text-secondary max-w-3xl mx-auto"
            data-konbinicode="benefits-subtitle"
          >
            Não somos apenas uma agência digital. Somos seus parceiros
            estratégicos na transformação digital, oferecendo vantagens únicas.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-accent/50 transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-konbini-accent/10 border border-konbini-accent/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-konbini-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-konbini-text-primary mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-konbini-text-secondary mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Metric */}
                  <div className="bg-konbini-accent/5 border border-konbini-accent/20 rounded-lg py-2 px-4">
                    <span className="text-konbini-accent font-semibold text-lg">
                      {benefit.metric}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          className="bg-gradient-to-r from-konbini-blue/10 via-konbini-purple/10 to-konbini-accent/10 rounded-2xl p-8 md:p-12 border border-konbini-blue/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-konbini-text-primary mb-4">
              Números que comprovam nossa excelência
            </h3>
            <p className="text-lg text-konbini-text-secondary max-w-2xl mx-auto">
              Resultados reais de clientes que confiaram na Konbini Code para
              transformar seus negócios digitais.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <achievement.icon className="h-8 w-8 text-konbini-blue mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-konbini-text-secondary">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
