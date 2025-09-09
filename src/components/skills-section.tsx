import { Code, Database, Wrench, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    color: "text-blue-500"
  },
  {
    title: "Frameworks & Libraries",
    icon: Zap,
    skills: ["React", "Angular", "Node.js", "Express.js", "Bootstrap"],
    color: "text-green-500"
  },
  {
    title: "Databases & APIs",
    icon: Database,
    skills: ["MongoDB", "REST APIs", "GraphQL", "MySQL", "API Integration"],
    color: "text-purple-500"
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git/GitHub", "Jira", "Jenkins", "CI/CD", "Agile/Scrum"],
    color: "text-orange-500"
  }
];

const expertise = [
  "MERN Stack Development",
  "MEAN Stack Development", 
  "Frontend Optimization",
  "Performance Tuning",
  "Responsive Design",
  "Cross-browser Compatibility",
  "API Development",
  "Test-driven Development"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <IconComponent className={`h-8 w-8 ${category.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline"
                          className="text-sm hover:bg-primary/10 hover:border-primary transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expertise Section */}
          <Card className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Core <span className="text-gradient">Expertise</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {expertise.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-smooth"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium text-text-secondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}