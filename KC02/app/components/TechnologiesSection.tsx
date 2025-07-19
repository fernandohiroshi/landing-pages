"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TechnologiesSection() {
  console.log("TechnologiesSection rendering");

  const categories = [
    {
      title: "Frontend",
      color: "konbini-blue",
      technologies: [
        {
          name: "React",
          logo: "⚛️",
          description: "Biblioteca JavaScript para interfaces",
        },
        {
          name: "Next.js",
          logo: "▲",
          description: "Framework React para produção",
        },
        { name: "Vue.js", logo: "🟢", description: "Framework progressivo" },
        { name: "TypeScript", logo: "🟦", description: "JavaScript tipado" },
        {
          name: "Tailwind CSS",
          logo: "🎨",
          description: "Framework CSS utilitário",
        },
      ],
    },
    {
      title: "Backend",
      color: "konbini-purple",
      technologies: [
        { name: "Node.js", logo: "🟢", description: "Runtime JavaScript" },
        { name: "Python", logo: "🐍", description: "Linguagem versátil" },
        {
          name: "PostgreSQL",
          logo: "🐘",
          description: "Banco relacional avançado",
        },
        { name: "MongoDB", logo: "🍃", description: "Banco NoSQL flexível" },
        { name: "GraphQL", logo: "🎯", description: "API query language" },
      ],
    },
    {
      title: "Mobile",
      color: "konbini-accent",
      technologies: [
        {
          name: "React Native",
          logo: "📱",
          description: "Apps nativos com React",
        },
        {
          name: "Flutter",
          logo: "🐦",
          description: "SDK multiplataforma do Google",
        },
        { name: "PWA", logo: "⚡", description: "Progressive Web Apps" },
        { name: "iOS", logo: "🍎", description: "Desenvolvimento nativo iOS" },
        {
          name: "Android",
          logo: "🤖",
          description: "Desenvolvimento nativo Android",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      color: "konbini-blue",
      technologies: [
        { name: "AWS", logo: "☁️", description: "Amazon Web Services" },
        {
          name: "Vercel",
          logo: "▲",
          description: "Deploy e hosting otimizado",
        },
        {
          name: "Docker",
          logo: "🐳",
          description: "Containerização de aplicações",
        },
        {
          name: "GitHub Actions",
          logo: "⚙️",
          description: "CI/CD automatizado",
        },
        { name: "Firebase", logo: "🔥", description: "Backend as a Service" },
      ],
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-konbini-darker">
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
            Nossa Stack
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-konbini-text-primary mt-4 mb-6"
            data-konbinicode="technologies-title"
          >
            Tecnologias
            <span className="text-konbini-blue"> modernas</span>
          </h2>
          <p
            className="text-xl text-konbini-text-secondary max-w-3xl mx-auto"
            data-konbinicode="technologies-subtitle"
          >
            Utilizamos as tecnologias mais avançadas e confiáveis do mercado
            para garantir que seu projeto tenha performance, escalabilidade e
            manutenibilidade.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-blue/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-3 h-8 rounded-full mr-4 ${
                        category.color === "konbini-blue"
                          ? "bg-konbini-blue"
                          : category.color === "konbini-purple"
                          ? "bg-konbini-purple"
                          : "bg-konbini-accent"
                      }`}
                    ></div>
                    <h3 className="text-2xl font-bold text-konbini-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="flex items-center p-4 rounded-xl bg-konbini-dark/50 border border-konbini-gray-light hover:border-konbini-blue/30 transition-all duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.2 + index * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                          {tech.logo}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-konbini-text-primary group-hover:text-konbini-blue transition-colors">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-konbini-text-secondary">
                            {tech.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          className="text-center bg-gradient-to-r from-konbini-blue/10 to-konbini-purple/10 rounded-2xl p-8 md:p-12 border border-konbini-blue/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-konbini-text-primary mb-4">
            Sempre na vanguarda da tecnologia
          </h3>
          <p className="text-lg text-konbini-text-secondary mb-8 max-w-3xl mx-auto">
            Nossa equipe está constantemente aprendendo e implementando as
            tecnologias mais recentes para garantir que seu projeto tenha a
            melhor arquitetura possível.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-konbini-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-konbini-blue font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-konbini-text-primary mb-2">
                Análise
              </h4>
              <p className="text-sm text-konbini-text-secondary">
                Escolhemos as tecnologias ideais para seu projeto específico
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-konbini-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-konbini-purple font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-konbini-text-primary mb-2">
                Implementação
              </h4>
              <p className="text-sm text-konbini-text-secondary">
                Desenvolvemos seguindo as melhores práticas e padrões da
                indústria
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-konbini-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-konbini-accent font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-konbini-text-primary mb-2">
                Otimização
              </h4>
              <p className="text-sm text-konbini-text-secondary">
                Garantimos performance e escalabilidade para crescer com seu
                negócio
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
