"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { slides } from "@/utils/constant/bannerConstant";


export default function SpecialsShowcase() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return p + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0D2235]">
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between container mx-auto px-4 lg:py-0">
        
        {/* Left Section */}
        <div className="text-white w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0 order-3 lg:order-1 ">
          <AnimatePresence mode="wait">
            <motion.h2
              key={slides[current].id + "-title"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-widest mb-4"
            >
              {slides[current].title}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={slides[current].id + "-desc"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg mb-6 mr-2 lg:mr-0"
            >
              {slides[current].description}
            </motion.p>
          </AnimatePresence>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
              backgroundSize: "300% 300%",
              transition: { 
                scale: { duration: 0.2 },
                background: { duration: 0.5 }
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="relative border px-6 py-3 tracking-wider text-sm overflow-hidden group"
          >
            <span className="relative z-10">VIEW MORE</span>
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%", skewX: "-15deg" }}
              whileHover={{ x: "200%", skewX: "-15deg" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </div>

        {/* Middle Image */}
        <div className="relative w-full lg:w-1/3 h-[300px] sm:h-[400px] lg:h-[500px] block mx-auto order-1 lg:order-2 mb-8 lg:mb-0 pt-20 lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id + "-img"}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.2,
              }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="absolute"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  width={400}
                  height={400}
                  className="rounded-full w-full h-full object-cover object-center shadow-2xl"
                />
                
                {/* Floating particles effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  }}
                  animate={{
                    background: [
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Thumbnails */}
        <div className="flex justify-center lg:justify-end gap-4 w-full lg:w-1/3 order-2 lg:order-3">
          {slides.map((s, index) => (
            <motion.div
              key={s.id}
              onClick={() => {
                setCurrent(index);
                setProgress(0);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full flex items-center justify-center cursor-pointer"
            >
              <motion.div
                whileHover={{
                  boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                  transition: { duration: 0.3 }
                }}
                className="w-full h-full rounded-full p-2"
              >
                <Image
                  src={s.thumb}
                  alt={s.title}
                  width={60}
                  height={60}
                  className="rounded-full w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Progress Ring */}
              {index === current && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-white"
                  style={{
                    clipPath: `inset(${100 - progress}% 0 0 0)`,
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Active indicator glow */}
              {index === current && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0.5)",
                      "0 0 15px rgba(255,255,255,0.8)",
                      "0 0 0px rgba(255,255,255,0.5)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}