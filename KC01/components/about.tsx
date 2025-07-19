import { CheckCircle, Award, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Estratégia Digital",
      description:
        "Desenvolvemos estratégias personalizadas para maximizar sua presença online e alcançar seus objetivos.",
    },
    {
      icon: Lightbulb,
      title: "Soluções Criativas",
      description:
        "Combinamos criatividade e tecnologia para criar experiências únicas que destacam sua marca.",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description:
        "Cada projeto é executado com excelência técnica e atenção aos mínimos detalhes.",
    },
  ];

  const achievements = [
    "Sites responsivos e otimizados",
    "Design centrado no usuário",
    "SEO e performance avançada",
    "Suporte técnico contínuo",
  ];

  return (
    <section
      id="sobre"
      className="py-20 lg:py-32 bg-dark-surface relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-primary/20 border border-purple-primary/30 rounded-full text-sm text-purple-200">
                Sobre a Konbini Code
              </div>

              <h2
                className="text-3xl lg:text-4xl font-bold"
                data-konbinicode="about-title"
              >
                Transformamos{" "}
                <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                  ideias em realidade
                </span>{" "}
                digital
              </h2>

              <p
                className="text-lg text-gray-300 leading-relaxed"
                data-konbinicode="about-description"
              >
                Somos uma equipe apaixonada por criar soluções digitais que
                fazem a diferença. Com mais de 5 anos de experiência, combinamos
                design excepcional, desenvolvimento técnico avançado e
                estratégia digital para entregar resultados que superam
                expectativas.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-purple-gradient rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                O que oferecemos:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative glass-card p-6 rounded-2xl border border-purple-primary/20">
                <Image
                  src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
                  alt="Equipe trabalhando"
                  width={600}
                  height={400}
                  className="rounded-xl w-full object-cover"
                  data-konbinicode="about-team-image"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 glass-card p-4 rounded-lg border border-cyan-accent/30 bg-dark-bg/90">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-accent">
                    200+
                  </div>
                  <div className="text-sm text-gray-400">Projetos</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg border border-purple-primary/30 bg-dark-bg/90">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-primary">
                    5+
                  </div>
                  <div className="text-sm text-gray-400">Anos</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-purple-gradient opacity-10 rounded-2xl blur-2xl transform scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
