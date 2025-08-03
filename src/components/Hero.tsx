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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Data Scientist
            <span className="block text-primary">Machine Learning</span>
            <span className="block">Engineer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Developing ML models & AI systems that solve real-world problems. 
            A passionate <span className="text-accent font-semibold">Neovim</span> user 
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
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-md text-muted-foreground text-sm font-medium border border-border hover:bg-muted transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button 
            variant="outline" 
            size="lg"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
