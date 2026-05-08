import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#A3B18A] text-white rounded-t-3xl mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start"
          >
            <img
              src="/Abro Logo.png"
              alt="Abro Coffee"
              className="h-16 sm:h-20 w-auto brightness-0 invert"
            />
          </motion.div>

          {/* Navigations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-medium text-white/90 mb-4 sm:mb-5 text-sm tracking-wider">NAVIGATIONS</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  ABOUT US
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-medium text-white/90 mb-4 sm:mb-5 text-sm tracking-wider">ABOUT US</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about#gallery"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  ABRO GALLERY
                </Link>
              </li>
              <li>
                <Link
                  to="/about#team"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  FOUNDERS
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-medium text-white/90 mb-4 sm:mb-5 text-sm tracking-wider">CONTACT US</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              {/* Phone */}
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0952521621</span>
              </li>
              <li className="flex items-center gap-2 pl-6">
                <span>0967317391</span>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/abro_coffee?igsh=MWl6eGI3emRkMDhuYg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>abro_coffee</span>
                </a>
              </li>

              {/* TikTok */}
              <li>
                <a
                  href="https://www.tiktok.com/@abro_bites?_r=1&_d=e6i4k55062g4ia&sec_uid=MS4wLjABAAAAns8kZ1zsKbFx177b7i4x23bixZFr10FYAmezv-wfkf-B4WjBEMoyYnjrMS1J3kHW&share_author_id=7626795766233547794&sharer_language=en&source=h5_m&u_code=e3b1kliag5jbfc&timestamp=1778246375&user_id=7132813004710626310&sec_user_id=MS4wLjABAAAABoA0deVUYxV7jdAiFg9KcCJfV2CR3fgHkLAP64fneE9XI1f6WbrufCeQGlytZkNh&item_author_type=2&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7635510518489188116&share_link_id=0082bfc3-c705-4429-96fc-cb4133e40fe7&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb2878&social_share_type=5&enable_checksum=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  <span>abro_bites</span>
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs">Abinet,Infront of Chanoly noodles</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/20 text-center">
          <p className="text-white/80 text-xs sm:text-sm font-medium">
            © 2024 Abro Coffee. Brewed Together. Built to Last.
          </p>
        </div>
      </div>
    </footer>
  );
}
