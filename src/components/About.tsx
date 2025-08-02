import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code, Database, Zap, GraduationCap, Award, Briefcase, Star } from "lucide-react";
import { useState } from "react";

const About = () => {
  const skills = [
    "Machine Learning", "Deep Learning", "Data Science", "Python",
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "SQL", "Docker", "AWS", "Git", "Neovim", "Linux"
  ];

  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Lead ML initiatives and deploy production models serving millions of users."
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Startup",
      period: "2020 - 2022",
      description: "Built end-to-end ML pipelines and optimized model performance."
    },
    {
      title: "Data Analyst",
      company: "Analytics Co",
      period: "2019 - 2020",
      description: "Performed statistical analysis and created data visualizations."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Technology",
      period: "2017 - 2019",
      gpa: "3.9/4.0"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2013 - 2017",
      gpa: "3.7/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "TensorFlow Developer Certificate",
    "Certified Analytics Professional (CAP)",
    "Deep Learning Specialization - Coursera"
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                My journey into data wasn't just a straight road - it was a thrilling rollercoaster of curiosity, problem-solving, and a 
                deep love for all things AI. I started in Business Information Technology, but the real spark ignited when I realized 
                that behind every dataset lies a hidden story waiting to be uncovered. From predicting loan approvals to 
                tracking vendor products in real-time with AI, I thrive on building models that don't just crunch numbers but 
                make real-world decisions. I've optimized financial forecasting and improved recommendation engines. 
                Essentially, if there's a data puzzle, I'm the person who'll crack it!
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                Beyond the algorithms, I'm committed to mentorship, collaboration, and continuous learning. I'm here to make 
                AI work for you!
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

            {/* Stats Cards */}
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
          </div>

          {/* Detailed Sections with Tabs */}
          <div className="space-y-8">
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Skills
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="space-y-6">
                <div className="flex flex-wrap gap-3">
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
                <Card className="p-6 bg-gradient-card shadow-card">
                  <h4 className="font-semibold mb-3 text-foreground">Core Competencies</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground mb-2">Machine Learning</p>
                      <p className="text-muted-foreground">Supervised & Unsupervised Learning, Deep Learning, NLP</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">Data Engineering</p>
                      <p className="text-muted-foreground">ETL Pipelines, Big Data Processing, Cloud Architecture</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">Programming</p>
                      <p className="text-muted-foreground">Python, SQL, R, JavaScript, Lua (Neovim)</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">Tools & Platforms</p>
                      <p className="text-muted-foreground">AWS, Docker, Kubernetes, Git, MLflow</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-4">
                {experiences.map((exp, index) => (
                  <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs mb-1">
                          {edu.period}
                        </Badge>
                        <p className="text-xs text-muted-foreground">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="certifications" className="space-y-4">
                <div className="grid gap-3">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="p-4 shadow-card hover:shadow-elegant transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                        <p className="font-medium text-foreground">{cert}</p>
                      </div>
                    </Card>
                  ))}
                </div>
                <Card className="p-6 bg-gradient-card shadow-card">
                  <h4 className="font-semibold mb-3 text-foreground">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm committed to staying at the forefront of AI and ML technologies. These certifications 
                    represent my dedication to continuous learning and maintaining expertise in the rapidly 
                    evolving field of data science and machine learning.
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;