import {
  CheckCircle,
  Rocket,
  Shield,
  Clock,
  Users,
  Trophy,
  Zap,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  const mainBenefits = [
    {
      icon: Rocket,
      title: "Resultados Rápidos",
      description:
        "Vemos resultados em média 30 dias após o lançamento do projeto.",
      stats: "+300% conversões",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "100% de satisfação garantida ou seu dinheiro de volta.",
      stats: "12 meses garantia",
      color: "cyan",
    },
    {
      icon: Clock,
      title: "Entrega Pontual",
      description: "Cumprimos 100% dos prazos acordados. Sem atrasos.",
      stats: "100% no prazo",
      color: "purple",
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Equipe especializada disponível durante todo o projeto.",
      stats: "24/7 suporte",
      color: "cyan",
    },
  ];

  const additionalBenefits = [
    "Sites 100% responsivos e mobile-first",
    "SEO otimizado para Google desde o início",
    "Performance superior (95+ PageSpeed)",
    "Integração com redes sociais",
    "Analytics e métricas detalhadas",
    "Backup automático e segurança",
    "Hospedagem premium inclusa (3 meses)",
    "Treinamento completo da equipe",
    "Atualizações de conteúdo (6 meses)",
    "Consultoria estratégica inclusa",
    "Design exclusivo e personalizado",
    "Código limpo e documentado",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Descoberta",
      description:
        "Entendemos seu negócio, objetivos e necessidades específicas.",
    },
    {
      number: "02",
      title: "Planejamento",
      description: "Criamos estratégia personalizada e cronograma detalhado.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Desenvolvemos protótipos e interfaces focadas na experiência.",
    },
    {
      number: "04",
      title: "Desenvolvimento",
      description:
        "Codificamos com as melhores práticas e tecnologias modernas.",
    },
    {
      number: "05",
      title: "Testes",
      description: "Testamos performance, segurança e compatibilidade total.",
    },
    {
      number: "06",
      title: "Lançamento",
      description: "Colocamos no ar e acompanhamos de perto os resultados.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-dark-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-primary/20 border border-purple-primary/30 rounded-full text-sm text-purple-200">
            Por que escolher a Konbini Code?
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold max-w-3xl mx-auto"
            data-konbinicode="benefits-title"
          >
            Benefícios que fazem a{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              diferença
            </span>
          </h2>

          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            data-konbinicode="benefits-description"
          >
            Não somos apenas mais uma agência. Somos seus parceiros estratégicos
            para o sucesso digital, oferecendo muito mais que desenvolvimento.
          </p>
        </div>

        {/* Main Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="glass-card border-dark-border hover:border-purple-primary/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <CardContent className="p-8 space-y-6">
                <div
                  className={`inline-flex p-4 rounded-xl ${
                    benefit.color === "purple"
                      ? "bg-purple-gradient"
                      : "bg-gradient-to-br from-cyan-accent to-purple-secondary"
                  }`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div
                    className={`text-lg font-bold ${
                      benefit.color === "purple"
                        ? "text-purple-primary"
                        : "text-cyan-accent"
                    }`}
                  >
                    {benefit.stats}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Nosso Processo Comprovado
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Metodologia testada e aprovada em mais de 200 projetos de sucesso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 rounded-xl border border-purple-primary/20 hover:border-purple-primary/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">
                        {step.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-purple-primary to-cyan-accent opacity-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits List */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              O que você recebe com nossos projetos
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Cada projeto da Konbini Code inclui uma série de benefícios
              exclusivos que garantem o sucesso do seu investimento digital.
            </p>
            <div className="flex items-center space-x-4 p-4 glass-card rounded-lg border border-cyan-accent/20">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <div className="text-lg font-semibold text-white">
                  Garantia de Resultados
                </div>
                <div className="text-sm text-gray-400">
                  Se não estiver satisfeito, devolvemos seu investimento
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 glass-card rounded-lg border border-purple-primary/10 hover:border-purple-primary/30 transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-purple-primary/20">
          {[
            { icon: Heart, number: "98%", label: "Clientes Recomendam" },
            { icon: Zap, number: "48h", label: "Tempo Médio de Resposta" },
            { icon: Trophy, number: "15+", label: "Prêmios Conquistados" },
            { icon: Users, number: "50+", label: "Especialistas na Equipe" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="inline-flex p-3 bg-purple-gradient rounded-lg">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
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
