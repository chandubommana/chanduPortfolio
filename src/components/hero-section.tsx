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
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12 lg:py-0">
      {/* Modern Background with Enhanced Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange/10" />
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-orange/20 rounded-full blur-xl sm:blur-2xl animate-pulse" />
      <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 bg-primary-glow/30 rounded-full blur-lg sm:blur-xl animate-bounce" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-orange/40 rotate-45 blur-md sm:blur-lg animate-spin" style={{
      animationDuration: '20s'
    }} />
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 opacity-10 sm:opacity-20 animate-float hidden sm:block">
        <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-10 sm:opacity-20 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-orange" />
      </div>
      <div className="absolute top-3/4 left-1/3 opacity-10 sm:opacity-20 animate-float hidden sm:block" style={{ animationDelay: '2s' }}>
        <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-primary-glow" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-screen py-12 lg:py-0">
          {/* Content Side */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <div className="mb-6 lg:mb-8">
              <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange/20 to-primary/20 backdrop-blur-sm text-orange-400 rounded-full text-xs sm:text-sm font-medium border border-orange/30 animate-pulse">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  Hello, I'm
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Chandu</span>
                <br />
                <span className="bg-gradient-to-r from-orange via-orange-light to-primary bg-clip-text text-transparent animate-pulse">Bommana</span>
              </h1>
              <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-orange to-primary rounded-full"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white/90">
                  Junior Software Engineer
                </h2>
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-orange to-primary rounded-full"></div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed font-light px-4 sm:px-0">
              I specialize in building <span className="text-orange font-medium">responsive</span>, 
              <span className="text-primary-glow font-medium"> high-performance</span> web applications 
              using modern technologies like <span className="text-white font-medium">React</span>, 
              <span className="text-white font-medium">Angular</span>, and 
              <span className="text-white font-medium">Node.js</span>.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0 justify-center lg:justify-start">
              <Button size="lg" onClick={() => scrollToSection("#projects")} className="bg-gradient-to-r from-orange to-orange-light hover:from-orange/90 hover:to-orange-light/90 text-white hover:shadow-glow transition-smooth group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl border-2 border-orange/30 w-full sm:w-auto">
                View My Work
                <ArrowDown className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" onClick={() => scrollToSection("#contact")} className="border-2 border-white/40 hover:border-white/70 transition-smooth px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-full sm:w-auto">
                <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Me
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-gradient-to-r hover:from-orange/20 hover:to-primary/20 text-white/90 transition-smooth w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border border-white/20 hover:border-orange/50 backdrop-blur-sm" asChild>
                <a href="https://www.linkedin.com/in/chandu-bommana-070114256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-gradient-to-r hover:from-orange/20 hover:to-primary/20 text-white/90 transition-smooth w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border border-white/20 hover:border-orange/50 backdrop-blur-sm" asChild>
                <a href="https://github.com/chandubommana" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-gradient-to-r hover:from-orange/20 hover:to-primary/20 text-white/90 transition-smooth w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border border-white/20 hover:border-orange/50 backdrop-blur-sm" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                  <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Side */}
          <div className="relative flex justify-center animate-fade-in order-1 lg:order-2">
            <div className="relative">
              {/* Enhanced Profile Image with Modern Styling */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem]">
                {/* Multiple Gradient Layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange/40 via-primary/30 to-orange/40 rounded-full blur-xl sm:blur-2xl opacity-60 animate-pulse" />
                <div className="absolute inset-1 sm:inset-2 bg-gradient-to-l from-primary-glow/30 to-orange/30 rounded-full blur-lg sm:blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange/10 rounded-full" />
                  <img src={profileImage} alt="Chandu Bommana - Professional Profile" className="w-full h-full object-cover" />
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange to-orange-light rounded-xl sm:rounded-2xl flex items-center justify-center shadow-glow animate-bounce border-2 border-white/20 backdrop-blur-sm">
                  <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-primary font-semibold text-sm sm:text-base">Available for hire</span>
                  </div>
                </div>
                <div className="absolute top-1/4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary/80 to-primary-glow/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg animate-float border border-white/30">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
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