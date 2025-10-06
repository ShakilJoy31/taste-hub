"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "../ui/input";
import Button from "../reusable-components/Button";
import { MdPerson, MdEmail, MdPhone, MdLocationOn, MdDone, MdCalendarToday, MdAccessTime, MdGroup } from "react-icons/md";

export default function CheckoutForm() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    specialRequests: ""
  });

  const onCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Complete Your Reservation
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We're excited to host you! Please provide your details to confirm your table booking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Reservation Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-2 md:p-3 lg:p-4 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Reservation Details
              </h2>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl border border-blue-100 dark:border-blue-800"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <MdGroup className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Guests</p>
                    <p className="font-semibold text-gray-800 dark:text-white">4 People</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl border border-green-100 dark:border-green-800"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <MdCalendarToday className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                    <p className="font-semibold text-gray-800 dark:text-white">March 26, 2024</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl border border-purple-100 dark:border-purple-800"
                >
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <MdAccessTime className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                    <p className="font-semibold text-gray-800 dark:text-white">7:30 PM</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl border border-orange-100 dark:border-orange-800"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <MdLocationOn className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Table</p>
                    <p className="font-semibold text-gray-800 dark:text-white">Window View #A12</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-slate-100 dark:from-gray-700 dark:to-slate-800 rounded-2xl">
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  💫 Your table will be held for 15 minutes after the reserved time
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <motion.div
              
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-2 md:p-4 lg:p-8"
            >
              <form onSubmit={onCheckout} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants}>
                    <InputField
                      label="Full Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white pl-8"
                      placeholder="Enter your full name"
                      icon={<MdPerson className="text-gray-400 text-xl" />}
                    />
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <InputField
                      label="Email Address *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white pl-8"
                      placeholder="your@email.com"
                      icon={<MdEmail className="text-gray-400 text-xl" />}
                      
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants}>
                    <InputField
                      label="Phone Number *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white pl-8"
                      placeholder="+1 (555) 123-4567"
                      icon={<MdPhone className="text-gray-400 text-xl" />}
                      
                    />
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <InputField
                      label="City *"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="w-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white pl-8"
                      placeholder="Your city"
                      icon={<MdLocationOn className="text-gray-400 text-xl" />}
                      
                    />
                  </motion.div>
                </div>

                <motion.div variants={inputVariants}>
                  <InputField
                    label="Street Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white pl-8"
                    placeholder="Your street address (optional)"
                    icon={<MdLocationOn className="text-gray-400 text-xl" />}
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Special Requests (if any)
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="w-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white resize-none min-h-[120px] "
                    placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
                    rows={4}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Button
                    type="submit"
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-2xl ${
                      isProcessing || isComplete ? "cursor-not-allowed" : "hover:shadow-3xl"
                    }`}
                    disabled={isProcessing || isComplete || !formData.name || !formData.email || !formData.phone}
                  >
                    <AnimatePresence mode="wait">
                      {isProcessing ? (
                        <motion.div
                          key="processing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center w-full"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                          />
                          <span>Confirming Reservation...</span>
                        </motion.div>
                      ) : isComplete ? (
                        <motion.div
                          key="complete"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center justify-center w-full"
                        >
                          <MdDone className="text-2xl mr-3" />
                          <span>Reservation Confirmed!</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          Confirm Reservation
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>

                {/* Security Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4"
                >
                  🔒 Your information is secure and will only be used for this reservation
                </motion.p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}