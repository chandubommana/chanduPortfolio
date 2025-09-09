import { Lightbulb, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Business Planning",
    description: "Understanding requirements and creating strategic solutions tailored to your needs.",
    step: "01"
  },
  {
    icon: Code,
    title: "Design Strategy", 
    description: "Creating intuitive user experiences with modern design patterns and best practices.",
    step: "02"
  },
  {
    icon: Rocket,
    title: "Grow Your Business",
    description: "Delivering scalable applications that drive growth and exceed expectations.",
    step: "03"
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Working <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-text-secondary">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth group text-center relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number Background */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-smooth">
                    {step.step}
                  </div>
                  
                  <CardContent className="pt-8 pb-6 relative">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth">
                      {step.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connector Arrow */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary/30">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-pulse">
                          <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}