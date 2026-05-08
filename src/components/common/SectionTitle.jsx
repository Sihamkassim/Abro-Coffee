import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-8 sm:mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <img
          src="/Brown line.png"
          alt=""
          className="h-1 sm:h-2 w-auto opacity-60"
        />
        <img
          src="/abro title.png"
          alt={title}
          className="h-6 sm:h-8 w-auto"
        />
        <img
          src="/Brown line.png"
          alt=""
          className="h-1 sm:h-2 w-auto opacity-60 transform rotate-180"
        />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2 sm:mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
