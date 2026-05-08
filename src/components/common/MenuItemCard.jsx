import { motion } from "framer-motion";

export default function MenuItemCard({
  name,
  description,
  price,
  image,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 shadow-theme hover:shadow-lg hover:bg-bg-secondary/50 transition-all duration-300 group"
    >
      {image && (
        <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-between gap-2">
        <div>
          <h4 className="font-semibold text-text-primary text-base sm:text-lg group-hover:text-accent transition-colors">{name}</h4>
          {description && (
            <p className="text-text-muted text-xs sm:text-sm mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
        {price && <p className="text-accent font-bold text-base sm:text-lg">{price}</p>}
      </div>
    </motion.div>
  );
}
