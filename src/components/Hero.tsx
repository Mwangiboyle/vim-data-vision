import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Data Scientist
            <span className="block text-primary-glow">Machine Learning</span>
            <span className="block">Engineer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Developing ML models & AI systems that solve real-world problems. 
            A passionate <span className="text-accent-glow font-semibold">Neovim</span> user 
            building the future with code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Python", "TensorFlow", "PyTorch", "Scikit-learn", 
              "Pandas", "NumPy", "Docker", "AWS", "Neovim"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <Button 
            variant="outline" 
            size="lg"
            className="text-blue border-white/30 hover:bg-white/10 backdrop-blur-sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-glow rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent-glow rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-tech-blue rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
