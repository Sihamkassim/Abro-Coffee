import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function StorySection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Story"
          subtitle="From humble beginnings to becoming a beloved coffee destination in Addis Ababa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-text-primary">Abro Coffee</span>{" "}
                was founded in 2018 with a simple mission: to share the rich
                heritage of Ethiopian coffee with the world. Our founders, Abiy
                Yitbarek and Hana Badege, grew up in the coffee-growing regions
                of Ethiopia and developed a deep appreciation for the art of
                coffee preparation.
              </p>
              <p>
                The word "Abro" in Amharic signifies warmth and welcome – values
                that are at the heart of everything we do. We believe that a cup
                of coffee is more than just a beverage; it's an invitation to
                connect, to share stories, and to create memories.
              </p>
              <p>
                Our coffee beans are sourced directly from small-scale farmers
                in Sidamo, Yirgacheffe, and Harrar regions, ensuring fair trade
                practices and the highest quality. Each batch is carefully
                roasted in small quantities to preserve the unique flavor
                profiles that make Ethiopian coffee world-renowned.
              </p>
              <p>
                Beyond our signature coffee, we've curated a menu that
                celebrates Ethiopian cuisine – from traditional beverages like
                "Tej" and "Tella" to fresh fruit smoothies and hearty wraps
                that have become customer favorites.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Bag of coffee.png"
                alt="Ethiopian Coffee Beans"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-accent/30 rounded-2xl -z-10" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 right-8 bg-bg-card rounded-xl p-4 shadow-lg"
            >
              <p className="text-3xl font-bold text-accent">6+</p>
              <p className="text-sm text-text-secondary">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "20+", label: "Menu Items" },
            { number: "6+", label: "Years Experience" },
            { number: "100%", label: "Ethiopian Sourced" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-bg-card rounded-xl shadow-theme"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
