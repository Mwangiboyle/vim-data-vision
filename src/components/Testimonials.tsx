import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Kariuki",
      role: "Tech Lead",
      company: "Fintech Kenya Ltd",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      content: "Joseph delivered an exceptional fraud detection system for our mobile banking app. The model achieved 97% accuracy and reduced false positives by 60%. His attention to detail and understanding of the Kenyan market made all the difference."
    },
    {
      name: "Grace Wanjiku",
      role: "Product Manager",
      company: "E-commerce Solutions",
      avatar: "/api/placeholder/60/60", 
      rating: 5,
      content: "Working with Joseph was a game-changer for our recommendation engine. Customer engagement increased by 45% after implementing his ML solution. He explained complex concepts clearly and delivered exactly what we needed."
    },
    {
      name: "David Otieno",
      role: "Data Manager",
      company: "AgriTech Innovations",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      content: "Joseph helped us build a crop yield prediction model that farmers across Kenya now rely on. His understanding of both technology and agriculture made this project incredibly successful. Highly recommended!"
    },
    {
      name: "Mary Njeri",
      role: "Operations Director", 
      company: "Logistics Pro",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      content: "The supply chain optimization model Joseph created saved us 30% in transportation costs. His analytical approach and problem-solving skills are exceptional. Will definitely work with him again."
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
            Real feedback from clients who've seen their businesses transform through AI
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
            { number: "25+", label: "Happy Clients" },
            { number: "96%", label: "Project Success Rate" },
            { number: "Fast", label: "Response Time" },
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