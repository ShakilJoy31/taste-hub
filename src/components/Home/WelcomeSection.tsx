"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import pastryImg from "../../../public/product2.jpg"; // replace with your real image
import cakesImg from "../../../public/product2.jpg";  // replace with your real image
import breadImg from "../../../public/product2.jpg";  // replace with your real image

export default function WelcomeSection() {

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom * 0.2, ease: "easeOut" },
  }),
};

  const categories = [
    { title: "PASTRY", img: pastryImg },
    { title: "CAKES", img: cakesImg },
    { title: "BREAD", img: breadImg },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Top Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          className="uppercase text-[13px] tracking-wider text-[#c04a08] mb-3"
        >
          Your local patisserie & café, serving customers for 30 years
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          WELCOME TO PATIO.TIME
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          PatioTime Patisserie continues to innovate and perfect its traditions,
          making pastries, desserts, breads and other delicacies by hand. We are
          committed to providing our customers with fresh baked treats that are
          made with high quality seasonal ingredients.
        </motion.p>

        {/* Discover More */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(192,74,8,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          className="text-sm tracking-wider uppercase text-[#c04a08] border-b border-[#c04a08] pb-1"
        >
          Discover More
        </motion.button>
      </div>

      {/* Category Cards */}
      <div className="container mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i + 4}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className={`flex flex-col items-center ${i === 1 ? "mt-16" : ""}`}
          >
            {/* Image with arch/rounded top */}
            <div className={`overflow-hidden rounded-t-[220px] rounded-b-none shadow-lg`}>
              <Image
                src={cat.img}
                alt={cat.title}
                width={400}
                height={500}
                className="w-full h-[650px] object-cover"
              />
            </div>
            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold tracking-wider text-[#6b1212] ">
              {cat.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}