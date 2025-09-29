import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Utensils, Music, Lightbulb } from "lucide-react";

const venues = [
  {
    name: "Grand Marquee Hall",
    capacity: "500-800 guests",
    description: "Our flagship venue featuring soaring ceilings, crystal chandeliers, and elegant drapery perfect for grand celebrations.",
    features: ["Crystal Chandeliers", "Climate Controlled", "Premium Sound System", "LED Lighting"],
    icon: Users,
  },
  {
    name: "Intimate Garden Pavilion",
    capacity: "50-200 guests",
    description: "A charming outdoor-inspired space with natural lighting and garden views, ideal for intimate ceremonies and receptions.",
    features: ["Garden Views", "Natural Lighting", "Flexible Seating", "Outdoor Access"],
    icon: Lightbulb,
  },
  {
    name: "Executive Event Suite",
    capacity: "100-300 guests",
    description: "Modern and sophisticated space perfect for corporate events, anniversaries, and formal celebrations.",
    features: ["Audio/Visual Equipment", "Business Center", "VIP Lounge", "Catering Kitchen"],
    icon: Music,
  },
];

const services = [
  "Custom décor and floral arrangements",
  "Professional catering services",
  "Wedding coordination and planning",
  "Audio/visual equipment and lighting",
  "Valet parking and guest services",
  "Bridal suite and preparation areas",
];

export default function VenueSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="venues" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-6">
            Our Venue Spaces
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our collection of beautifully designed spaces, each thoughtfully 
            crafted to create the perfect atmosphere for your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {venues.map((venue, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <venue.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary" data-testid={`venue-name-${index}`}>
                  {venue.name}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto" data-testid={`venue-capacity-${index}`}>
                  {venue.capacity}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center" data-testid={`venue-description-${index}`}>
                  {venue.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {venue.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center"
                        data-testid={`venue-feature-${index}-${featureIndex}`}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-semibold text-primary mb-6">
                Complete Event Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                    data-testid={`service-${index}`}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-accent/10 rounded-lg p-8 mb-6">
                <Utensils className="w-12 h-12 text-accent mx-auto lg:mx-0 lg:ml-auto mb-4" />
                <h4 className="text-xl font-semibold text-primary mb-2">
                  Culinary Excellence
                </h4>
                <p className="text-muted-foreground mb-4">
                  Our expert chefs create custom menus featuring international and local cuisine, 
                  perfectly tailored to your event and dietary preferences.
                </p>
              </div>
              <Button 
                size="lg"
                onClick={scrollToContact}
                data-testid="venue-inquire-button"
              >
                Inquire About Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}