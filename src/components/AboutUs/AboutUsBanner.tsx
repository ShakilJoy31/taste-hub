// components/AboutUs/AboutUsBanner.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import bannerImg from "../../../public/about-us-banner.jpg";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bannerImg}
          alt="Bistro Elegante Restaurant Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 font-light tracking-widest text-sm md:text-base uppercase mb-4 block">
            Since 2010
          </span>
          
          <Heading className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Our Culinary
            <span className="block text-gold-500">Journey</span>
          </Heading>
          
          <Paragraph className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Where passion meets perfection. For over a decade, we&apos;ve been crafting 
            unforgettable dining experiences that celebrate local flavors and global inspiration.
          </Paragraph>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center items-center mt-8 space-x-4"
          >
            <div className="w-16 h-px bg-gold-500"></div>
            <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
            <div className="w-16 h-px bg-gold-500"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}