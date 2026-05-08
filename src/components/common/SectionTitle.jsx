import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <img
          src="/Brown line.png"
          alt=""
          className="h-2 w-auto opacity-60"
        />
        <img
          src="/abro title.png"
          alt={title}
          className="h-8 w-auto"
        />
        <img
          src="/Brown line.png"
          alt=""
          className="h-2 w-auto opacity-60 transform rotate-180"
        />
      </div>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
