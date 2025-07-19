"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contato" },
  ];

  console.log("Header component rendered");

  const scrollToSection = (href: string) => {
    console.log("Scrolling to section:", href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-dark-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-konbinicode="logo">
            <div className="bg-purple-gradient p-2 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <Link
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent"
            >
              Konbini Code
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex">
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-purple-gradient hover:scale-105 transition-transform duration-200 glow-purple text-white font-medium"
            >
              Começar Projeto
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-surface transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-b border-dark-border">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-dark-border">
                <Button
                  onClick={() => scrollToSection("#contato")}
                  className="w-full bg-purple-gradient text-white font-medium"
                >
                  Começar Projeto
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
