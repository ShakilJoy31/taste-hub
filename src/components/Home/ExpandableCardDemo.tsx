"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import foodImage from '../../../public/delicious-mushroom-risotto-white-bowl-with-spoon.jpg'
import foodImage2 from '../../../public/tareq-lpIq5XJ30fA-unsplash.jpg'
import foodImage3 from '../../../public/wooden-board-with-cooked-meat.jpg'
import foodImage4 from '../../../public/delicious-volcano-chocolate-cake.jpg'
import foodImage5 from '../../../public/front-view-cheese-plate-pita-bread-with-grapes-olives-honey-tomatoes.jpg'
import { usePathname } from "next/navigation";

// Custom hook for outside click detection
const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
};

export function ExpandableCardDemo() {
    const pathname = usePathname();
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            {/* Expanded Card */}
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        {/* Close Button for Mobile */}
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-50"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>

                        {/* Expanded Card Content */}
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div className="flex flex-col flex-1">
                                <div className="flex justify-between items-start p-4">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-sm"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>

                                <div className="pt-4 relative px-4 flex-1">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* Card List */}
            <ul className="w-full mx-auto gap-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="py-4 flex flex-col md:flex-row justify-between items-center hover:border-orange-500 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-transparent dark:hover:border-neutral-700 transition-all px-0 lg:px-2"
                    >
                        <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="text-center md:text-left">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className={`font-medium ${pathname === '/menus' ? 'text-white' : 'text-neutral-800'} dark:text-neutral-200 text-lg`}
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className={`${pathname === '/menus' ? 'text-gray-300' : 'text-neutral-600'} dark:text-neutral-400 text-sm`}
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 transition-colors"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};

const cards = [
  {
    description: "Truffle Risotto",
    title: "Chef’s Signature Mushroom Risotto",
    src: foodImage.src,
    ctaText: "Order Now",
    ctaLink: "/menu",
    content: () => {
      return (
        <p>
          Our <strong>Truffle Risotto</strong> is a decadent Italian classic — creamy
          Arborio rice slow-cooked with wild porcini mushrooms and finished with a drizzle
          of white truffle oil. <br /> <br /> Each bite delivers an earthy, velvety
          richness that celebrates authentic Italian craftsmanship, making it a favorite
          among true food connoisseurs.
        </p>
      );
    },
  },
  {
    description: "Grilled Salmon",
    title: "Norwegian Salmon with Citrus Glaze",
    src: foodImage2.src,
    ctaText: "Order Now",
    ctaLink: "/menu",
    content: () => {
      return (
        <p>
          Our perfectly <strong>grilled Norwegian salmon</strong> is glazed with a
          delicate citrus reduction and served with roasted asparagus and lemon butter
          sauce. <br /> <br /> This dish embodies the balance of freshness and flavor —
          light, aromatic, and irresistibly elegant.
        </p>
      );
    },
  },
  {
    description: "Wagyu Steak",
    title: "Chargrilled Japanese Wagyu Ribeye",
    src: foodImage3.src,
    ctaText: "Reserve",
    ctaLink: "/menu",
    content: () => {
      return (
        <p>
          Our <strong>Japanese Wagyu Ribeye</strong> is the definition of indulgence —
          hand-selected, marbled to perfection, and flame-grilled for that melt-in-the-mouth
          tenderness. <br /> <br /> Paired with truffle mashed potatoes and a red wine jus,
          it’s an experience designed for the ultimate meat lover.
        </p>
      );
    },
  },
  {
    description: "Chocolate Lava Cake",
    title: "Molten Chocolate Fondant",
    src: foodImage4.src,
    ctaText: "Order Dessert",
    ctaLink: "/menu",
    content: () => {
      return (
        <p>
          The <strong>Molten Chocolate Fondant</strong> — a timeless dessert with a gooey,
          molten center made from the finest Belgian chocolate. <br /> <br /> Served with
          vanilla bean ice cream and raspberry coulis, this dessert promises a
          heart-melting finale to your dining experience.
        </p>
      );
    },
  },
  {
    description: "Mediterranean Platter",
    title: "Chef’s Mezze Experience",
    src: foodImage5.src,
    ctaText: "Explore Menu",
    ctaLink: "/menu",
    content: () => {
      return (
        <p>
          Our <strong>Mediterranean Mezze Platter</strong> brings together the vibrant
          flavors of the coast — hummus, baba ganoush, olives, grilled halloumi, and
          freshly baked pita. <br /> <br /> A perfect starter to share, this colorful
          ensemble celebrates health, heritage, and harmony on a single plate.
        </p>
      );
    },
  },
];


export default ExpandableCardDemo;