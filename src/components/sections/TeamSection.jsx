import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import TeamCard from "../common/TeamCard";

const teamMembers = [
  {
    name: "Abiy Yitbarek",
    role: "Co-Founder & CEO",
    image: "/founders/Abiy Yitbarek.png",
    bio: "With over 15 years of experience in the coffee industry, Abiy brings his deep knowledge of Ethiopian coffee cultivation and business acumen to Abro Coffee. His vision is to put Ethiopian coffee on the global map while supporting local farmers.",
  },
  {
    name: "Hana Badege",
    role: "Co-Founder & Creative Director",
    image: "/founders/Hana Badege.png",
    bio: "Hana's background in hospitality and her passion for Ethiopian culture shape the warm, welcoming atmosphere at Abro. She oversees the customer experience and curates our menu of traditional and modern offerings.",
  },
  {
    name: "Bisrat Kasu",
    role: "Operations Manager",
    image: "/founders/Bisrat Kasu.png",
    bio: "Bisrat brings operational excellence and strategic planning to Abro Coffee. With extensive experience in managing coffee businesses, she ensures smooth daily operations and sustainable growth.",
  },
  {
    name: "Dawit Mulusew",
    role: "Head of Supply Chain",
    image: "/founders/Dawit Mulusew.png",
    bio: "Dawit's expertise in sourcing premium Ethiopian coffee beans directly from local farmers ensures we deliver only the finest quality to our customers while supporting our communities.",
  },
  {
    name: "Elshaday",
    role: "Financial Director",
    image: "/founders/Elshaday.png",
    bio: "Elshaday manages the financial strategy and sustainability of Abro Coffee, ensuring responsible growth and reinvestment in our team and community initiatives.",
  },
  {
    name: "Eyuel Mesfin",
    role: "Marketing & Brand Manager",
    image: "/founders/eyuel Mesfin.png",
    bio: "Eyuel shapes the Abro Coffee brand identity and marketing vision, connecting our coffee culture to a wider audience while staying true to our Ethiopian roots.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet The Team"
          subtitle="The passionate individuals behind Abro Coffee's success."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} {...member} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
