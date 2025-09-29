import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Star } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Flexible Capacity",
    description: "Accommodating 50 to 800 guests with customizable seating arrangements",
  },
  {
    icon: Calendar,
    title: "Full Event Planning",
    description: "Complete coordination from décor to catering for stress-free celebrations",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Centrally located with convenient access and ample parking",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Dedicated event coordinators ensuring every detail is perfect",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-6">
            About Occasions Marquee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over a decade, Occasions Marquee has been creating unforgettable moments 
            for families celebrating life's most precious occasions. Our elegant venue 
            combines timeless sophistication with modern amenities to provide the perfect 
            backdrop for your special day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" data-testid="stat-years">10+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" data-testid="stat-events">1000+</div>
              <div className="text-lg opacity-90">Successful Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" data-testid="stat-capacity">800</div>
              <div className="text-lg opacity-90">Maximum Capacity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}