import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react";
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
      {/* Modern Background with Enhanced Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange/10" />
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-orange/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/30 rounded-full blur-xl animate-bounce" />
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-orange/40 rotate-45 blur-lg animate-spin" style={{
      animationDuration: '20s'
    }} />
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 opacity-20 animate-float">
        <Code2 className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6 text-orange" />
      </div>
      <div className="absolute top-3/4 left-1/3 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-7 h-7 text-primary-glow" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-left animate-fade-in">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange/20 to-primary/20 backdrop-blur-sm text-orange-400 rounded-full text-sm font-medium border border-orange/30 animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  Hello, I'm
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Chandu</span>
                <br />
                <span className="bg-gradient-to-r from-orange via-orange-light to-primary bg-clip-text text-transparent animate-pulse">Bommana</span>
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange to-primary rounded-full"></div>
                <h2 className="text-2xl md:text-4xl font-semibold text-white/90">
                  Junior Software Engineer
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-l from-orange to-primary rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light">
              I specialize in building <span className="text-orange font-medium">responsive</span>, 
              <span className="text-primary-glow font-medium"> high-performance</span> web applications 
              using modern technologies like <span className="text-white font-medium">React</span>, 
              <span className="text-white font-medium">Angular</span>, and 
              <span className="text-white font-medium">Node.js</span>.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button size="lg" onClick={() => scrollToSection("#projects")} className="bg-gradient-to-r from-orange to-orange-light hover:from-orange/90 hover:to-orange-light/90 text-white hover:shadow-glow transition-smooth group px-10 py-4 text-lg font-semibold rounded-2xl border-2 border-orange/30">
                View My Work
                <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" onClick={() => scrollToSection("#contact")} className="border-2 border-white/40 hover:border-white/70 transition-smooth px-10 py-4 text-lg font-semibold rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
                <Mail className="mr-3 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-gradient-to-r hover:from-orange/20 hover:to-primary/20 text-white/90 transition-smooth w-14 h-14 rounded-2xl border border-white/20 hover:border-orange/50 backdrop-blur-sm" asChild>
                <a href="https://www.linkedin.com/in/chandu-bommana-070114256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-gradient-to-r hover:from-orange/20 hover:to-primary/20 text-white/90 transition-smooth w-14 h-14 rounded-2xl border border-white/20 hover:border-orange/50 backdrop-blur-sm" asChild>
                <a href="https://github.com/chandubommana" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-gradient-to-r hover:from-orange/20 hover:to-primary/20 text-white/90 transition-smooth w-14 h-14 rounded-2xl border border-white/20 hover:border-orange/50 backdrop-blur-sm" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                  <Download className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Side */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Enhanced Profile Image with Modern Styling */}
              <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem]">
                {/* Multiple Gradient Layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange/40 via-primary/30 to-orange/40 rounded-full blur-2xl opacity-60 animate-pulse" />
                <div className="absolute inset-2 bg-gradient-to-l from-primary-glow/30 to-orange/30 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange/10 rounded-full" />
                  <img src={profileImage} alt="Chandu Bommana - Professional Profile" className="w-full h-full object-cover" />
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-orange to-orange-light rounded-2xl flex items-center justify-center shadow-glow animate-bounce border-2 border-white/20 backdrop-blur-sm">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-8 -left-8 px-6 py-3 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-primary font-semibold text-base">Available for hire</span>
                  </div>
                </div>
                <div className="absolute top-1/4 -left-4 w-12 h-12 bg-gradient-to-r from-primary/80 to-primary-glow/80 rounded-xl flex items-center justify-center shadow-lg animate-float border border-white/30">
                  <Sparkles className="w-6 h-6 text-white" />
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