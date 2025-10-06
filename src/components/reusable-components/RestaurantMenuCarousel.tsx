"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { menuData } from "@/utils/constant/menuConstant";



const RestaurantMenuCarousel = () => {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-amber-200 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-amber-800 mb-4 tracking-wider font-serif"
            variants={titleVariants}
          >
            G
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-light text-amber-600 uppercase tracking-[0.3em] font-serif"
            variants={itemVariants}
          >
            Gourmet Experience
          </motion.h2>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="restaurant-swiper"
          >
            {menuData.map((item, index) => (
              <SwiperSlide key={item.id} className="!w-[300px] !h-[450px]">
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Background Image */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Vertical Title */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.h3
                      className="text-white text-4xl font-bold whitespace-nowrap -rotate-90 origin-center tracking-widest font-serif"
                      whileHover={{ scale: 1.1, color: "#fbbf24" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                  </motion.div>

                  {/* Bottom Content */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.h4
                      className="text-white text-xl font-semibold mb-2 font-serif"
                      whileHover={{ scale: 1.05 }}
                    >
                      CARROT ZALAD
                    </motion.h4>
                    <motion.p
                      className="text-amber-200 text-sm mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.subtitle}
                    </motion.p>
                    <motion.p
                      className="text-amber-100 text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    whileHover={{ transition: { duration: 1 } }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </motion.div>

    </div>
  );
};

export default RestaurantMenuCarousel;