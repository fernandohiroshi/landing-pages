"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  console.log(
    "Testimonials component rendered, currentTestimonial:",
    currentTestimonial
  );

  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      position: "CEO, TechStart",
      company: "TechStart Innovations",
      avatar:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      rating: 5,
      testimonial:
        "A Konbini Code transformou completamente nossa presença digital. O site que criaram não só é visualmente impressionante, mas também converteu 300% mais leads. A equipe é extremamente profissional e entrega além das expectativas.",
      project: "Site Corporativo + SEO",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: "Diretor de Marketing",
      company: "EcoStore Brasil",
      avatar:
        "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg",
      rating: 5,
      testimonial:
        "Trabalhamos com a Konbini Code no desenvolvimento do nosso e-commerce. O resultado superou todas as expectativas. A plataforma é rápida, segura e nossa conversão aumentou 250%. Recomendo sem hesitar!",
      project: "E-commerce Completo",
    },
    {
      id: 3,
      name: "Marina Costa",
      position: "Fundadora",
      company: "BeautyTech App",
      avatar:
        "https://images.pexels.com/photos/6774432/pexels-photo-6774432.jpeg",
      rating: 5,
      testimonial:
        "O aplicativo que a Konbini Code desenvolveu para nós é fantástico. Interface intuitiva, performance excepcional e os usuários adoraram. Já temos mais de 50mil downloads e crescendo!",
      project: "Aplicativo Mobile",
    },
    {
      id: 4,
      name: "Roberto Santos",
      position: "CEO",
      company: "FinanceFlow",
      avatar:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      rating: 5,
      testimonial:
        "A dashboard que criaram para nosso sistema financeiro é impressionante. Dados complexos apresentados de forma clara e intuitiva. Nossa produtividade aumentou significativamente.",
      project: "Sistema Web Complexo",
    },
  ];

  const nextTestimonial = () => {
    console.log("Next testimonial clicked");
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    console.log("Previous testimonial clicked");
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-32 bg-dark-surface relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-purple-primary/10 to-transparent rounded-l-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-cyan-accent/10 to-transparent rounded-r-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-primary/20 border border-purple-primary/30 rounded-full text-sm text-purple-200">
            Depoimentos
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold max-w-3xl mx-auto"
            data-konbinicode="testimonials-title"
          >
            O que nossos{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>

          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            data-konbinicode="testimonials-description"
          >
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que
            eles têm a dizer sobre nosso trabalho.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-purple-primary/20 glow-purple">
            <CardContent className="p-8 lg:p-12 text-center space-y-8">
              {/* Quote Icon */}
              <div className="flex justify-center">
                <div className="p-4 bg-purple-gradient rounded-full">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                "{current.testimonial}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-primary/50">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    data-konbinicode={`testimonial-avatar-${current.id}`}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-white">
                    {current.name}
                  </h4>
                  <p className="text-purple-200">{current.position}</p>
                  <p className="text-sm text-gray-400">{current.company}</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-purple-primary/30"></div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-400 mb-1">Projeto:</p>
                  <p className="text-cyan-accent font-medium">
                    {current.project}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="border-purple-primary/50 text-purple-200 hover:bg-purple-primary/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-purple-primary"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="border-purple-primary/50 text-purple-200 hover:bg-purple-primary/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { number: "98%", label: "Clientes Satisfeitos" },
            { number: "200+", label: "Projetos Entregues" },
            { number: "24h", label: "Tempo de Resposta" },
            { number: "5★", label: "Avaliação Média" },
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
      </div>
    </section>
  );
}
