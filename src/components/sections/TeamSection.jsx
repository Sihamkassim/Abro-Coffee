import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import TeamCard from "../common/TeamCard";

const teamMembers = [
  {
    name: "Abiy Yitbarek",
    role: "Co-Founder & CEO",
    image: "/founders/Abiy Yitbarek.png",
    bio: ".",
  },
  {
    name: "Hana Badege",
    role: "Co-Founder & Creative Director",
    image: "/founders/Hana Badege.png",
    bio: ".",
  },
  {
    name: "Bisrat Kasu",
    role: "Operations Manager",
    image: "/founders/Bisrat Kasu.png",
    bio: "",
  },
  {
    name: "Dawit Mulusew",
    role: "Head of Supply Chain",
    image: "/founders/Dawit Mulusew.png",
    bio: ""},
  {
    name: "Elshaday Kassaye",
    role: "Financial Director",
    image: "/founders/Elshaday.png",
    bio: ".",
  },
  {
    name: "Eyuel Mesfin",
    role: "Marketing & Brand Manager",
    image: "/founders/eyuel Mesfin.png",
    bio: "",
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
