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
      <section className="relative py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              to="/menu"
              className="inline-flex items-center text-text-secondary hover:text-accent transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {category.title}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Items Section */}
      <section className="py-20 lg:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs for Hot/Cold Drinks */}
          {isTabbed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 mb-12 justify-center flex-wrap"
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

          {/* Menu Items Display */}
          {displayedItems && displayedItems.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-bg-secondary rounded-3xl p-8 md:p-12"
            >
              {isTabbed ? (
                // For Hot/Cold Drinks - show side by side
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Column 1 or Left Side */}
                  <div className="flex-1 space-y-4">
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
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
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
        </div>
      </section>
    </div>
  );
}