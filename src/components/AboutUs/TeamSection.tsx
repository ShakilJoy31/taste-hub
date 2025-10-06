// components/AboutUs/TeamSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import { RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";

const team = [
  {
    name: "Marco Bellini",
    role: "Executive Chef & Founder",
    image: "/team-chef-marco.jpg",
    bio: "With over 20 years of culinary experience, Marco brings innovation and tradition to every dish.",
    social: { instagram: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Sophie Chen",
    role: "Head Pastry Chef",
    image: "/team-pastry-sophie.jpg",
    bio: "Sophie's delicate touch transforms simple ingredients into extraordinary desserts.",
    social: { instagram: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "James Wilson",
    role: "Sommelier",
    image: "/team-sommelier-james.jpg",
    bio: "James curates our wine selection to perfectly complement each culinary creation.",
    social: { instagram: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Maria Rodriguez",
    role: "Restaurant Manager",
    image: "/team-manager-maria.jpg",
    bio: "Maria ensures every guest experiences our signature hospitality and attention to detail.",
    social: { instagram: "#", twitter: "#", linkedin: "#" }
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium uppercase tracking-widest text-sm">
            Meet The Team
          </span>
          <Heading className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
            The Faces Behind The Flavors
          </Heading>
          <Paragraph className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our talented team of culinary artists and hospitality professionals 
            work together to create unforgettable dining experiences.
          </Paragraph>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href={member.social.instagram} className="text-white hover:text-gold-500 transition duration-300">
                      <RxInstagramLogo size={24} />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-gold-500 transition duration-300">
                      <RxTwitterLogo size={24} />
                    </a>
                    <a href={member.social.linkedin} className="text-white hover:text-gold-500 transition duration-300">
                      <RxLinkedinLogo size={24} />
                    </a>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-500 rounded-2xl -z-10 group-hover:scale-150 transition duration-300"></div>
              </div>

              {/* Content */}
              <Heading className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {member.name}
              </Heading>
              <Paragraph className="text-gold-600 font-medium text-sm mb-3">
                {member.role}
              </Paragraph>
              <Paragraph className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}