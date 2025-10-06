// components/AboutUs/StatsSection.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

const stats: StatItem[] = [
  { value: 13, suffix: "+", label: "Years of Excellence", icon: "🎯" },
  { value: 50, suffix: "k+", label: "Happy Customers", icon: "😊" },
  { value: 15, suffix: "", label: "Awards Won", icon: "🏆" },
  { value: 100, suffix: "%", label: "Fresh Ingredients", icon: "🌱" },
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

function StatItemComponent({ stat, index }: { stat: StatItem; index: number }) {
  const count = useCountUp(stat.value, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="text-center group"
    >
      {/* Icon */}
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition duration-300">
        {stat.icon}
      </div>
      
      {/* Number */}
      <Heading className="text-4xl md:text-5xl font-bold text-gold-600 mb-2">
        {count}
        {stat.suffix}
      </Heading>
      
      {/* Label */}
      <Paragraph className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
        {stat.label}
      </Paragraph>
      
      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40px" }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
        viewport={{ once: true }}
        className="h-0.5 bg-gold-500 mx-auto mt-4"
      />
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">
            By The Numbers
          </span>
          <Heading className="mt-4 text-4xl md:text-5xl font-serif font-bold text-white">
            Our Journey in Figures
          </Heading>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItemComponent key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}