import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/common/Button";
import { getCategoryById, getItemsByCategory, contactInfo } from "../data/menuData";

export default function MenuCategoryPage() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const items = getItemsByCategory(categoryId);
  const [activeTab, setActiveTab] = useState("hotDrinks");

  if (!category) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Category Not Found
          </h1>
          <Button to="/menu" variant="primary">
            Back to Menu
          </Button>
        </div>
      </div>
    );
  }

  // Check if this is a category with tabs (hot-cold-drinks)
  const isTabbed = categoryId === "hot-cold-drinks";
  const hasHotDrinks = isTabbed && items.hotDrinks;
  const hasColdDrinks = isTabbed && items.coldDrinks;

  const displayedItems = isTabbed 
    ? (activeTab === "hotDrinks" ? items.hotDrinks : items.coldDrinks)
    : items;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-6"
          >
            <Link
              to="/menu"
              className="inline-flex items-center text-sm sm:text-base text-text-secondary hover:text-accent transition-colors"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
              Back to Menu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 sm:mb-4 tracking-tight">
              {category.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Items Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs for Hot/Cold Drinks */}
          {isTabbed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center flex-wrap"
            >
              {hasHotDrinks && (
                <button
                  onClick={() => setActiveTab("hotDrinks")}
                  className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${
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
                  className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${
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

          {/* Menu Items Display */}
          {displayedItems && displayedItems.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-bg-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
            >
              {isTabbed ? (
                // For Hot/Cold Drinks - show side by side
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                  {/* Column 1 or Left Side */}
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    {displayedItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group"
                      >
                        <div className="p-2.5 sm:p-3 rounded-lg hover:bg-accent/10 transition-colors duration-300">
                          <p className="text-sm sm:text-base font-medium text-text-primary group-hover:text-accent transition-colors">
                            {item.nameEn} <span className="text-text-secondary/70 text-xs sm:text-sm">/ {item.nameAm}</span>
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                // For other categories - show vertically stacked
                <div className="space-y-2 sm:space-y-3 max-w-2xl mx-auto">
                  {displayedItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="p-3 sm:p-4 rounded-lg hover:bg-accent/10 transition-colors duration-300">
                        <h3 className="text-sm sm:text-base font-bold text-text-primary mb-0.5 group-hover:text-accent transition-colors">
                          {item.nameEn}
                        </h3>
                        {item.nameAm && (
                          <p className="text-xs sm:text-sm text-text-secondary font-semibold">
                            {item.nameAm}
                          </p>
                        )}
                        {item.description && (
                          <p className="text-xs sm:text-sm text-text-muted mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-sm sm:text-base">
                No items available in this category yet.
              </p>
            </div>
          )}

          {/* Contact & Order Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 sm:mt-12 lg:mt-16 bg-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-button mb-4 sm:mb-6">
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
        </div>
      </section>
    </div>
  );
}