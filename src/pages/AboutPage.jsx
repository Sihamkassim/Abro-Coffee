import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import TeamSection from "../components/sections/TeamSection";
import GallerySection from "../components/sections/GallerySection";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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

        {/* Serving Image Overlay (z-10) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-0 h-full w-[40%] z-10 hidden lg:block"
        >
          <img
            src="/serving.png"
            alt=""
            className="w-full h-full object-cover"
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
                About Us
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

      {/* Team Section */}
      <TeamSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Get in touch with us. We'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Visit Our Coffee Shop
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Address</h4>
                    <p className="text-text-secondary">
                      Bole, Addis Ababa
                      <br />
                      Near Atlas Hotel
                      <br />
                      Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Phone</h4>
                    <p className="text-text-secondary">
                      +251 91 234 5678
                      <br />
                      +251 91 876 5432
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Hours</h4>
                    <p className="text-text-secondary">
                      Monday - Friday: 7:00 AM - 10:00 PM
                      <br />
                      Saturday - Sunday: 8:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-bg-card rounded-2xl p-8 shadow-theme"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-button text-button-text font-medium rounded-lg hover:bg-button-hover transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
