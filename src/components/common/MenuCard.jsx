import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MenuCard({
  title,
  description,
  image,
  to,
  delay = 0,
  isSelected = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={to}
        className={`group block bg-bg-card rounded-3xl overflow-hidden shadow-theme hover:shadow-2xl transition-all duration-300 border-2 ${
          isSelected ? "border-accent shadow-lg" : "border-transparent hover:border-accent/50"
        }`}
      >
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
          <div className="mt-4 inline-block px-4 py-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
            <p className="text-xs font-semibold text-accent">EXPLORE</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
