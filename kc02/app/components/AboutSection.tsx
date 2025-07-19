"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  console.log("AboutSection rendering");

  const values = [
    {
      icon: Target,
      title: "Foco no Resultado",
      description:
        "Cada projeto é pensado para gerar resultados reais para seu negócio.",
    },
    {
      icon: Users,
      title: "Time Especializado",
      description:
        "Desenvolvedores e designers experientes trabalhando em seu projeto.",
    },
    {
      icon: Lightbulb,
      title: "Soluções Criativas",
      description:
        "Abordagens inovadoras para destacar sua marca no mercado digital.",
    },
    {
      icon: Rocket,
      title: "Entrega Ágil",
      description:
        "Metodologias modernas garantindo entregas rápidas e de qualidade.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-konbini-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-konbini-accent font-semibold text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-konbini-text-primary mt-4 mb-6"
                data-konbinicode="about-title"
              >
                Criamos soluções digitais que
                <span className="text-konbini-blue"> transformam negócios</span>
              </h2>
            </div>

            <p
              className="text-lg text-konbini-text-secondary mb-8 leading-relaxed"
              data-konbinicode="about-description"
            >
              Na Konbini Code, combinamos criatividade, tecnologia e estratégia
              para criar experiências digitais únicas. Nossa missão é
              transformar ideias em soluções digitais que não apenas
              impressionam visualmente, mas também geram resultados concretos
              para nossos clientes.
            </p>

            <p className="text-lg text-konbini-text-secondary mb-12 leading-relaxed">
              Desde 2019, já entregamos mais de 150 projetos para empresas de
              diversos segmentos, sempre com foco na excelência técnica e na
              satisfação do cliente.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-konbini-blue mb-2">
                  150+
                </div>
                <div className="text-konbini-text-secondary">
                  Projetos Concluídos
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-konbini-purple mb-2">
                  5+
                </div>
                <div className="text-konbini-text-secondary">
                  Anos de Experiência
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image + Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Equipe da Konbini Code trabalhando em projetos digitais"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
                data-konbinicode="about-team-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-konbini-dark/60 to-transparent"></div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-konbini-gray/50 border-konbini-gray-light hover:border-konbini-blue/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <value.icon className="h-8 w-8 text-konbini-blue mb-3 group-hover:text-konbini-accent transition-colors" />
                      <h3 className="text-lg font-semibold text-konbini-text-primary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-konbini-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
