"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0f1d26] text-[#e6e0d0] py-16 border-t border-[#2a3b46] font-light">
      {/* Top Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2a3b46] text-center md:text-left">
        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 md:pr-8 flex flex-col items-center md:items-start"
        >
          <h3 className="tracking-[2px] text-lg mb-3 text-[#c9b48c] ">
            CONTACT US
          </h3>
          <p className="text-sm leading-7 text-[#eaeaea]">
            T. +12 344 0567899 <br />
            M. fidalgo@example.com
          </p>
        </motion.div>

        {/* ADDRESS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="py-6 md:px-8 flex flex-col items-center md:items-start"
        >
          <h3 className="tracking-[2px] text-lg mb-3 text-[#c9b48c]">
            ADDRESS
          </h3>
          <p className="text-sm leading-7 text-[#eaeaea]">
            Piazza Della Signoria, 12 <br />
            21562 · Firenze · Italy
          </p>
        </motion.div>

        {/* OPENING HOURS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-6 md:pl-8 flex flex-col items-center md:items-start"
        >
          <h3 className="tracking-[2px] text-lg mb-3 text-[#c9b48c]">
            OPENING HOURS
          </h3>
          <p className="text-sm leading-7 text-[#eaeaea]">
            Everyday : From 12.30 To 23.00 <br />
            Kitchen Closes At 22.00
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto my-10 h-[1px] bg-[#2a3b46] origin-left"
      />

      {/* Bottom Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[#eaeaea] text-xs gap-6">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 uppercase tracking-[1px]"
        >
          <a href="#" className="hover:text-[#c9b48c] transition-all duration-300">
            Pinterest
          </a>
          <span className="text-[#c9b48c]">◆</span>
          <a href="#" className="hover:text-[#c9b48c] transition-all duration-300">
            Facebook
          </a>
          <span className="text-[#c9b48c]">◆</span>
          <a href="#" className="hover:text-[#c9b48c] transition-all duration-300">
            Instagram
          </a>
        </motion.div>

        {/* Logo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-[GreatVibes] text-[#c9b48c] text-3xl"
        >
          Fidalgo
        </motion.h2>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="tracking-[1px]"
        >
          © 2024 QODE INTERACTIVE, ALL RIGHTS RESERVED
        </motion.p>
      </div>
    </footer>
  );
}
