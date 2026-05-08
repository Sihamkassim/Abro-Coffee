import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-amber-100 text-center"
    >
      <h1 className="text-5xl font-bold text-amber-900 mb-4">
        ☕ Abro Coffee
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Fresh coffee. Cozy vibes. Smooth animations ✨
      </p>

      <Link
        to="/about"
        className="px-6 py-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition"
      >
        Go to About
      </Link>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-stone-900 text-white text-center"
    >
      <h1 className="text-4xl font-bold mb-4">
        About Abro Coffee
      </h1>

      <p className="max-w-md text-gray-300 mb-6">
        A modern coffee shop website built with React, Vite, Tailwind CSS,
        React Router DOM, and Framer Motion.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-amber-600 rounded-xl hover:bg-amber-700 transition"
      >
        Back Home
      </Link>
    </motion.div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}