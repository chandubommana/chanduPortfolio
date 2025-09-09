import { ExternalLink, Github, ShoppingCart, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Local Goods E-commerce Platform",
    description: "A comprehensive React-based e-commerce application featuring dynamic product listings, advanced filtering capabilities, and a fully functional shopping cart system. Implemented responsive design and optimized performance for seamless user experience.",
    icon: ShoppingCart,
    technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Responsive Design"],
    features: [
      "Dynamic product catalog with search and filter",
      "Shopping cart with add/remove functionality",
      "Responsive design for all devices",
      "Local storage for cart persistence",
      "Modern UI with smooth animations"
    ],
    githubUrl: "https://github.com/chandu-bommana/local-goods",
    liveUrl: "https://local-goods-demo.netlify.app",
    status: "Live"
  },
  {
    title: "DDoS Attack Prediction System",
    description: "An advanced machine learning-based cybersecurity project that detects and predicts DDoS attacks in real-time. Features a Django web interface for monitoring and visualization of network traffic patterns and threat analysis.",
    icon: Shield,
    technologies: ["Python", "Django", "Machine Learning", "Scikit-learn", "Pandas", "Chart.js"],
    features: [
      "Real-time DDoS attack detection",
      "Machine learning prediction models",
      "Interactive web dashboard",
      "Network traffic visualization",
      "Alert system for threat notifications"
    ],
    githubUrl: "https://github.com/chandu-bommana/ddos-prediction",
    liveUrl: null,
    status: "Development"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Showcasing my latest work and technical achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <Badge 
                            variant={project.status === "Live" ? "default" : "secondary"}
                            className={project.status === "Live" ? "bg-success text-success-foreground" : ""}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline"
                            className="text-xs bg-accent/30 hover:bg-accent/50 transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-smooth"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
              
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="flex items-center gap-2 bg-orange hover:bg-orange/90 text-white hover:shadow-glow transition-smooth"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Services</span> I Offer
              </h3>
              <p className="text-lg text-text-secondary">
                Professional development services tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Full-Stack Development",
                  description: "Complete MERN & MEAN stack solutions",
                  icon: "🚀",
                  color: "bg-gradient-primary"
                },
                {
                  title: "Frontend Development", 
                  description: "Modern React & Angular applications",
                  icon: "💻",
                  color: "bg-gradient-accent"
                },
                {
                  title: "API Integration",
                  description: "RESTful API development and integration",
                  icon: "🔗",
                  color: "bg-primary/20"
                },
                {
                  title: "Performance Optimization",
                  description: "Application debugging and optimization",
                  icon: "⚡",
                  color: "bg-orange/20"
                }
              ].map((service, index) => (
                <Card 
                  key={index} 
                  className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth text-center group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 relative">
                    <div className={`absolute top-0 left-0 w-full h-1 ${service.color}`} />
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">{service.title}</h4>
                    <p className="text-sm text-text-secondary">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}