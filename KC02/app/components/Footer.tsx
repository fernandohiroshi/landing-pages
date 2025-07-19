"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code,
  Zap,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  console.log("Footer rendering");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-konbini-darker border-t border-konbini-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Code className="h-8 w-8 text-konbini-blue" />
                <Zap className="h-4 w-4 text-konbini-accent absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-konbini-text-primary">
                Konbini Code
              </span>
            </Link>

            <p
              className="text-konbini-text-secondary mb-6 leading-relaxed"
              data-konbinicode="footer-description"
            >
              Transformamos ideias em experiências digitais excepcionais. Sua
              parceira estratégica na jornada de transformação digital.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-konbini-gray-light hover:border-konbini-blue hover:bg-konbini-blue text-white"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-konbini-gray-light hover:border-konbini-purple hover:bg-konbini-purple text-white"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-konbini-gray-light hover:border-konbini-accent hover:bg-konbini-accent text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-konbini-gray-light hover:border-konbini-blue hover:bg-konbini-blue text-white"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-konbini-text-primary mb-6">
              Serviços
            </h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Desenvolvimento Web
              </Link>
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Design UI/UX
              </Link>
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Apps Mobile
              </Link>
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                E-commerce
              </Link>
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                SEO & Marketing
              </Link>
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-blue transition-colors"
              >
                Consultoria Digital
              </Link>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-konbini-text-primary mb-6">
              Empresa
            </h3>
            <div className="space-y-3">
              <Link
                href="#about"
                className="block text-konbini-text-secondary hover:text-konbini-purple transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                href="#portfolio"
                className="block text-konbini-text-secondary hover:text-konbini-purple transition-colors"
              >
                Portfólio
              </Link>
              <Link
                href="#testimonials"
                className="block text-konbini-text-secondary hover:text-konbini-purple transition-colors"
              >
                Depoimentos
              </Link>
              <Link
                href="#blog"
                className="block text-konbini-text-secondary hover:text-konbini-purple transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-purple transition-colors"
              >
                Carreiras
              </Link>
              <Link
                href="#"
                className="block text-konbini-text-secondary hover:text-konbini-purple transition-colors"
              >
                Contato
              </Link>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-konbini-text-primary mb-6">
              Contato
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-konbini-text-secondary">
                <MapPin className="h-4 w-4 mr-3 text-konbini-accent" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center text-konbini-text-secondary">
                <Mail className="h-4 w-4 mr-3 text-konbini-blue" />
                <span className="text-sm">contato@konbinicode.com</span>
              </div>
              <div className="flex items-center text-konbini-text-secondary">
                <Phone className="h-4 w-4 mr-3 text-konbini-purple" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-sm font-semibold text-konbini-text-primary mb-3">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="bg-konbini-dark border-konbini-gray-light text-konbini-text-primary placeholder:text-konbini-text-muted text-sm"
                />
                <Button
                  size="sm"
                  className="bg-konbini-accent hover:bg-konbini-accent/90 text-white px-4"
                >
                  OK
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 border-t border-konbini-gray-light flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-konbini-text-muted mb-4 md:mb-0">
            © 2024 Konbini Code. Todos os direitos reservados.
          </p>

          <div className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm text-konbini-text-muted hover:text-konbini-blue transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-konbini-text-muted hover:text-konbini-blue transition-colors"
            >
              Termos de Uso
            </Link>

            <Button
              size="sm"
              variant="outline"
              onClick={scrollToTop}
              className="border-konbini-gray-light hover:border-konbini-accent hover:bg-konbini-accent text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
