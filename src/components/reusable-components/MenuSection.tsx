"use client";

import { motion } from "framer-motion";
import React from "react";

interface MenuItem {
  name: string;
  description?: string;
  price: string | number;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full mx-auto container py-10 text-gray-900"
    >
      {/* Title */}
      <div className="text-center mb-10 ">
        <motion.div
          className="border-t border-b border-orange-600 inline-block w-full py-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-serif tracking-widest text-black">
            {title.toUpperCase()}
          </h2>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="pb-4 border-b border-transparent hover:border-orange-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="flex justify-between items-center font-serif text-lg text-gray-900">
              <motion.span
                className="relative flex-1"
                whileHover={{ color: "#d97706" }}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-1 "></span>
              </motion.span>

              <motion.span
                className="text-gray-800 font-medium pl-3"
                whileHover={{ scale: 1.1, color: "#b45309" }}
              >
                ${item.price}
              </motion.span>
            </div>

            {item.description && (
              <motion.p
                className="text-sm text-gray-500 mt-1 font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {item.description}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MenuSection;
