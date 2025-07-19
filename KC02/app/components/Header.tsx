"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Zap } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(
    "Header render, isScrolled:",
    isScrolled,
    "isMenuOpen:",
    isMenuOpen
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-konbini-dark/90 backdrop-blur-lg border-b border-konbini-gray"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            data-konbinicode="header-logo"
          >
            <div className="relative">
              <Code className="h-8 w-8 text-konbini-blue group-hover:text-konbini-accent transition-colors" />
              <Zap className="h-4 w-4 text-konbini-accent absolute -top-1 -right-1 group-hover:animate-pulse" />
            </div>
            <span className="text-xl font-bold text-konbini-text-primary">
              Konbini Code
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-konbini-text-secondary hover:text-konbini-blue transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#services"
              className="text-konbini-text-secondary hover:text-konbini-blue transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#portfolio"
              className="text-konbini-text-secondary hover:text-konbini-blue transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="#technologies"
              className="text-konbini-text-secondary hover:text-konbini-blue transition-colors"
            >
              Tecnologias
            </Link>
            <Link
              href="#testimonials"
              className="text-konbini-text-secondary hover:text-konbini-blue transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="#blog"
              className="text-konbini-text-secondary hover:text-konbini-blue transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:inline-flex bg-konbini-blue/10 border-konbini-blue text-konbini-blue hover:bg-konbini-blue hover:text-white transition-all"
            >
              Começar Projeto
            </Button>

            <button
              className="md:hidden text-konbini-text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-konbini-dark/95 backdrop-blur-lg border-b border-konbini-gray">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="#about"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="#services"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="#portfolio"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Portfólio
              </Link>
              <Link
                href="#technologies"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Tecnologias
              </Link>
              <Link
                href="#testimonials"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Depoimentos
              </Link>
              <Link
                href="#blog"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Blog
              </Link>
              <Button
                variant="outline"
                className="w-full mt-4 bg-konbini-blue/10 border-konbini-blue text-konbini-blue hover:bg-konbini-blue hover:text-white"
              >
                Começar Projeto
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
