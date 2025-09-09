import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Frontend Intern",
    company: "Ariqt International",
    period: "Dec 2024 – Mar 2025",
    current: true,
    responsibilities: [
      "Developed responsive user interfaces using Angular framework",
      "Integrated RESTful APIs for dynamic data rendering",
      "Optimized application performance and improved load times",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Participated in code reviews and agile development processes"
    ],
    technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "REST APIs"]
  },
  {
    title: "Junior Software Engineer",
    company: "EPAM Systems",
    period: "Jun 2024 – Oct 2024",
    current: false,
    responsibilities: [
      "Built scalable web applications using React and Angular frameworks",
      "Created reusable UI components following design system principles",
      "Improved cross-browser compatibility and performance optimization",
      "Worked closely with backend teams for seamless API integration",
      "Mentored junior developers and conducted technical knowledge sharing sessions"
    ],
    technologies: ["React", "Angular", "Node.js", "TypeScript", "Jest", "Git"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-text-secondary">
              My professional journey in software development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {exp.current && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-success text-success-foreground animate-pulse">
                      Current
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-3 text-2xl mb-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-primary">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2 text-text-secondary">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}