"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  console.log("Hero component rendered");

  const scrollToSection = (href: string) => {
    console.log("Scrolling to:", href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-primary/20 border border-purple-primary/30 rounded-full text-sm text-purple-200 glass-card">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Transformando ideias em realidade digital
            </div>

            {/* Main Headline */}
            <div className="space-y-4" data-konbinicode="hero-title">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Criamos sites que{" "}
                <span className="bg-gradient-to-r from-purple-primary via-purple-secondary to-cyan-accent bg-clip-text text-transparent">
                  convertem
                </span>{" "}
                visitantes em clientes
              </h1>
              <p
                className="text-lg lg:text-xl text-gray-300 max-w-2xl"
                data-konbinicode="hero-description"
              >
                Especialistas em desenvolvimento web, design gráfico e presença
                digital. Transformamos sua visão em uma experiência digital
                marcante que impulsiona resultados.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-purple-primary">
                  200+
                </div>
                <div className="text-sm text-gray-400">Projetos Entregues</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-cyan-accent">95%</div>
                <div className="text-sm text-gray-400">
                  Clientes Satisfeitos
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-purple-secondary">
                  5 anos
                </div>
                <div className="text-sm text-gray-400">de Experiência</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#contato")}
                size="lg"
                className="bg-purple-gradient hover:scale-105 transition-all duration-200 glow-purple text-white font-medium px-8"
              >
                Começar Meu Projeto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection("#portfolio")}
                variant="outline"
                size="lg"
                className="border-purple-primary/50 text-purple-200 hover:bg-purple-primary/10 hover:scale-105 transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Nosso Trabalho
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Equipe especializada
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Entrega rápida
              </div>
            </div>
          </div>

          {/* Hero Image/Dashboard */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative glass-card p-8 rounded-2xl border-2 border-purple-primary/20 glow-purple">
                <Image
                  src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
                  alt="Dashboard moderno"
                  width={600}
                  height={400}
                  className="rounded-xl"
                  data-konbinicode="hero-dashboard-image"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg border border-cyan-accent/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">Online</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-lg border border-purple-primary/30">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-primary">
                      98%
                    </div>
                    <div className="text-xs text-gray-400">Performance</div>
                  </div>
                </div>
              </div>

              {/* Background Accent */}
              <div className="absolute inset-0 bg-purple-gradient opacity-20 rounded-2xl blur-xl transform scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
