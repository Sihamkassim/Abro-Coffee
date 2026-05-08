import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutTeaser from "../components/sections/AboutTeaser";
import MenuPreview from "../components/sections/MenuPreview";
import VisitUs from "../components/sections/VisitUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* <AboutTeaser /> */}
      <MenuPreview />
      <VisitUs />
    </>
  );
}
