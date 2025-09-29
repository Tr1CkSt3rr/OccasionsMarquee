import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import femaleTestimonial from "@assets/generated_images/Female_client_testimonial_portrait_1441fce8.png";
import maleTestimonial from "@assets/generated_images/Male_client_testimonial_portrait_8c62bd2b.png";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Bride",
    image: femaleTestimonial,
    rating: 5,
    content: "Occasions Marquee made our wedding day absolutely magical. The attention to detail was incredible, and the staff went above and beyond to ensure everything was perfect. Our guests are still talking about how beautiful the venue looked!",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Event Organizer",
    image: maleTestimonial,
    rating: 5,
    content: "I've organized many corporate events, but the service at Occasions Marquee is unmatched. The flexibility of the space and the professional team made our company anniversary celebration a huge success.",
  },
  {
    id: 3,
    name: "Fatima Khan",
    role: "Mother of Bride",
    image: femaleTestimonial,
    rating: 5,
    content: "From the initial planning to the final moment, the team was professional and accommodating. They helped us create the perfect engagement party for our daughter. Highly recommend!",
  },
  {
    id: 4,
    name: "Omar Malik",
    role: "Groom",
    image: maleTestimonial,
    rating: 5,
    content: "The venue is stunning and the catering was exceptional. Our guests loved the food and the atmosphere. Occasions Marquee truly understands how to make celebrations special.",
  },
  {
    id: 5,
    name: "Aisha Rehman",
    role: "Event Coordinator",
    image: femaleTestimonial,
    rating: 5,
    content: "Working with Occasions Marquee is always a pleasure. Their facilities are top-notch and the staff is incredibly helpful. They make my job as an event coordinator so much easier.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the families and event organizers 
            who have trusted us with their most important celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial.id} className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-primary" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          data-testid={`testimonial-star-${index}-${starIndex}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed" data-testid={`testimonial-content-${index}`}>
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional testimonials in a more compact format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card key={testimonial.id} className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-primary" data-testid={`testimonial-compact-name-${index}`}>
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`testimonial-compact-role-${index}`}>
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            data-testid={`testimonial-compact-star-${index}-${starIndex}`}
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic text-sm leading-relaxed" data-testid={`testimonial-compact-content-${index}`}>
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="text-center mt-12 p-8 bg-muted rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-4">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  data-testid={`overall-star-${index}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary" data-testid="overall-rating">4.9/5</span>
          </div>
          <p className="text-muted-foreground">
            Based on 200+ reviews from satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}