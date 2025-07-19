import { Code, Palette, Smartphone, Search, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description:
        "Sites e aplicações web modernas, responsivas e otimizadas para performance máxima.",
      features: [
        "React & Next.js",
        "TypeScript",
        "APIs Restful",
        "Banco de Dados",
      ],
      color: "purple",
    },
    {
      icon: Palette,
      title: "Design Gráfico",
      description:
        "Identidade visual completa, criando marcas memoráveis e impactantes.",
      features: [
        "Logo & Branding",
        "Material Gráfico",
        "UI/UX Design",
        "Ilustrações",
      ],
      color: "cyan",
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description:
        "Aplicativos nativos e híbridos para iOS e Android com experiência excepcional.",
      features: ["React Native", "Flutter", "App Store", "Push Notifications"],
      color: "purple",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description:
        "Estratégias de SEO e marketing digital para aumentar sua visibilidade online.",
      features: ["Google Ads", "SEO Técnico", "Analytics", "Social Media"],
      color: "cyan",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Otimização completa para velocidade, conversão e experiência do usuário.",
      features: ["Core Web Vitals", "CDN Setup", "Caching", "Monitoramento"],
      color: "purple",
    },
    {
      icon: Shield,
      title: "Segurança",
      description:
        "Implementação de medidas robustas de segurança e proteção de dados.",
      features: ["SSL/TLS", "Firewall", "Backup", "Compliance"],
      color: "cyan",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 lg:py-32 bg-dark-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-primary/10 to-transparent rounded-r-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-cyan-accent/10 to-transparent rounded-l-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-accent/20 border border-cyan-accent/30 rounded-full text-sm text-cyan-200">
            Nossos Serviços
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold max-w-3xl mx-auto"
            data-konbinicode="services-title"
          >
            Soluções completas para sua{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-purple-primary bg-clip-text text-transparent">
              presença digital
            </span>
          </h2>

          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            data-konbinicode="services-description"
          >
            Oferecemos um portfólio completo de serviços digitais, desde o
            conceito até a implementação, garantindo que sua presença online
            seja impactante e eficaz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group glass-card border-dark-border hover:border-purple-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 space-y-6">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl ${
                    service.color === "purple"
                      ? "bg-purple-gradient"
                      : "bg-gradient-to-br from-cyan-accent to-purple-secondary"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          service.color === "purple"
                            ? "bg-purple-primary"
                            : "bg-cyan-accent"
                        }`}
                      ></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Não encontrou exatamente o que procura?
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-purple-gradient rounded-lg hover:scale-105 transition-transform cursor-pointer">
            <span className="text-white font-medium">
              Fale conosco para soluções personalizadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
