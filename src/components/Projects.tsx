import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "ML model predicting customer churn with 94% accuracy using ensemble methods and feature engineering techniques.",
      image: "/churn.jpeg",
      tags: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      category: "Machine Learning",
      status: "Completed",
      github: "https://github.com/yourusername/customer-churn-prediction",
      demo: "https://churn-prediction-demo.herokuapp.com",
      blog: "https://yourblog.com/customer-churn-prediction-project"
    },
    {
      title: "Real-time Sentiment Analysis",
      description: "NLP system for real-time social media sentiment analysis using transformer models and streaming data processing.",
      image: "/sentiment.jpeg",
      tags: ["Python", "BERT", "Kafka", "Docker"],
      category: "NLP",
      status: "Completed",
      github: "https://github.com/yourusername/realtime-sentiment-analysis",
      demo: "https://sentiment-analyzer-demo.netlify.app",
      blog: "https://yourblog.com/realtime-sentiment-analysis-with-bert"
    },
    {
      title: "Computer Vision QA System",
      description: "Automated quality assurance system using computer vision for manufacturing defect detection with 99.2% precision.",
      image: "/vision.jpeg",
      tags: ["PyTorch", "OpenCV", "FastAPI", "AWS"],
      category: "Computer Vision",
      status: "Completed",
      github: "https://github.com/yourusername/computer-vision-qa",
      demo: "https://cv-qa-system.vercel.app",
      blog: "https://yourblog.com/computer-vision-quality-assurance"
    },
    {
      title: "Time Series Forecasting",
      description: "Advanced forecasting system for demand prediction using LSTM networks and statistical methods.",
      image: "/time_series.jpeg",
      tags: ["TensorFlow", "LSTM", "Prophet", "MLflow"],
      category: "Time Series",
      status: "In Progress",
      github: "https://github.com/yourusername/time-series-forecasting",
      demo: "https://forecast-demo.streamlit.app",
      blog: "https://yourblog.com/lstm-time-series-forecasting"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system serving 1M+ users with sub-100ms latency.",
      image: "/image.jpeg",
      tags: ["Python", "TensorFlow", "Redis", "Kubernetes"],
      category: "Recommender Systems",
      status: "Completed",
      github: "https://github.com/yourusername/recommendation-engine",
      demo: "https://rec-engine-demo.herokuapp.com",
      blog: "https://yourblog.com/scalable-recommendation-engine"
    },
    {
      title: "Neovim ML Plugin",
      description: "Custom Neovim plugin for ML model development with integrated data exploration and model training capabilities.",
      image: "/neovim.jpeg",
      tags: ["Lua", "Python", "Neovim", "Machine Learning"],
      category: "Open Source",
      status: "Ongoing",
      github: "https://github.com/yourusername/neovim-ml-plugin",
      demo: "https://asciinema.org/a/neovim-ml-plugin-demo",
      blog: "https://yourblog.com/neovim-ml-plugin-development"
    },
    {
      title: "Data Pipeline Automation",
      description: "Scalable ETL pipeline processing 10TB+ daily with Apache Airflow and real-time monitoring.",
      image: "/pipeline.jpeg",
      tags: ["Apache Airflow", "Python", "SQL", "Docker"],
      category: "Data Engineering",
      status: "Completed",
      github: "https://github.com/yourusername/data-pipeline-automation",
      demo: "https://airflow-demo.yourdomain.com",
      blog: "https://yourblog.com/building-scalable-data-pipelines"
    },
    {
      title: "Financial Risk Model",
      description: "Deep learning model for credit risk assessment with interpretable feature importance analysis.",
      image: "/financial.jpeg",
      tags: ["Python", "XGBoost", "SHAP", "Pandas"],
      category: "Machine Learning",
      status: "Completed",
      github: "https://github.com/yourusername/financial-risk-model",
      demo: "https://risk-model-demo.streamlit.app",
      blog: "https://yourblog.com/interpretable-financial-risk-modeling"
    }
  ];

  const categories = ["All", "Machine Learning", "NLP", "Computer Vision", "Time Series", "Open Source", "Data Engineering"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Show only first 6 projects initially, or all if expanded
  const displayedProjects = showAllProjects 
    ? filteredProjects 
    : filteredProjects.slice(0, 6);

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
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category);
                setShowAllProjects(false);
              }}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.title}
              className="group overflow-hidden rounded-2xl shadow hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white"
            >
              {/* Project Image */}
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
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
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(project.blog, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
