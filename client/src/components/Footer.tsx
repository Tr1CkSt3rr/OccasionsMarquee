import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Venues", href: "#venues" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Wedding Planning",
  "Event Coordination", 
  "Catering Services",
  "Audio/Visual Equipment",
  "Venue Decoration",
  "Photography Services",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/occasions-logo.png" 
                alt="Occasions Marquee" 
                className="h-16 w-auto mb-3"
                data-testid="footer-logo"
              />
              <p className="text-primary-foreground/80 leading-relaxed">
                Creating unforgettable memories for over a decade. Your premier 
                destination for elegant events and celebrations in the heart of the city.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
                data-testid="footer-facebook"
              >
                <a href="https://www.facebook.com/enhancerspkk/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
                data-testid="footer-instagram"
              >
                <a href="https://www.instagram.com/occasionsmarquee/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80" data-testid={`footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div className="text-primary-foreground/80">
                  <p>Nasir Bagh Road</p>
                  <p>Peshawar, Pakistan 25000</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <div className="text-primary-foreground/80">
                  <a href="tel:03339336641" className="hover:text-primary-foreground transition-colors" data-testid="footer-phone">
                    0333 9336641
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <div className="text-primary-foreground/80">
                  <a href="mailto:occasionsmarqueepeshawar@gmail.com" className="hover:text-primary-foreground transition-colors" data-testid="footer-email">
                    occasionsmarqueepeshawar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button
                variant="secondary"
                onClick={() => scrollToSection("#contact")}
                className="w-full"
                data-testid="footer-book-tour"
              >
                Book a Tour
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-center md:text-left">
            <p>© 2024 Occasions Marquee. All rights reserved.</p>
            <p className="text-sm mt-1">
              Designed with <Heart className="w-4 h-4 inline text-accent" /> for creating beautiful memories.
            </p>
          </div>

          <div className="flex space-x-6 text-sm">
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-privacy">
              Privacy Policy
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-terms">
              Terms of Service
            </button>
            <button 
              onClick={scrollToTop}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              data-testid="footer-back-to-top"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}