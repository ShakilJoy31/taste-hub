"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCalendarAlt, FaClock } from "react-icons/fa";
import tableBookingBackgroundImage from "../../../public/home-banner3.jpg";
import { useRouter } from "next/navigation";

export default function BookingForm() {
    const router = useRouter();
    const [step, setStep] = useState<"form" | "tables">("form");
    const [partySize, setPartySize] = useState("2 guests");
    const [date, setDate] = useState("2025-03-26");
    const [time, setTime] = useState("18:00");
    const [selectedTable, setSelectedTable] = useState<string | null>(null);

    // Refs for triggering native inputs
    const dateInputRef = useRef<HTMLInputElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("tables");
    };

    const handleSelectTable = (tableId: string) => {
        setSelectedTable(tableId);
        router.push("/checkout");
    };

    // Handler for calendar icon click
    const handleCalendarClick = () => {
        dateInputRef.current?.showPicker();
    };

    // Handler for clock icon click
    const handleClockClick = () => {
        timeInputRef.current?.showPicker();
    };

    const tables = [
        { id: "A1", area: "Window Side", seats: 2 },
        { id: "B3", area: "Near Bar", seats: 4 },
        { id: "C2", area: "Garden View", seats: 2 },
        { id: "D1", area: "Private Corner", seats: 6 },
    ];

    return (
        <div
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    `url(${tableBookingBackgroundImage.src})`,
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <AnimatePresence mode="wait">
                {step === "form" ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative z-10 w-[90%] max-w-3xl bg-black/60 border border-gray-500/40 rounded-lg p-8 backdrop-blur-sm text-white shadow-2xl"
                    >
                        <motion.h2
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center text-2xl font-bold tracking-wide mb-2"
                        >
                            BOOK A TABLE
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-center text-gray-300 mb-8"
                        >
                            Select your details and we&apos;ll try to get the best seats for you.
                        </motion.p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Party Size */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative border-b border-gray-500/50 pb-2 flex items-center justify-between cursor-pointer"
                            >
                                <select
                                    value={partySize}
                                    onChange={(e) => setPartySize(e.target.value)}
                                    className="bg-transparent w-full appearance-none outline-none text-white"
                                >
                                    {["1 people", "2 people", "3 people", "4 people", "5 people", "6 people"].map(
                                        (option) => (
                                            <option
                                                key={option}
                                                value={option}
                                                className="bg-gray-900 text-white"
                                            >
                                                {option}
                                            </option>
                                        )
                                    )}
                                </select>
                                <FaChevronDown className="text-gray-400" />
                            </motion.div>

                            {/* Date */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative border-b border-gray-500/50 pb-2 flex items-center justify-between"
                            >
                                <input
                                    ref={dateInputRef}
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="bg-transparent w-full outline-none text-white opacity-0 absolute left-0 cursor-pointer"
                                />
                                <span className="text-white">{date}</span>
                                <FaCalendarAlt 
                                    className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                                    onClick={handleCalendarClick}
                                />
                            </motion.div>

                            {/* Time */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative border-b border-gray-500/50 pb-2 flex items-center justify-between"
                            >
                                <input
                                    ref={timeInputRef}
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="bg-transparent w-full outline-none text-white opacity-0 absolute left-0 cursor-pointer"
                                />
                                <span className="text-white">{time}</span>
                                <FaClock 
                                    className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                                    onClick={handleClockClick}
                                />
                            </motion.div>

                            {/* Button */}
                            <motion.button
                                whileHover={{
                                    scale: 1.03,
                                    backgroundColor: "#b16a46",
                                    color: "#fff",
                                }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.3 }}
                                type="submit"
                                className="w-full border border-orange-500 text-orange-300 py-3 rounded-sm mt-4 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                FIND A TABLE
                            </motion.button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="tables"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 w-[90%] max-w-3xl bg-black/70 border border-gray-600/40 rounded-lg p-8 backdrop-blur-md text-white shadow-2xl"
                    >
                        <h2 className="text-2xl font-semibold text-center mb-6">
                            Available Tables
                        </h2>

                        <div className="space-y-4">
                            {tables.map((table, index) => (
                                <motion.div
                                    key={table.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{
                                        scale: 1.03,
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                    }}
                                    className={`border border-gray-500/40 rounded-md p-4 flex items-center justify-between cursor-pointer transition ${
                                        selectedTable === table.id
                                            ? "border-orange-500 bg-orange-500/20"
                                            : ""
                                    }`}
                                    onClick={() => handleSelectTable(table.id)}
                                >
                                    <div>
                                        <p className="text-lg font-semibold">Table {table.id}</p>
                                        <p className="text-sm text-gray-400">{table.area}</p>
                                    </div>
                                    <p className="text-sm text-gray-300">{table.seats} seats</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setStep("form")}
                            className="w-full mt-6 border border-gray-500 text-gray-300 py-2 rounded-sm hover:bg-gray-700 transition-colors"
                        >
                            Back
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}