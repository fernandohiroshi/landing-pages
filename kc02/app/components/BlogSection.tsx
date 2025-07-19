"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

export default function BlogSection() {
  console.log("BlogSection rendering");

  const posts = [
    {
      title: "As 10 Tendências de Web Design para 2024",
      excerpt:
        "Descubra as principais tendências que estão moldando o design digital e como aplicá-las em seus projetos.",
      image:
        "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      category: "Design",
      author: "Marina Costa",
      date: "15 Jan 2024",
      readTime: "8 min",
      featured: true,
    },
    {
      title: "Next.js vs React: Quando Usar Cada Um?",
      excerpt:
        "Uma análise detalhada sobre as diferenças entre Next.js e React, e qual escolher para seu próximo projeto.",
      image:
        "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      category: "Desenvolvimento",
      author: "Carlos Silva",
      date: "12 Jan 2024",
      readTime: "12 min",
      featured: false,
    },
    {
      title: "SEO em 2024: Guia Completo para Iniciantes",
      excerpt:
        "Tudo que você precisa saber sobre otimização para mecanismos de busca e como melhorar seu ranking.",
      image:
        "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      category: "Marketing",
      author: "Ana Rodrigues",
      date: "10 Jan 2024",
      readTime: "15 min",
      featured: false,
    },
    {
      title: "Como Criar um E-commerce de Sucesso",
      excerpt:
        "Estratégias essenciais para desenvolver uma loja virtual que converte visitantes em clientes.",
      image:
        "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      category: "E-commerce",
      author: "Roberto Lima",
      date: "8 Jan 2024",
      readTime: "10 min",
      featured: false,
    },
  ];

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <section id="blog" className="py-20 bg-konbini-darker">
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
            Blog & Insights
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-konbini-text-primary mt-4 mb-6"
            data-konbinicode="blog-title"
          >
            Conhecimento que
            <span className="text-konbini-blue"> inspira</span>
          </h2>
          <p
            className="text-xl text-konbini-text-secondary max-w-3xl mx-auto"
            data-konbinicode="blog-subtitle"
          >
            Compartilhamos nossa experiência e as últimas tendências do mundo
            digital para ajudar você a tomar as melhores decisões para seu
            negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-blue/50 transition-all duration-300 group overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-konbini-dark/60 to-transparent"></div>

                  {/* Featured Badge */}
                  <Badge className="absolute top-6 left-6 bg-konbini-blue text-white border-none">
                    Destaque
                  </Badge>

                  {/* Category Badge */}
                  <Badge
                    variant="outline"
                    className="absolute top-6 right-6 bg-konbini-gray/90 backdrop-blur-sm border-konbini-gray-light text-konbini-text-primary"
                  >
                    {featuredPost.category}
                  </Badge>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-konbini-text-primary mb-4 group-hover:text-konbini-blue transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-konbini-text-secondary mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-konbini-text-muted">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-konbini-blue hover:text-konbini-accent group"
                    >
                      Ler mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Regular Posts */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {regularPosts.map((post, index) => (
              <Card
                key={post.title}
                className="bg-konbini-gray/30 border-konbini-gray-light hover:border-konbini-purple/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="flex">
                  {/* Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-4 flex-1">
                    <Badge
                      variant="outline"
                      className="mb-2 text-xs border-konbini-purple/30 text-konbini-purple bg-konbini-purple/5"
                    >
                      {post.category}
                    </Badge>

                    <h4 className="font-semibold text-konbini-text-primary mb-2 line-clamp-2 group-hover:text-konbini-purple transition-colors">
                      {post.title}
                    </h4>

                    <div className="flex items-center text-xs text-konbini-text-muted">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}

            {/* View All Button */}
            <Button
              variant="outline"
              className="w-full border-konbini-blue text-konbini-blue hover:bg-konbini-blue hover:text-white mt-6"
            >
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
