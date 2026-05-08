import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

// Featured categories with their items and center images
const featuredCategories = [
  {
    id: "hot-cold-drinks",
    title: "ABRO DRINKS",
    centerImage: "/Abro services/Abro coffee.png",
    leftItems: [
      { name: "TEA", subtext: "ሻይ" },
      { name: "CAPPUCCINO", subtext: "ካፑቺኖ" },
      { name: "MACCHIATO", subtext: "ማኪያቶ" },
      { name: "LATTE", subtext: "ላቴ" },
    ],
    rightItems: [
      { name: "MOJITO", subtext: "ሞሆጆ" },
      { name: "JUICE", subtext: "ጁስ" },
      { name: "SMOOTHIE", subtext: "ስሙዚ" },
      { name: "HOT CHOCOLATE", subtext: "ሆት ቸኮሌት" },
    ],
  },
  {
    id: "wraps",
    title: "ABRO WRAP",
    centerImage: "/Abro services/Abro wrap2.png",
    leftItems: [
      { name: "CHICKEN WRAP", subtext: "ዶሮ ራፕ" },
      { name: "FISH WRAP", subtext: "ዓሳ ራፕ" },
    ],
    rightItems: [
      { name: "BEEF WRAP", subtext: "ስጋ ራፕ" },
      { name: "VEGGIE WRAP", subtext: "አትክልት ራፕ" },
    ],
  },
  {
    id: "Ertib",
    title: "ABRO ERTIB",
    centerImage: "/Abro services/Abro ertb.png",
    leftItems: [
      { name: "NORMAL ERTIB", subtext: "ኖርማል እርጥብ" },
      { name: "FISH-ERTIB", subtext: "እርጥብ በዓሳ" },
      { name: "BEEF ERTIB", subtext: "እርጥብ በስጋ" },
    ],
    rightItems: [
      { name: "EGG-ERTIB", subtext: "እርጥብ በእንቁላል" },
      { name: "SPECIAL ERTIB", subtext: "ስፔሻል እርጥብ" },
      { name: "SANDWICH", subtext: "ሳንዱች" },
    ],
  },
];

export default function MenuPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentCategory = featuredCategories[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? featuredCategories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === featuredCategories.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Menu"
          subtitle="Explore our carefully curated selection of drinks, smoothies, and delicious wraps."
        />

        {/* Carousel Container */}
        <div className="mt-8 sm:mt-12">
          {/* Main Content Area */}
          <div className="bg-bg-primary rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-10 min-h-[380px] sm:min-h-[500px] lg:min-h-[600px] flex flex-col justify-center overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                {/* Category Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-6 sm:mb-8 bg-button text-button-text px-6 sm:px-8 py-2 sm:py-3 rounded-xl">
                  {currentCategory.title}
                </h3>

                {/* Items + Center Image Layout */}
                <div className="flex items-center justify-center w-full gap-1 sm:gap-4 lg:gap-8 overflow-x-auto pb-2">
                  {/* Left Items */}
                  <div className="flex flex-col gap-1.5 sm:gap-3 lg:gap-6 flex-shrink-0">
                    {currentCategory.leftItems.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-button text-button-text px-2 sm:px-6 lg:px-8 py-1 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl text-center min-w-[90px] sm:min-w-[140px] lg:min-w-[180px]"
                      >
                        <p className="font-bold text-[9px] sm:text-sm lg:text-base leading-tight">
                          {item.name}
                        </p>
                        <p className="text-[7px] sm:text-xs lg:text-sm opacity-80 mt-0.5">
                          {item.subtext}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Center Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={currentCategory.centerImage}
                      alt={currentCategory.title}
                      className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Right Items */}
                  <div className="flex flex-col gap-1.5 sm:gap-3 lg:gap-6 flex-shrink-0">
                    {currentCategory.rightItems.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-button text-button-text px-2 sm:px-6 lg:px-8 py-1 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl text-center min-w-[90px] sm:min-w-[140px] lg:min-w-[180px]"
                      >
                        <p className="font-bold text-[9px] sm:text-sm lg:text-base leading-tight">
                          {item.name}
                        </p>
                        <p className="text-[7px] sm:text-xs lg:text-sm opacity-80 mt-0.5">
                          {item.subtext}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {featuredCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-button scale-125"
                    : "bg-accent/40 hover:bg-accent/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows Below */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-button hover:bg-button-hover text-button-text flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous category"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-button hover:bg-button-hover text-button-text flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next category"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button to="/menu" variant="primary" size="lg">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
