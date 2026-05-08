import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { useRef, useState } from "react";

const galleryImages = [
  { src: "/Gallery/Gallery.png", alt: "Abro Coffee Interior" },
  { src: "/Gallery/gallery (1).png", alt: "Coffee Shop Ambiance" },
  { src: "/Gallery/gallery (2).png", alt: "Cafe Seating" },
  { src: "/Gallery/gallery (3).png", alt: "Interior Design" },
  { src: "/Gallery/gallery (4).png", alt: "Coffee Preparation" },
  { src: "/Gallery/gallery (5).png", alt: "Dining Experience" },
  { src: "/Gallery/gallery (6).png", alt: "Gallery View" },
  { src: "/Gallery/gallery (7).png", alt: "Abro Atmosphere" },
];

export default function GallerySection() {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Gallery"
          subtitle="Glimpses of the Abro Coffee experience."
        />

        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-56 sm:w-72 md:w-96 h-48 sm:h-64 lg:h-80 relative overflow-hidden rounded-lg sm:rounded-xl group/image cursor-pointer shadow-theme hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <p className="text-white font-medium text-xs sm:text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons - Hidden on Mobile */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-accent/90 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 -translate-x-4 sm:-translate-x-6 hidden sm:block"
            aria-label="Scroll left"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-accent/90 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 translate-x-4 sm:translate-x-6 hidden sm:block"
            aria-label="Scroll right"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-auto max-w-4xl max-h-[85vh] sm:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-accent transition-colors text-3xl sm:text-4xl font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
