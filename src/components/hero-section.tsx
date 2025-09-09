import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background with Shapes */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary-glow/30 rounded-full blur-lg animate-bounce" />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-orange/40 rotate-45 blur-md animate-spin" style={{
      animationDuration: '20s'
    }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-4 animate-pulse">
                👋 Hello, I'm
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="text-white">Chandu</span>
                <br />
                <span className="text-orange">Bommana</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
                Junior Software Engineer
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-white/80 max-w-lg mb-8 leading-relaxed">
              I specialize in building responsive, high-performance web applications 
              using modern technologies like React, Angular, and Node.js.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" onClick={() => scrollToSection("#projects")} className="bg-orange hover:bg-orange/90 text-white hover:shadow-glow transition-smooth group px-8 py-3">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" onClick={() => scrollToSection("#contact")} className="border-white/30 hover:border-white transition-smooth px-8 py-3 bg-slate-300 hover:bg-slate-200 text-base text-slate-500">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-white/10 text-white/80 transition-smooth" asChild>
                <a href="https://linkedin.com/in/chandu-bommana" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-white/10 text-white/80 transition-smooth" asChild>
                <a href="https://github.com/chandu-bommana" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-white/10 text-white/80 transition-smooth" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                  <Download className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Profile Image with Modern Styling */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-accent rounded-full blur-lg opacity-50 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img src={profileImage} alt="Chandu Bommana - Professional Profile" className="w-full h-full object-cover" />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange rounded-full flex items-center justify-center shadow-glow animate-bounce">
                  <span className="text-white font-bold">👨‍💻</span>
                </div>
                <div className="absolute -bottom-6 -left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <span className="text-primary font-semibold text-sm">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => scrollToSection("#about")} className="hover:text-orange text-white/80 transition-smooth" aria-label="Scroll to about section">
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>;
}