import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Machine Learning", "Deep Learning", "Data Science", "Python",
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "SQL", "Docker", "AWS", "Git", "Neovim", "Linux"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights and building intelligent systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">AI/ML Specialist</h3>
                  <p className="text-muted-foreground">Data Scientist & Engineer</p>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                I'm a highly motivated data scientist with 5+ years of experience in machine learning, 
                data analysis, and AI system development. I specialize in building scalable ML solutions 
                that drive business value and solve complex real-world problems.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                When I'm not training models or analyzing data, you'll find me coding in Neovim, 
                contributing to open-source projects, or exploring the latest developments in AI research. 
                I believe in the power of clean code, efficient workflows, and continuous learning.
              </p>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-neovim" />
                  <span>Neovim Enthusiast</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="w-4 h-4 text-tech-blue" />
                  <span>Big Data Expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Performance Optimizer</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-tech-blue mb-2">15+</div>
                <div className="text-sm text-muted-foreground">ML Models Deployed</div>
              </Card>
              
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-neovim mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Neovim Configured</div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-card shadow-card">
              <h4 className="font-semibold mb-3 text-foreground">What drives me</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm passionate about leveraging cutting-edge technology to solve meaningful problems. 
                Whether it's optimizing algorithms for better performance or crafting the perfect 
                Neovim configuration, I believe in the details that make the difference.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;