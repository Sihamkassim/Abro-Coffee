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
      {/* Hero - Rounded Container Design */}
      <section className="relative py-2 sm:py-4 lg:py-6 bg-bg-primary">
        <div className="mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9]"
          >
            {/* Background Image */}
            <img
              src="/about page hero.png"
              alt="About Abro Coffee"
              className="absolute inset-0 w-full h-full object-cover"
            />

          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A5A40] mb-4 sm:mb-6"
          >
            We invite you to experience<br />Abro Coffee Shop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
          >
            A space where quality coffee, meaningful moments, and warm hospitality come together in a modern Ethiopian atmosphere. A place designed for connection, comfort, and everyday inspiration.
          </motion.p>
          <motion.a
            href="#gallery"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-[#A3B18A] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#8B9A76] transition-colors"
          >
            OUR GALLERY
          </motion.a>
        </div>
      </section>
      {/* Gallery Section */}
      <GallerySection />

      {/* Team Section */}
      <TeamSection />

      

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-bg-primary">
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
              <h3 className="text-2xl font-semibold text-[#3A5A40] mb-6">
                Visit Our Coffee Shop
              </h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A3B18A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#3A5A40]"
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
                    <h4 className="font-medium text-[#3A5A40]">Address</h4>
                    <p className="text-[#588157]">
                      Abinet, in front of chomely noodles
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A3B18A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#3A5A40]"
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
                    <h4 className="font-medium text-[#3A5A40]">Phone</h4>
                    <p className="text-[#588157]">
                      0952521621
                      <br />
                      0967317391
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A3B18A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#3A5A40]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3A5A40]">Instagram</h4>
                    <a
                      href="https://www.instagram.com/abro_coffee?igsh=MWl6eGI3emRkMDhuYg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#588157] hover:text-[#3A5A40] transition-colors"
                    >
                      @abro_coffee
                    </a>
                  </div>
                </div>

                {/* TikTok */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A3B18A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#3A5A40]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3A5A40]">TikTok</h4>
                    <a
                      href="https://www.tiktok.com/@abro_bites"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#588157] hover:text-[#3A5A40] transition-colors"
                    >
                      @abro_bites
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#A3B18A] rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Send Us a Message
              </h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const email = form.email.value;
                  const message = form.message.value;
                  const subject = `Message from ${name}`;
                  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                  window.location.href = `mailto:Hanabadegegebr3@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#3A5A40] text-white font-medium rounded-lg hover:bg-[#2d4531] transition-colors"
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
