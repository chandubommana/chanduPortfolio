import { GraduationCap, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Get to know more about my background and journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio Card */}
            <Card className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <User className="h-6 w-6 text-primary" />
                  Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I'm Chandu Bommana, a passionate Junior Software Engineer with a strong 
                  foundation in Computer Science and Cyber Security. I specialize in building 
                  modern, responsive web applications that deliver exceptional user experiences.
                </p>
                <p>
                  My expertise spans across full-stack development, with proficiency in 
                  cutting-edge technologies like React, Angular, and Node.js. I'm particularly 
                  passionate about creating scalable applications and optimizing performance 
                  to ensure the best possible user experience.
                </p>
                <p>
                  With experience working in agile environments and collaborating with 
                  cross-functional teams, I bring both technical skills and a collaborative 
                  mindset to every project I work on.
                </p>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <h4 className="text-lg text-primary font-medium mb-2">
                    Specialization: Cyber Security
                  </h4>
                  <p className="text-text-secondary mb-2">
                    Institute of Aeronautical Engineering
                  </p>
                  <p className="text-text-muted font-medium">
                    Graduated: 2024
                  </p>
                </div>
                
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm text-text-secondary">
                    <strong>Relevant Coursework:</strong> Data Structures & Algorithms, 
                    Web Development, Database Management Systems, Software Engineering, 
                    Network Security, Cryptography, and Ethical Hacking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}