"use client";

import {
  Code,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  console.log("Footer component rendered");

  const scrollToTop = () => {
    console.log("Scrolling to top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    console.log("Scrolling to:", href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerSections = [
    {
      title: "Serviços",
      links: [
        { label: "Desenvolvimento Web", href: "#servicos" },
        { label: "Design Gráfico", href: "#servicos" },
        { label: "Apps Mobile", href: "#servicos" },
        { label: "SEO & Marketing", href: "#servicos" },
        { label: "E-commerce", href: "#servicos" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", href: "#sobre" },
        { label: "Nosso Processo", href: "#sobre" },
        { label: "Equipe", href: "#sobre" },
        { label: "Carreiras", href: "#contato" },
        { label: "Parceiros", href: "#contato" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Portfólio", href: "#portfolio" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "FAQ", href: "#contato" },
        { label: "Suporte", href: "#contato" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-dark-surface border-t border-dark-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-primary/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-accent/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div
              className="flex items-center space-x-3"
              data-konbinicode="footer-logo"
            >
              <div className="bg-purple-gradient p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                Konbini Code
              </span>
            </div>

            {/* Description */}
            <p
              className="text-gray-300 leading-relaxed max-w-md"
              data-konbinicode="footer-description"
            >
              Transformamos ideias em soluções digitais extraordinárias.
              Especialistas em desenvolvimento web, design e presença digital
              que impulsiona resultados.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-primary" />
                <span>contato@konbinicode.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-accent" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-secondary" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="p-2 glass-card border border-purple-primary/20 rounded-lg hover:border-purple-primary/50 hover:scale-110 transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-purple-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-dark-border">
          <div className="glass-card p-8 rounded-xl border border-purple-primary/20 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Fique por dentro das novidades
              </h3>
              <p className="text-gray-300">
                Receba dicas exclusivas sobre tecnologia, design e
                desenvolvimento web.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-2 bg-dark-bg border border-purple-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-primary focus:outline-none"
                />
                <Button className="bg-purple-gradient hover:scale-105 transition-transform text-white">
                  Assinar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Konbini Code. Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-purple-primary transition-colors text-sm">
              Política de Privacidade
            </button>
            <button className="text-gray-400 hover:text-purple-primary transition-colors text-sm">
              Termos de Uso
            </button>
            <button className="text-gray-400 hover:text-purple-primary transition-colors text-sm">
              Cookies
            </button>
          </div>

          {/* Scroll to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-purple-primary/50 text-purple-200 hover:bg-purple-primary/10 hover:scale-110 transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
