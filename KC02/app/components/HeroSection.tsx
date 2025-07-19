"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  console.log("HeroSection rendering");

  return (
    <section className="relative min-h-screen bg-konbini-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-konbini-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-konbini-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-konbini-accent/20 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-konbini-blue/10 text-konbini-blue border border-konbini-blue/20">
              <span className="w-2 h-2 bg-konbini-accent rounded-full mr-2 animate-pulse"></span>
              Transformando ideias em código
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            data-konbinicode="hero-title"
          >
            <span className="text-konbini-text-primary">Criamos</span>
            <br />
            <span className="bg-gradient-to-r from-konbini-blue via-konbini-purple to-konbini-accent bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              Experiências
            </span>
            <br />
            <span className="text-konbini-text-primary">Digitais</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-konbini-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-konbinicode="hero-subtitle"
          >
            Na Konbini Code, transformamos suas ideias em sites modernos,
            designs impactantes e estratégias digitais que fazem seu negócio
            crescer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-konbini-blue hover:bg-konbini-blue/90 text-white px-8 py-6 text-lg font-semibold group"
            >
              Começar Projeto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-konbini-text-secondary text-konbini-text-primary hover:bg-konbini-gray px-8 py-6 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver Portfolio
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                150+
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Projetos Entregues
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                98%
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                5+
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-konbini-text-primary mb-2">
                24h
              </div>
              <div className="text-sm text-konbini-text-secondary">
                Suporte Dedicado
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-konbini-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-konbini-text-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
