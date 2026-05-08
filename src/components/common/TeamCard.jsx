import { motion } from "framer-motion";

export default function TeamCard({ name, role, image, bio, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-bg-card rounded-2xl overflow-hidden shadow-theme"
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          {/* <p className="text-accent font-medium">{role}</p> */}
        </div>
      </div>
      {/* {bio && (
        <div className="p-6">
          <p className="text-text-secondary leading-relaxed">{bio}</p>
        </div>
      )} */}
    </motion.div>
  );
}
