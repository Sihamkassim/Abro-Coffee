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
      className="flex gap-4 bg-bg-card rounded-xl p-4 shadow-theme hover:shadow-lg transition-shadow duration-300"
    >
      {image && (
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-text-primary text-lg">{name}</h4>
          {description && (
            <p className="text-text-muted text-sm mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
        <p className="text-accent font-bold text-lg">{price}</p>
      </div>
    </motion.div>
  );
}
