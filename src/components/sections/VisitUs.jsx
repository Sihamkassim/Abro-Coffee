import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function VisitUs() {
  return (
    <section className="py-20 lg:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Visit Us"
          subtitle="Come experience the warmth of Ethiopian hospitality at our coffee shop."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg-card rounded-2xl p-8 shadow-theme"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Location
            </h3>
            <p className="text-text-secondary">
              Abinet, Addis Ababa
              <br />
              Ethiopia
            </p>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-bg-card rounded-2xl p-8 shadow-theme"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Opening Hours
            </h3>
            <div className="text-text-secondary space-y-1">
              <p className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">7:00 AM - 10:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="font-medium">8:00 AM - 11:00 PM</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-card rounded-2xl p-8 shadow-theme"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Contact
            </h3>
            <div className="text-text-secondary space-y-2">
              <p>Delivery: 0952521621</p>
              <p>Pre-Order: 0967317391</p>
              <p className="text-accent">info@abrocoffee.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
