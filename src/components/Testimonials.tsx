import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow Solutions",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      content: "Outstanding work on our recommendation system. The ML model increased user engagement by 40% and the deployment was seamless. Their expertise in both data science and engineering is remarkable."
    },
    {
      name: "Mark Rodriguez",
      role: "Data Science Manager",
      company: "DataDriven Inc",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      content: "Delivered a complex NLP solution that exceeded our expectations. The real-time sentiment analysis system processes millions of documents daily with incredible accuracy. A true ML expert."
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      content: "Their computer vision solution revolutionized our quality control process. 99%+ accuracy in defect detection and the system scales beautifully. Professional, reliable, and innovative."
    },
    {
      name: "David Kumar",
      role: "Engineering Lead",
      company: "AI Ventures",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      content: "Impressive MLOps implementation that streamlined our entire ML pipeline. The monitoring and automated retraining capabilities saved us countless hours. Highly recommended for any AI project."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What clients say about working with me on their AI and ML projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card"
            >
              <CardContent className="p-0">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "95%", label: "Project Success Rate" },
            { number: "24/7", label: "Support Available" },
            { number: "5★", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;