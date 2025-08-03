import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Bot, Database, Code, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Custom ML Solutions",
      description: "I build machine learning models that solve real business problems - from fraud detection to recommendation engines. Every model is tailored to your specific needs and data.",
      features: ["Model Development", "Performance Optimization", "A/B Testing", "Model Deployment"],
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description: "Turn your messy data into clear, actionable insights. I specialize in finding patterns that drive business growth and operational efficiency.",
      features: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Business Intelligence"],
      color: "text-tech-blue"
    },
    {
      icon: Bot,
      title: "End-to-End AI Systems",
      description: "From initial concept to production deployment. I handle the entire AI development lifecycle, ensuring your solution is robust and scalable.",
      features: ["NLP Solutions", "Computer Vision", "AI Automation", "Custom AI APIs"],
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI & ML services that have helped Kenyan businesses increase efficiency by 40% on average
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="relative group hover:shadow-elegant transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Database, title: "Data Engineering", desc: "Pipeline design & ETL processes" },
            { icon: Code, title: "MLOps", desc: "ML pipeline automation & monitoring" },
            { icon: Zap, title: "Performance Optimization", desc: "Model optimization & scaling" },
            { icon: Bot, title: "Consulting", desc: "AI strategy & technical guidance" }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.title} className="p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105">
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;