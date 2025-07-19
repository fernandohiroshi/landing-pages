"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";

export default function CTA() {
  console.log("CTA component rendered");

  const scrollToSection = (href: string) => {
    console.log("Scrolling to:", href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida",
      action: "Chamar no WhatsApp",
      color: "green",
    },
    {
      icon: Phone,
      title: "Ligação",
      description: "Atendimento direto",
      action: "Ligar Agora",
      color: "blue",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Proposta detalhada",
      action: "Enviar E-mail",
      color: "purple",
    },
  ];

  return (
    <section
      id="contato"
      className="py-20 lg:py-32 bg-gradient-to-br from-purple-primary/20 via-dark-bg to-cyan-accent/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-l from-cyan-accent/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-purple-primary/10 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main CTA Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-primary/30 border border-purple-primary/50 rounded-full text-sm text-purple-200 glass-card">
                Pronto para começar?
              </div>

              <h2
                className="text-3xl lg:text-5xl font-bold leading-tight"
                data-konbinicode="cta-title"
              >
                Vamos criar algo{" "}
                <span className="bg-gradient-to-r from-purple-primary via-cyan-accent to-purple-secondary bg-clip-text text-transparent">
                  extraordinário
                </span>{" "}
                juntos
              </h2>

              <p
                className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                data-konbinicode="cta-description"
              >
                Transforme sua ideia em realidade digital. Nossa equipe está
                pronta para criar a solução perfeita para o seu negócio. Entre
                em contato e vamos conversar!
              </p>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-purple-gradient hover:scale-105 transition-all duration-200 glow-purple text-white font-medium px-8 py-4 text-lg"
              >
                Começar Meu Projeto Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-cyan-accent/50 text-cyan-200 hover:bg-cyan-accent/10 hover:scale-105 transition-all duration-200 px-8 py-4 text-lg"
              >
                Agendar Reunião Gratuita
              </Button>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-purple-primary/20 hover:border-purple-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="space-y-4 text-center">
                  <div
                    className={`inline-flex p-4 rounded-xl ${
                      method.color === "green"
                        ? "bg-green-500/20 text-green-400"
                        : method.color === "blue"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-gradient text-white"
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {method.description}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        method.color === "green"
                          ? "text-green-400"
                          : method.color === "blue"
                          ? "text-blue-400"
                          : "text-purple-primary"
                      }`}
                    >
                      {method.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-purple-primary/20">
            {[
              { number: "24h", label: "Resposta Garantida" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "5 anos", label: "de Experiência" },
              { number: "200+", label: "Projetos Entregues" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="glass-card p-6 rounded-xl border border-cyan-accent/20 bg-cyan-accent/5">
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Projeto urgente? 🚀
              </h3>
              <p className="text-gray-300">
                Temos um time dedicado para projetos express. Entre em contato
                pelo WhatsApp para atendimento prioritário.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Prioritário
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
