import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow mx-auto">
              <img
                src={profileImage}
                alt="Chandu Bommana - Professional Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Chandu</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary mb-6">
              Junior Software Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Specializing in building responsive, high-performance web applications 
              using modern technologies like React, Angular, and Node.js with a focus 
              on delivering seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="hero-gradient text-primary-foreground hover:shadow-glow transition-smooth group"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-smooth"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-smooth"
                asChild
              >
                <a
                  href="https://linkedin.com/in/chandu-bommana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-smooth"
                asChild
              >
                <a
                  href="https://github.com/chandu-bommana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-smooth"
                asChild
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  <Download className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("#about")}
          className="hover:text-primary transition-smooth"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}