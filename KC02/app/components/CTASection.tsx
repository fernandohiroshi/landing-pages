"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";

export default function CTASection() {
  console.log("CTASection rendering");

  return (
    <section className="py-20 bg-konbini-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-konbini-blue/20 via-konbini-purple/20 to-konbini-accent/20 rounded-3xl blur-3xl"></div>

            <div className="relative bg-gradient-to-r from-konbini-blue/10 via-konbini-purple/10 to-konbini-accent/10 rounded-3xl p-12 md:p-16 border border-konbini-blue/20">
              <h2
                className="text-4xl md:text-6xl font-bold text-konbini-text-primary mb-6"
                data-konbinicode="cta-title"
              >
                Pronto para transformar
                <br />
                <span className="bg-gradient-to-r from-konbini-blue via-konbini-purple to-konbini-accent bg-clip-text text-transparent">
                  seu negócio digital?
                </span>
              </h2>

              <p
                className="text-xl text-konbini-text-secondary mb-12 max-w-3xl mx-auto"
                data-konbinicode="cta-subtitle"
              >
                Vamos conversar sobre seu projeto e descobrir como a Konbini
                Code pode ajudar você a alcançar seus objetivos digitais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-konbini-blue hover:bg-konbini-blue/90 text-white px-8 py-6 text-lg font-semibold group"
                >
                  Começar Meu Projeto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-konbini-text-secondary text-konbini-text-primary hover:bg-konbini-gray px-8 py-6 text-lg font-semibold group"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-konbini-text-primary mb-2">
                    24h
                  </div>
                  <div className="text-sm text-konbini-text-secondary">
                    Resposta Rápida
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-konbini-text-primary mb-2">
                    100%
                  </div>
                  <div className="text-sm text-konbini-text-secondary">
                    Satisfaction Garantida
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-konbini-text-primary mb-2">
                    150+
                  </div>
                  <div className="text-sm text-konbini-text-secondary">
                    Projetos Entregues
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-konbini-text-primary mb-2">
                    5⭐
                  </div>
                  <div className="text-sm text-konbini-text-secondary">
                    Avaliação Média
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="max-w-2xl mx-auto text-center bg-konbini-gray/30 rounded-2xl p-8 border border-konbini-gray-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-konbini-text-primary mb-4">
            Fique por dentro das novidades
          </h3>
          <p className="text-konbini-text-secondary mb-6">
            Receba dicas exclusivas, tutoriais e insights sobre desenvolvimento
            web e design digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 bg-konbini-dark border-konbini-gray-light text-konbini-text-primary placeholder:text-konbini-text-muted"
            />
            <Button className="bg-konbini-purple hover:bg-konbini-purple/90 text-white px-6">
              <Mail className="mr-2 h-4 w-4" />
              Assinar
            </Button>
          </div>

          <p className="text-xs text-konbini-text-muted mt-3">
            Sem spam, cancele quando quiser. Seus dados estão seguros conosco.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-konbini-gray/20 rounded-xl p-6 border border-konbini-gray-light">
            <MessageSquare className="h-12 w-12 text-konbini-accent mx-auto mb-4" />
            <h4 className="font-semibold text-konbini-text-primary mb-2">
              WhatsApp
            </h4>
            <p className="text-konbini-text-secondary text-sm mb-4">
              Resposta rápida e atendimento personalizado
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-konbini-accent text-konbini-accent hover:bg-konbini-accent hover:text-white"
            >
              Chamar no WhatsApp
            </Button>
          </div>

          <div className="text-center bg-konbini-gray/20 rounded-xl p-6 border border-konbini-gray-light">
            <Mail className="h-12 w-12 text-konbini-blue mx-auto mb-4" />
            <h4 className="font-semibold text-konbini-text-primary mb-2">
              Email
            </h4>
            <p className="text-konbini-text-secondary text-sm mb-4">
              Envie detalhes do seu projeto por email
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-konbini-blue text-konbini-blue hover:bg-konbini-blue hover:text-white"
            >
              Enviar Email
            </Button>
          </div>

          <div className="text-center bg-konbini-gray/20 rounded-xl p-6 border border-konbini-gray-light">
            <Phone className="h-12 w-12 text-konbini-purple mx-auto mb-4" />
            <h4 className="font-semibold text-konbini-text-primary mb-2">
              Ligação
            </h4>
            <p className="text-konbini-text-secondary text-sm mb-4">
              Prefere falar diretamente? Vamos marcar!
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-konbini-purple text-konbini-purple hover:bg-konbini-purple hover:text-white"
            >
              Agendar Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
