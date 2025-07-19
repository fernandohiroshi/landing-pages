"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  console.log("Portfolio component rendered, activeFilter:", activeFilter);

  const filters = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web Design" },
    { id: "mobile", label: "Mobile" },
    { id: "branding", label: "Branding" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp Solutions",
      category: "web",
      description:
        "Site corporativo moderno com foco em conversão e performance.",
      image: "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      id: 2,
      title: "EcoStore Brasil",
      category: "ecommerce",
      description:
        "Loja virtual sustentável com sistema de pagamento integrado.",
      image:
        "https://images.pexels.com/photos/4069293/pexels-photo-4069293.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      id: 3,
      title: "StartupX",
      category: "branding",
      description: "Identidade visual completa para startup de tecnologia.",
      image: "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg",
      technologies: ["Figma", "Illustrator", "Branding"],
      link: "#",
    },
    {
      id: 4,
      title: "FitApp Mobile",
      category: "mobile",
      description: "Aplicativo de fitness com tracking personalizado.",
      image:
        "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      id: 5,
      title: "FinTech Dashboard",
      category: "web",
      description: "Dashboard analítico para gestão financeira empresarial.",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      technologies: ["Vue.js", "D3.js", "Python"],
      link: "#",
    },
    {
      id: 6,
      title: "RestaurantePro",
      category: "ecommerce",
      description: "Sistema de delivery integrado com gestão de pedidos.",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      technologies: ["Laravel", "MySQL", "PWA"],
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleFilterChange = (filterId: string) => {
    console.log("Changing filter to:", filterId);
    setActiveFilter(filterId);
  };

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-32 bg-dark-surface relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-purple-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-gradient-to-t from-cyan-accent/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-primary/20 border border-purple-primary/30 rounded-full text-sm text-purple-200">
            Nosso Portfólio
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold max-w-3xl mx-auto"
            data-konbinicode="portfolio-title"
          >
            Projetos que{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              transformam negócios
            </span>
          </h2>

          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            data-konbinicode="portfolio-description"
          >
            Cada projeto é uma oportunidade de criar algo extraordinário. Veja
            alguns dos trabalhos que desenvolvemos com paixão e dedicação.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-purple-gradient text-white glow-purple"
                  : "border-purple-primary/50 text-purple-200 hover:bg-purple-primary/10 hover:text-white"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group glass-card border-dark-border hover:border-purple-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  data-konbinicode={`portfolio-image-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-purple-gradient hover:scale-105 transition-transform text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/50 text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-purple-primary/20 text-purple-200 rounded-full border border-purple-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-400 capitalize">
                    {filters.find((f) => f.id === project.category)?.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-purple-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <p className="text-gray-300">
              Gostou do nosso trabalho? Vamos criar algo incrível juntos!
            </p>
            <Button className="bg-purple-gradient hover:scale-105 transition-transform glow-purple text-white font-medium px-8">
              Iniciar Meu Projeto
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
