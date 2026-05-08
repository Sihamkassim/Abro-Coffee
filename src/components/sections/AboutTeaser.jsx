import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function AboutTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/serving.png"
                alt="Abro Coffee Service"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-bg-secondary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle
              title="About Us"
              subtitle="Discover the story behind Abro Coffee and our passion for authentic Ethiopian coffee culture."
              centered={false}
            />
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Founded with a deep love for Ethiopian coffee heritage, Abro
                Coffee brings you the finest coffee beans sourced directly from
                the highlands of Ethiopia, the birthplace of coffee.
              </p>
              <p>
                Our name "Abro" reflects our commitment to quality and tradition.
                We carefully roast our beans to bring out their unique
                characteristics, offering you an authentic taste of Ethiopian
                coffee culture.
              </p>
              <p>
                Beyond coffee, we celebrate Ethiopian hospitality with our
                traditional drinks, fresh smoothies, and delicious wraps made
                with locally sourced ingredients.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/about" variant="primary">
                Read Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
