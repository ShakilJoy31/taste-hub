"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  description?: string;
  price: string | number;
  image?: string; // Optional image for each menu item
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  const pathname = usePathname();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full mx-auto container text-gray-900 ${pathname === '/menus' ? 'bg-black/70 rounded-t-2xl' : ''}`}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <motion.div
          className="border-b border-orange-600 inline-block w-full py-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-2xl font-serif tracking-widest ${pathname === '/menus' ? 'text-white' : 'text-black'}`}>
            {title.toUpperCase()}
          </h2>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="space-y-6 px-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="pb-4 border-b border-transparent hover:border-orange-200 hover:cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="flex gap-4">
              {/* Image on the left */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden ">
                  <Image
                    src={item.image || "/default-food-image.jpg"}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              {/* Content on the right */}
              <div className="flex-1 min-w-0">
                <div className={`flex justify-between items-start font-serif text-lg ${pathname === '/menus' ? 'text-orange-500' : 'text-gray-900'}`}>
                  <motion.span
                    className="relative flex-1 pr-2"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-1"></span>
                  </motion.span>

                  <motion.span
                    className="font-medium flex-shrink-0">
                    ৳ {item.price}
                  </motion.span>
                </div>

                {item.description && (
                  <motion.p
                    className={`text-sm ${pathname === '/menus' ? 'text-gray-300' : 'text-gray-500'} mt-1 font-sans`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MenuSection;