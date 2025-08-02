import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "ML model predicting customer churn with 94% accuracy using ensemble methods and feature engineering techniques.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      category: "Machine Learning",
      status: "Completed"
    },
    {
      title: "Real-time Sentiment Analysis",
      description: "NLP system for real-time social media sentiment analysis using transformer models and streaming data processing.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "BERT", "Kafka", "Docker"],
      category: "NLP",
      status: "Completed"
    },
    {
      title: "Computer Vision QA System",
      description: "Automated quality assurance system using computer vision for manufacturing defect detection with 99.2% precision.",
      image: "/api/placeholder/400/250",
      tags: ["PyTorch", "OpenCV", "FastAPI", "AWS"],
      category: "Computer Vision",
      status: "Completed"
    },
    {
      title: "Time Series Forecasting",
      description: "Advanced forecasting system for demand prediction using LSTM networks and statistical methods.",
      image: "/api/placeholder/400/250",
      tags: ["TensorFlow", "LSTM", "Prophet", "MLflow"],
      category: "Time Series",
      status: "In Progress"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system serving 1M+ users with sub-100ms latency.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "TensorFlow", "Redis", "Kubernetes"],
      category: "Recommender Systems",
      status: "Completed"
    },
    {
      title: "Neovim ML Plugin",
      description: "Custom Neovim plugin for ML model development with integrated data exploration and model training capabilities.",
      image: "/api/placeholder/400/250",
      tags: ["Lua", "Python", "Neovim", "Machine Learning"],
      category: "Open Source",
      status: "Ongoing"
    }
  ];

  const categories = ["All", "Machine Learning", "NLP", "Computer Vision", "Time Series", "Open Source"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of my latest work in machine learning, data science, and AI development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-card flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Project Preview</div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <Eye className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;