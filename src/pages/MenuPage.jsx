import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import MenuCard from "../components/common/MenuCard";
import Button from "../components/common/Button";
import { menuCategories, getItemsByCategory, contactInfo } from "../data/menuData";

// Corner images for each category
const categoryCornerImages = {
  "hot-cold-drinks": [
    { src: "/Abro services/Abro drinks 1.png", position: "top-right", size: "w-32 h-32 sm:w-48 sm:h-48" },
    { src: "/Abro services/Abro coffee.png", position: "bottom-left", size: "w-36 h-36 sm:w-56 sm:h-56" },
    { src: "/cup.png", position: "top-left", size: "w-24 h-24 sm:w-32 sm:h-32" },
  ],
  "smoothies": [
    { src: "/Fruits collection.png", position: "bottom-left", size: "w-40 h-40 sm:w-64 sm:h-64" },
    { src: "/Abro services/smoothies.png", position: "top-right", size: "w-32 h-32 sm:w-48 sm:h-48" },
  ],
  "wraps": [
    { src: "/Abro services/Abro Wrap.png", position: "bottom-left", size: "w-40 h-40 sm:w-64 sm:h-64" },
    { src: "/Abro services/Abro wrap2.png", position: "top-right", size: "w-36 h-36 sm:w-56 sm:h-56" },
  ],
  "Ertib": [
    { src: "/Abro services/Abro ertb.png", position: "bottom-left", size: "w-40 h-40 sm:w-64 sm:h-64" },
    { src: "/Abro services/Abro wrap2.png", position: "top-right", size: "w-32 h-32 sm:w-48 sm:h-48" },
  ],
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("hot-cold-drinks");
  const [activeTab, setActiveTab] = useState("hotDrinks");

  const category = menuCategories.find((cat) => cat.id === selectedCategory);
  const items = getItemsByCategory(selectedCategory);

  const isTabbed = selectedCategory === "hot-cold-drinks";
  const hasHotDrinks = isTabbed && items.hotDrinks;
  const hasColdDrinks = isTabbed && items.coldDrinks;
  const displayedItems = isTabbed
    ? activeTab === "hotDrinks"
      ? items.hotDrinks
      : items.coldDrinks
    : items;

  const handlePrevCategory = () => {
    const currentIndex = menuCategories.findIndex(
      (cat) => cat.id === selectedCategory
    );
    const prevIndex = currentIndex === 0 ? menuCategories.length - 1 : currentIndex - 1;
    setSelectedCategory(menuCategories[prevIndex].id);
    setActiveTab("hotDrinks");
  };

  const handleNextCategory = () => {
    const currentIndex = menuCategories.findIndex(
      (cat) => cat.id === selectedCategory
    );
    const nextIndex = currentIndex === menuCategories.length - 1 ? 0 : currentIndex + 1;
    setSelectedCategory(menuCategories[nextIndex].id);
    setActiveTab("hotDrinks");
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-b-3xl pt-20">
        {/* Hero Section Background - Ultimate Background (z-0) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/hero section background.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Menu Image Overlay (z-10) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-0 h-full w-[40%] z-10 hidden lg:block"
        >
          <img
            src="/menu hero.png"
            alt="Menu Hero"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-button mb-4 sm:mb-6 tracking-tight">
                Our Menu
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-button/90 mb-4 sm:mb-6 max-w-lg leading-relaxed"
            >
              We invite you to experience Abro Coffee Shop – a space where quality coffee, meaningful moments, and warm hospitality come together in a modern Ethiopian atmosphere.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-button/80 max-w-lg"
            >
              A place designed for connection, comfort, and everyday inspiration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-12 sm:py-20 lg:py-28 bg-accent/15 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-12 sm:mt-20 lg:mt-28 mb-16 sm:mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 sm:mb-4 tracking-tight">
              ABRO MENU
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Crafted with quality and flavor, our menu brings together signature coffee, refreshing drinks, and satisfying bites made for every moment.
            </p>
            <p className="text-text-secondary mt-3 sm:mt-4 font-light tracking-widest text-xs sm:text-sm">
              Crafted. Fresh. Flavorful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {menuCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveTab("hotDrinks");
                }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer h-full"
              >
                <div
                  className={`group block bg-bg-card rounded-2xl overflow-hidden shadow-theme hover:shadow-2xl transition-all duration-300 border-2 h-full flex flex-col ${
                    selectedCategory === cat.id ? "border-accent shadow-lg" : "border-transparent hover:border-accent/50"
                  }`}
                >
                  <div className="relative h-32 sm:h-40 overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-1 sm:mb-2 group-hover:text-accent transition-colors line-clamp-1">
                      {cat.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-tight line-clamp-1 flex-grow">
                      {cat.description}
                    </p>
                    <div className="mt-2 inline-block px-2.5 py-1 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                      <p className="text-xs font-semibold text-accent">SELECT</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Menu Items Display */}
          {displayedItems && displayedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={selectedCategory}
            >
              {/* Hot/Cold Drinks Header with Icons */}
              {isTabbed && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8"
                >
                  {/* Cold Drinks Icon & Title */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      <circle cx="12" cy="6" r="1" fill="currentColor" />
                    </svg>
                    <span className="text-sm sm:text-lg font-bold text-text-primary tracking-wide">COLD DRINKS</span>
                  </div>

                  {/* Divider/Icon in middle */}
                  <div className="flex items-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 1v3M10 1v3M14 1v3" />
                    </svg>
                  </div>

                  {/* Hot Drinks Icon & Title */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 1v3M10 1v3M14 1v3" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4s1-2 4-2 4 2 4 2" />
                    </svg>
                    <span className="text-sm sm:text-lg font-bold text-text-primary tracking-wide">HOT DRINKS</span>
                  </div>
                </motion.div>
              )}

              {/* Container with Navigation Arrows */}
              <div className="relative -mt-12 pt-12">
                {/* Left Arrow */}
                <button
                  onClick={handlePrevCategory}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-10 sm:-ml-16 lg:-ml-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-text-primary text-bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-110 shadow-lg"
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

                {/* Items Container with Corner Images */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-bg-card rounded-3xl p-8 md:p-12 border-4 border-accent/30 shadow-xl overflow-visible"
                >
                  {/* Corner Images */}
                  <AnimatePresence mode="wait">
                    {categoryCornerImages[selectedCategory]?.map((img, idx) => (
                      <motion.img
                        key={`${selectedCategory}-${img.src}`}
                        src={img.src}
                        alt=""
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className={`absolute ${img.size} object-contain pointer-events-none z-10 drop-shadow-lg ${
                          img.position === "top-right"
                            ? "-top-8 -right-8 sm:-top-12 sm:-right-12"
                            : img.position === "bottom-left"
                            ? "-bottom-8 -left-8 sm:-bottom-12 sm:-left-12"
                            : img.position === "top-left"
                            ? "-top-6 -left-6 sm:-top-10 sm:-left-10"
                            : "-bottom-6 -right-6 sm:-bottom-10 sm:-right-10"
                        }`}
                      />
                    ))}
                  </AnimatePresence>

                  {/* Menu Items Content */}
                  <div className="relative z-20">
                    {isTabbed ? (
                      // For Hot/Cold Drinks - Two Column Layout with Divider
                      <div className="flex gap-4 sm:gap-8 relative">
                        {/* Cold Drinks Column */}
                        <div className="flex-1 text-left">
                          <div className="space-y-2 sm:space-y-3">
                            {items.coldDrinks?.map((item, index) => (
                              <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group"
                              >
                                <div className="py-2 px-2 sm:px-4 rounded-lg hover:bg-accent/10 transition-colors duration-300">
                                  <p className="text-sm sm:text-base font-medium text-text-primary group-hover:text-accent transition-colors">
                                    {item.nameEn} <span className="text-text-secondary/70">/ {item.nameAm}</span>
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-px bg-accent/30 self-stretch mx-2"></div>

                        {/* Hot Drinks Column */}
                        <div className="flex-1 text-left">
                          <div className="space-y-2 sm:space-y-3">
                            {items.hotDrinks?.map((item, index) => (
                              <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group"
                              >
                                <div className="py-2 px-2 sm:px-4 rounded-lg hover:bg-accent/10 transition-colors duration-300">
                                  <p className="text-sm sm:text-base font-medium text-text-primary group-hover:text-accent transition-colors">
                                    {item.nameEn} <span className="text-text-secondary/70">/ {item.nameAm}</span>
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // For other categories - show vertically stacked centered
                      <div className="space-y-4 text-center">
                        {displayedItems.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group"
                          >
                            <div className="p-4 rounded-xl hover:bg-accent/10 transition-colors duration-300">
                              <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                                {item.nameEn}
                              </h3>
                              {item.nameAm && (
                                <p className="text-sm text-text-secondary font-semibold">
                                  {item.nameAm}
                                </p>
                              )}
                              {item.description && (
                                <p className="text-sm text-text-muted">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Right Arrow */}
                <button
                  onClick={handleNextCategory}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-10 sm:-mr-16 lg:-mr-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-text-primary text-bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-110 shadow-lg"
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

              {/* Contact & Order Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 sm:mt-12 lg:mt-16 bg-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-button mb-4 sm:mb-5">
                  {contactInfo.servicesText}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-5 sm:mb-6">
                  <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-5">
                    <p className="text-button font-semibold mb-2 text-xs sm:text-sm">
                      Delivery
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-button">
                      {contactInfo.delivery}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-5">
                    <p className="text-button font-semibold mb-2 text-xs sm:text-sm">
                      Pre-Order
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-button">
                      {contactInfo.preorder}
                    </p>
                  </div>
                </div>
                <Button to="/" variant="secondary">
                  Back to Home
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
