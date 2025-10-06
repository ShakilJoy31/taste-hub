// components/AboutUs/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import kitchenImg from "../../../public/about-img-5.webp";
import ingredientsImg from "../../../public/about-img-5.webp";
import diningImg from "../../../public/about-img-5.webp";
import chefImg from "../../../public/about-img-5.webp";
import signatureImg from "../../../public/about-img-5.webp";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";

export default function AboutSection() {
    return (
        <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
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
                        Our Story
                    </span>
                    <Heading className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
                        Crafting Memories Through Cuisine
                    </Heading>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Images Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {/* Main Image */}
                        <div className="col-span-2 relative group">
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={kitchenImg}
                                    alt="Our Kitchen"
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500 rounded-2xl -z-10"></div>
                        </div>

                        {/* Secondary Images */}
                        <div className="relative group">
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={ingredientsImg}
                                    alt="Fresh Ingredients"
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                                />
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={diningImg}
                                    alt="Elegant Dining"
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                                />
                            </div>
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-500 rounded-xl -z-10"></div>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <Paragraph className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Founded in 2010, Bistro Elegante began as a dream to create a space 
                                where culinary artistry meets warm hospitality. What started as a 
                                small neighborhood bistro has blossomed into an award-winning 
                                destination for food enthusiasts.
                            </Paragraph>
                            
                            <Paragraph className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Our philosophy is simple: source the finest local ingredients, 
                                respect traditional techniques while embracing innovation, and 
                                create dishes that tell a story. Every plate that leaves our 
                                kitchen carries the passion and dedication of our entire team.
                            </Paragraph>

                            <div className="bg-gold-50 dark:bg-gold-900/20 p-6 rounded-2xl border-l-4 border-gold-500">
                                <Paragraph className="text-gray-700 dark:text-gray-300 italic text-lg">
                                    &ldquo;Great food is the foundation of genuine happiness. 
                                    We don&apos;t just serve meals; we create memories that 
                                    linger long after the last bite.&rdquo;
                                </Paragraph>
                            </div>
                        </div>

                        {/* Chef Signature */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                        >
                            <div className="relative">
                                <Image
                                    src={chefImg}
                                    alt="Executive Chef"
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover border-4 border-gold-500"
                                />
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                            </div>
                            <div>
                                <Heading className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                                    Marco Bellini
                                </Heading>
                                <Paragraph className="text-gray-600 dark:text-gray-400 text-sm">
                                    Executive Chef & Founder
                                </Paragraph>
                                <Image
                                    src={signatureImg}
                                    alt="Chef Signature"
                                    width={120}
                                    height={40}
                                    className="mt-2 object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}