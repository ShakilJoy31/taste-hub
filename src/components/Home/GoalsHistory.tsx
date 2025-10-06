"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import barImage from "../../../public/Product1.jpg";
import dishImage from "../../../public/Product1.jpg";

export default function GoalsHistory() {
  return (
    <section className="bg-[#0D2235] pt-16 lg:pt-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-tl-[250px] overflow-hidden shadow-xl"
        >
          <Image
            src={barImage}
            alt="Bar Interior"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side Text */}
        <div className="flex flex-col gap-12">
          {/* Goals & History */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white text-3xl md:text-4xl tracking-widest font-light mb-6"
            >
              OUR GOALS & HISTORY
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed mb-6 max-w-xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </motion.p>

            {/* Button with hover effect */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-6 py-2 text-sm tracking-wider text-white relative overflow-hidden rounded-md"
            >
              <span className="relative z-10">READ MORE</span>
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 opacity-30 z-0"
              />
            </motion.button>
          </div>

          {/* Lower Dish & Opening Hours */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Dish Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="overflow-hidden shadow-lg"
            >
              <Image
                src={dishImage}
                alt="Dish"
                width={400}
                height={400}
                className="w-72 h-80 object-cover"
              />
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h4 className="uppercase text-sm tracking-wider mb-4 text-gray-300">
                Opening Hours
              </h4>
              <p className="text-sm md:text-base text-gray-100">
                Mon — thu: 10 am — 01 am
                <br />
                Fri — sun: 10 am — 020 am
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
