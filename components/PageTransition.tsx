"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { GoldMandala } from "./FloralDecorations";

export const PageTransition = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // Guaranteed fallback transition trigger
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory-100/95 backdrop-blur-md overflow-hidden"
    >
      {/* Expanding Golden Mandala Burst */}
      <motion.div
        initial={{ scale: 0.2, rotate: 0, opacity: 0 }}
        animate={{ scale: 3.5, rotate: 180, opacity: [0, 1, 0.8, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex items-center justify-center pointer-events-none"
      >
        <GoldMandala className="w-96 h-96 text-gold-500" />
      </motion.div>

      {/* Golden Aura Burst */}
      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 2.5, opacity: [0, 0.8, 0] }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gold-400 via-blush-300 to-wine-500 blur-3xl pointer-events-none"
      />
    </motion.div>
  );
};
