import SectionTitle from "../common/SectionTitle";
import MenuCard from "../common/MenuCard";
import Button from "../common/Button";
import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "Hot & Cold Drinks",
    description:
      "From classic Ethiopian coffee to refreshing cold beverages, find your perfect drink.",
    image: "/Hot and cold drinks.png",
    to: "/menu/hot-cold-drinks",
  },
  {
    title: "Smoothies",
    description:
      "Fresh, fruity, and refreshing smoothies made with natural ingredients.",
    image: "/Abro smoothies.png",
    to: "/menu/smoothies",
  },
  {
    title: "Wraps",
    description:
      "Delicious wraps filled with fresh ingredients, perfect for a quick bite.",
    image: "/wraps.png",
    to: "/menu/wraps",
  },
  {
    title: "Ethiopian Traditional",
    description:
      "Experience authentic Ethiopian beverages and traditional coffee ceremony.",
    image: "/Abro ertb.png",
    to: "/menu/ethiopian-traditional",
  },
];

export default function MenuPreview() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Menu"
          subtitle="Explore our carefully curated selection of drinks, smoothies, and delicious wraps."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <MenuCard
              key={category.title}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button to="/menu" variant="primary" size="lg">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
