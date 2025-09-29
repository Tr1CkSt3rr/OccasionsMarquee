import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the maximum capacity of your venue?",
    answer: "Our Grand Marquee Hall can accommodate up to 800 guests for reception-style events, while our Intimate Garden Pavilion is perfect for smaller gatherings of 50-200 guests. We also offer our Executive Event Suite for mid-sized events of 100-300 guests.",
  },
  {
    question: "Do you provide catering services?",
    answer: "Yes, we offer comprehensive catering services with custom menus featuring both international and local cuisine. Our experienced chefs work with you to create a menu that perfectly matches your event theme and dietary requirements. We can accommodate various dietary restrictions including vegetarian, vegan, and halal options.",
  },
  {
    question: "Can we bring our own decorations and vendors?",
    answer: "Absolutely! We encourage couples and event organizers to personalize their celebrations. You're welcome to bring your own decorations, photographers, and other vendors. Our event coordination team will work closely with your vendors to ensure smooth setup and execution.",
  },
  {
    question: "What audio/visual equipment is included?",
    answer: "All our venues come equipped with professional sound systems, wireless microphones, and LED lighting systems. Our Executive Event Suite also includes projectors and screens for presentations. Our technical team is available to assist with setup and operation during your event.",
  },
  {
    question: "Is parking available for guests?",
    answer: "Yes, we provide complimentary parking for all guests with spaces for over 200 vehicles. We also offer valet parking services for premium events upon request. Our venue is easily accessible from major roads with clear signage.",
  },
  {
    question: "What are your booking and payment policies?",
    answer: "We require a 25% deposit to secure your date, with the remaining balance due 30 days before your event. We accept various payment methods including bank transfers and credit cards. Our booking team will provide you with a detailed contract outlining all terms and conditions.",
  },
  {
    question: "Do you offer wedding planning services?",
    answer: "Yes, we have experienced wedding coordinators who can assist with full event planning or day-of coordination. Our services include vendor management, timeline creation, and on-site coordination to ensure your special day runs smoothly from start to finish.",
  },
  {
    question: "Can we schedule a venue tour?",
    answer: "Absolutely! We highly recommend scheduling a tour to see our beautiful spaces in person. Tours are available by appointment Monday through Sunday. During your visit, you'll meet with our event coordinator who can answer questions and discuss your specific needs.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about planning your event at Occasions Marquee.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg border shadow-sm"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger 
                className="px-6 py-4 text-left font-semibold text-primary hover:no-underline hover:text-accent transition-colors"
                data-testid={`faq-question-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="px-6 pb-4 text-muted-foreground leading-relaxed"
                data-testid={`faq-answer-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-medium">Call us:</span>
              <a 
                href="tel:03339336641" 
                className="text-accent hover:underline font-semibold"
                data-testid="faq-contact-phone"
              >
                0333 9336641
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-medium">Email:</span>
              <a 
                href="mailto:occasionsmarqueepeshawar@gmail.com" 
                className="text-accent hover:underline font-semibold"
                data-testid="faq-contact-email"
              >
                occasionsmarqueepeshawar@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}