import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "O Futuro do Desenvolvimento Web em 2024",
      excerpt:
        "Descubra as tendências e tecnologias que estão moldando o desenvolvimento web moderno.",
      image:
        "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      author: "Equipe Konbini",
      date: "15 Jan 2024",
      readTime: "5 min",
      category: "Desenvolvimento",
      featured: true,
    },
    {
      id: 2,
      title: "Design System: Como Criar Consistência Visual",
      excerpt:
        "Aprenda a construir um design system eficiente para sua empresa.",
      image: "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg",
      author: "Design Team",
      date: "12 Jan 2024",
      readTime: "7 min",
      category: "Design",
      featured: false,
    },
    {
      id: 3,
      title: "Performance Web: Técnicas Avançadas de Otimização",
      excerpt:
        "Estratégias práticas para acelerar seu site e melhorar a experiência do usuário.",
      image:
        "https://images.pexels.com/photos/4069293/pexels-photo-4069293.jpeg",
      author: "Tech Lead",
      date: "10 Jan 2024",
      readTime: "6 min",
      category: "Performance",
      featured: false,
    },
    {
      id: 4,
      title: "SEO em 2024: Estratégias que Realmente Funcionam",
      excerpt:
        "Guia completo sobre as melhores práticas de SEO para ranquear melhor no Google.",
      image: "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg",
      author: "Marketing Team",
      date: "08 Jan 2024",
      readTime: "8 min",
      category: "SEO",
      featured: false,
    },
    {
      id: 5,
      title: "Apps Mobile: React Native vs Flutter",
      excerpt:
        "Comparativo completo entre as principais tecnologias de desenvolvimento mobile.",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      author: "Mobile Team",
      date: "05 Jan 2024",
      readTime: "10 min",
      category: "Mobile",
      featured: false,
    },
    {
      id: 6,
      title: "UX/UI: Criando Interfaces que Convertem",
      excerpt: "Princípios de design que transformam visitantes em clientes.",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      author: "UX Team",
      date: "03 Jan 2024",
      readTime: "6 min",
      category: "UX/UI",
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section
      id="blog"
      className="py-20 lg:py-32 bg-dark-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-gradient-to-b from-purple-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-1/3 h-1/2 bg-gradient-to-t from-cyan-accent/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-accent/20 border border-cyan-accent/30 rounded-full text-sm text-cyan-200">
            Blog & Insights
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold max-w-3xl mx-auto"
            data-konbinicode="blog-title"
          >
            Conhecimento e{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-purple-primary bg-clip-text text-transparent">
              insights
            </span>{" "}
            compartilhados
          </h2>

          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            data-konbinicode="blog-description"
          >
            Mantenha-se atualizado com as últimas tendências em tecnologia,
            design e desenvolvimento web.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Card className="glass-card border-purple-primary/20 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    data-konbinicode={`blog-featured-image`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-gradient text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                <CardContent className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="px-3 py-1 bg-purple-primary/20 text-purple-200 rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>

                      <Button className="bg-purple-gradient hover:scale-105 transition-transform text-white">
                        Ler Artigo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.slice(0, 6).map((post) => (
            <Card
              key={post.id}
              className="group glass-card border-dark-border hover:border-purple-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-konbinicode={`blog-image-${post.id}`}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-accent/20 backdrop-blur-sm text-cyan-200 text-xs font-medium rounded-full border border-cyan-accent/30">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-purple-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-purple-primary/50 text-purple-200 hover:bg-purple-primary/10 hover:scale-105 transition-all duration-200"
          >
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
