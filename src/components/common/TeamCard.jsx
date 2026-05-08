import { motion } from "framer-motion";
import { useState } from "react";

export default function TeamCard({ name, role, image, bio, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-theme hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-accent/10 to-accent/5 group cursor-pointer h-full flex flex-col">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Team Member Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white translate-y-0 transition-all duration-300">
          <h3 className="text-lg sm:text-2xl font-bold mb-1">{name}</h3>
          {/* {role && <p className="text-accent text-xs sm:text-sm font-semibold">{role}</p>} */}
        </div>

        {/* Bio on Hover */}
        {/* {bio && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 flex items-center justify-center p-6 rounded-2xl"
          >
            <p className="text-white text-sm leading-relaxed text-center">{bio}</p>
          </motion.div>
        )} */}
      </div>
    </motion.div>
  );
}
