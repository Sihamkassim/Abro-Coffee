import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import MenuCard from "../components/common/MenuCard";
import Button from "../components/common/Button";
import { menuCategories, getItemsByCategory, contactInfo } from "../data/menuData";

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
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden rounded-b-3xl">
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
    className="w-full h-full object-contain" // Changed from object-cover
  />
</motion.div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-button mb-6 tracking-tight">
                Our Menu
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-button/90 mb-6 max-w-lg leading-relaxed"
            >
              We invite you to experience Abro Coffee Shop – a space where quality coffee, meaningful moments, and warm hospitality come together in a modern Ethiopian atmosphere.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-button/80 max-w-lg"
            >
              A place designed for connection, comfort, and everyday inspiration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 lg:py-28 bg-accent/15 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-20 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              ABRO MENU
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Crafted with quality and flavor, our menu brings together signature coffee, refreshing drinks, and satisfying bites made for every moment.
            </p>
            <p className="text-text-secondary mt-4 font-light tracking-widest">
              Crafted. Fresh. Flavorful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {menuCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveTab("hotDrinks");
                }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <MenuCard
                  title={cat.title}
                  description={cat.description}
                  image={cat.image}
                  to="#"
                  delay={index * 0.1}
                  isSelected={selectedCategory === cat.id}
                />
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
              {/* Tabs for Hot/Cold Drinks */}
              {isTabbed && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4 mb-8 justify-center flex-wrap"
                >
                  {hasHotDrinks && (
                    <button
                      onClick={() => setActiveTab("hotDrinks")}
                      className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                        activeTab === "hotDrinks"
                          ? "bg-button text-button-text shadow-lg"
                          : "bg-bg-secondary text-text-primary hover:bg-accent/20"
                      }`}
                    >
                      HOT DRINKS
                    </button>
                  )}
                  {hasColdDrinks && (
                    <button
                      onClick={() => setActiveTab("coldDrinks")}
                      className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                        activeTab === "coldDrinks"
                          ? "bg-button text-button-text shadow-lg"
                          : "bg-bg-secondary text-text-primary hover:bg-accent/20"
                      }`}
                    >
                      COLD DRINKS
                    </button>
                  )}
                </motion.div>
              )}

              {/* Container with Navigation Arrows */}
              <div className="relative -mt-12 pt-12">
                {/* Left Arrow */}
                <button
                  onClick={handlePrevCategory}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-16 lg:-ml-20 flex items-center justify-center w-12 h-12 rounded-full bg-text-primary text-bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-110"
                  aria-label="Previous category"
                >
                  <svg
                    className="w-6 h-6"
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

                {/* Items Container */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-bg-card rounded-3xl p-8 md:p-12 border-4 border-accent/30 shadow-xl"
                >
                  {isTabbed ? (
                    // For Hot/Cold Drinks - show vertically stacked
                    <div className="space-y-4">
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
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    // For other categories - show vertically stacked
                    <div className="space-y-4">
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
                </motion.div>

                {/* Right Arrow */}
                <button
                  onClick={handleNextCategory}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-16 lg:-mr-20 flex items-center justify-center w-12 h-12 rounded-full bg-text-primary text-bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-110"
                  aria-label="Next category"
                >
                  <svg
                    className="w-6 h-6"
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
                className="mt-16 bg-accent rounded-3xl p-8 md:p-12 text-center"
              >
                <h2 className="text-3xl font-bold text-button mb-6">
                  {contactInfo.servicesText}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/10 rounded-xl p-6">
                    <p className="text-button font-semibold mb-2 text-sm">
                      Delivery
                    </p>
                    <p className="text-2xl font-bold text-button">
                      {contactInfo.delivery}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <p className="text-button font-semibold mb-2 text-sm">
                      Pre-Order
                    </p>
                    <p className="text-2xl font-bold text-button">
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
