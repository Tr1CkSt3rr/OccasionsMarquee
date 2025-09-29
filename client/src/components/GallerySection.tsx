import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@assets/generated_images/Wedding_ceremony_marquee_venue_63ae7407.png";
import heroImage2 from "@assets/generated_images/Wedding_reception_hall_setup_1631a486.png";
import heroImage3 from "@assets/generated_images/Engagement_party_venue_setup_e89effa1.png";

const galleryImages = [
  {
    id: 1,
    src: heroImage1,
    category: "weddings",
    title: "Elegant Wedding Ceremony",
    description: "Beautiful ceremony setup with crystal chandeliers and white draping",
  },
  {
    id: 2,
    src: heroImage2,
    category: "receptions",
    title: "Grand Reception Hall",
    description: "Luxurious reception with elegant table settings and ambient lighting",
  },
  {
    id: 3,
    src: heroImage3,
    category: "engagements",
    title: "Romantic Engagement Party",
    description: "Intimate engagement celebration with romantic decor",
  },
  {
    id: 4,
    src: heroImage1,
    category: "weddings",
    title: "Garden Wedding Setup",
    description: "Outdoor-inspired ceremony with natural lighting",
  },
  {
    id: 5,
    src: heroImage2,
    category: "receptions",
    title: "Evening Reception",
    description: "Sophisticated evening setup with warm lighting",
  },
  {
    id: 6,
    src: heroImage3,
    category: "engagements",
    title: "Intimate Gathering",
    description: "Cozy engagement party in our smaller venue",
  },
];

const categories = [
  { id: "all", name: "All Events" },
  { id: "weddings", name: "Weddings" },
  { id: "receptions", name: "Receptions" },
  { id: "engagements", name: "Engagements" },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "all" || image.category === selectedCategory
  );

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setLightboxImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setLightboxImage(filteredImages[prevIndex].id);
    }
  };

  const currentLightboxImage = filteredImages.find(img => img.id === lightboxImage);

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-6">
            Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our stunning venue transformations and see how we bring your vision to life.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                data-testid={`gallery-filter-${category.id}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-elevate transition-all duration-300"
              onClick={() => openLightbox(image.id)}
              data-testid={`gallery-item-${index}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge variant="secondary" className="mb-2">
                    {categories.find(c => c.id === image.category)?.name}
                  </Badge>
                  <h3 className="font-semibold text-lg" data-testid={`gallery-title-${index}`}>
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/80" data-testid={`gallery-description-${index}`}>
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No images found for the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && currentLightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
            data-testid="lightbox-close"
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
            data-testid="lightbox-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
            data-testid="lightbox-next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="max-w-5xl max-h-full">
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain"
              data-testid="lightbox-image"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2" data-testid="lightbox-title">
                {currentLightboxImage.title}
              </h3>
              <p className="text-white/80" data-testid="lightbox-description">
                {currentLightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}