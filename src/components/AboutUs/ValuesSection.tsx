// components/AboutUs/ValuesSection.tsx
"use client";

import { motion } from "framer-motion";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import { ForkKnife, Heart, Star, Users } from "lucide-react";

const values = [
  {
    icon: ForkKnife,
    title: "Culinary Excellence",
    description: "We push boundaries while respecting tradition, creating innovative dishes that surprise and delight."
  },
  {
    icon: Heart,
    title: "Passion & Love",
    description: "Every dish is prepared with genuine love and care, ensuring an unforgettable dining experience."
  },
  {
    icon: Star,
    title: "Quality First",
    description: "We source only the finest ingredients from local farmers and trusted suppliers worldwide."
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in building relationships with our guests, team, and local community."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Our Philosophy
          </span>
          <Heading className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
            The Values We Serve With
          </Heading>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition duration-300">
                  <value.icon size={32} className="text-white" />
                </div>
                <div className="absolute -inset-4 bg-gold-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              </div>

              {/* Content */}
              <Heading className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {value.title}
              </Heading>
              <Paragraph className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}