import { motion } from "framer-motion";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden rounded-b-3xl">
      {/* Hero Section Background - Ultimate Background (z-0) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero section background.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Coffee Beans Overlay (z-10) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 h-full w-[40%] z-10 hidden lg:block"
      >
        <img
          src="/raw coffee.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Brown Line Overlay (z-15) */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute right-[30%] top-0 h-full w-20 z-15 hidden lg:block"
      >
        <img
          src="/Brown line.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content (z-20) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-lg">
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-button tracking-tight">
                WELCOME
              </span>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-button">,</span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-button tracking-tight italic">
                ABRO
              </span>
              <img
                src="/Abro Logo.png"
                alt=""
                className="h-14 sm:h-16 lg:h-20 w-auto"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-button/95 mb-3 max-w-sm leading-relaxed font-medium"
          >
            Where friendship became vision, and coffee became the beginning of something greater.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-button/85 mb-10 max-w-sm"
          >
            Crafted with passion, culture, and ambition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button to="/menu" variant="primary" size="lg" className="px-12 font-semibold tracking-wide">
              ORDER NOW
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Coffee Mug - Overlapping Brown Line (z-30) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 z-30 w-[35%] lg:w-[30%] max-w-sm pointer-events-none"
      >
        <img
          src="/Coffee mug.png"
          alt="Coffee Mug"
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
