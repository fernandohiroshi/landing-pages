import { Card, CardContent } from "@/components/ui/card";

export default function Technologies() {
  const techCategories = [
    {
      title: "Frontend",
      color: "purple",
      technologies: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
        { name: "Angular", level: 75 },
      ],
    },
    {
      title: "Backend",
      color: "cyan",
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 80 },
      ],
    },
    {
      title: "Mobile",
      color: "purple",
      technologies: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Ionic", level: 75 },
        { name: "PWA", level: 90 },
        { name: "App Store", level: 85 },
        { name: "Play Store", level: 85 },
      ],
    },
    {
      title: "Database",
      color: "cyan",
      technologies: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 75 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      title: "DevOps",
      color: "purple",
      technologies: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Vercel", level: 95 },
        { name: "GitHub Actions", level: 85 },
        { name: "Nginx", level: 80 },
        { name: "Cloudflare", level: 85 },
      ],
    },
    {
      title: "Design",
      color: "cyan",
      technologies: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 85 },
        { name: "Illustrator", level: 90 },
        { name: "Photoshop", level: 85 },
        { name: "Sketch", level: 80 },
        { name: "Canva", level: 90 },
      ],
    },
  ];

  const topTechnologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind", icon: "💨" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Figma", icon: "🎨" },
    { name: "AWS", icon: "☁️" },
  ];

  return (
    <section
      id="tecnologias"
      className="py-20 lg:py-32 bg-dark-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-r from-purple-primary/10 to-transparent rounded-r-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-l from-cyan-accent/10 to-transparent rounded-l-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-accent/20 border border-cyan-accent/30 rounded-full text-sm text-cyan-200">
            Stack Tecnológico
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold max-w-3xl mx-auto"
            data-konbinicode="tech-title"
          >
            Tecnologias de{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-purple-primary bg-clip-text text-transparent">
              ponta
            </span>
          </h2>

          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            data-konbinicode="tech-description"
          >
            Utilizamos as mais modernas tecnologias e frameworks para criar
            soluções robustas, escaláveis e de alta performance.
          </p>
        </div>

        {/* Top Technologies Banner */}
        <div className="mb-16">
          <div className="glass-card rounded-2xl p-8 border border-purple-primary/20">
            <h3 className="text-xl font-semibold text-center mb-8 text-white">
              Principais Tecnologias
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {topTechnologies.map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-sm text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card border-dark-border hover:border-purple-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8 space-y-6">
                {/* Category Header */}
                <div className="space-y-2">
                  <div
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                      category.color === "purple"
                        ? "bg-purple-primary/20 text-purple-200 border border-purple-primary/30"
                        : "bg-cyan-accent/20 text-cyan-200 border border-cyan-accent/30"
                    }`}
                  >
                    {category.title}
                  </div>
                </div>

                {/* Technology List */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">
                          {tech.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-surface rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            category.color === "purple"
                              ? "bg-purple-gradient"
                              : "bg-gradient-to-r from-cyan-accent to-purple-secondary"
                          }`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "25+", label: "Tecnologias" },
            { number: "15+", label: "Frameworks" },
            { number: "10+", label: "Linguagens" },
            { number: "5+", label: "Cloud Platforms" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
