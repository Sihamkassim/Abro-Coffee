import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Hot and Cold Drinks",
    image: "/Abro services/Hot and cold drinks.png",
    to: "/menu/hot-cold-drinks",
  },
  {
    id: 2,
    title: "ABRO ERTIB",
    image: "/Abro services/Abro ertb.png",
    to: "/menu/ethiopian-traditional",
  },
  {
    id: 3,
    title: "ABRO WRAP",
    image: "/Abro services/Abro Wrap.png",
    to: "/menu/wraps",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            What We Offer
          </h2>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={service.to}>
                <div className="group relative bg-accent rounded-3xl p-8 min-h-96 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105">
                  {/* Background Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Image Container */}
                  <motion.div
                    className="flex-1 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-56 w-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl font-bold text-button mb-6 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Explore Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-8 py-3 bg-button text-white font-bold rounded-lg hover:bg-button-hover transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
                    >
                      EXPLORE
                    </motion.button>
                  </motion.div>

                  {/* Decorative Corner Element on Hover */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            At Abro Coffee Shop, coffee is more than a drink – it's a space where
            tradition meets modernity, where every cup tells a story of Ethiopian
            heritage and craftsmanship. Whether you're here for our signature
            hot or cold drinks, authentic Ethiopian dishes, or delicious wraps,
            we invite you to experience the warmth of Abro hospitality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
