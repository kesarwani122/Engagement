"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { GoldMandala, FloralCorner } from "./FloralDecorations";

interface CurtainOpeningProps {
  onOpen: () => void;
}

export const CurtainOpening = ({ onOpen }: CurtainOpeningProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    // Directly trigger audio playback from user click gesture
    const audio = document.querySelector("audio");
    if (audio) {
      audio.play().catch(() => { });
    }
    // Complete curtain opening after animation
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 z-50 overflow-hidden bg-[#24040d] cursor-pointer select-none flex items-center justify-center"
    >
      {/* Background layer visible behind curtains as they open */}
      <div className="absolute inset-0 bg-paper-texture flex items-center justify-center">
        <GoldMandala className="w-96 h-96 opacity-30 text-gold-500 animate-spin-slow" />
      </div>

      {/* LEFT CURTAIN */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-[#2a040e] via-[#4a081a] to-[#3a0614] shadow-[15px_0_35px_rgba(0,0,0,0.7)] z-20 flex flex-col justify-between overflow-hidden border-r-2 border-gold-400/60"
      >
        {/* Velvet Vertical Pleat Highlights */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(255,215,0,0.03)_28px,rgba(0,0,0,0.25)_56px)] pointer-events-none opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Left Floral Corner Motif */}
        <FloralCorner position="top-left" className="opacity-80" />
        <FloralCorner position="bottom-left" className="opacity-60" />

        {/* Gold Border Trim Along Inner Edge */}
        <div className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-l from-gold-400 via-gold-300 to-gold-600 opacity-90 shadow-gold" />
      </motion.div>

      {/* RIGHT CURTAIN */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-[#2a040e] via-[#4a081a] to-[#3a0614] shadow-[-15px_0_35px_rgba(0,0,0,0.7)] z-20 flex flex-col justify-between overflow-hidden border-l-2 border-gold-400/60"
      >
        {/* Velvet Vertical Pleat Highlights */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(255,215,0,0.03)_28px,rgba(0,0,0,0.25)_56px)] pointer-events-none opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Right Floral Corner Motif */}
        <FloralCorner position="top-right" className="opacity-80" />
        <FloralCorner position="bottom-right" className="opacity-60" />

        {/* Gold Border Trim Along Inner Edge */}
        <div className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-600 opacity-90 shadow-gold" />
      </motion.div>

      {/* TOP VALANCE / TORAN */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpen ? "-100%" : 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-wine-950 via-wine-900 to-transparent z-30 flex items-center justify-around px-4 pointer-events-none"
      >
        <div className="w-full h-8 sm:h-12 border-b-2 border-dashed border-gold-400/60 flex items-end justify-around pb-1">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
              className="text-gold-300 text-xs sm:text-base opacity-80"
            >
              ⚜
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CENTER INTERACTIVE SEAL & 'CLICK ME' BADGE */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-40 flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Pulsing Golden Aura Ring */}
            <motion.div
              animate={{
                scale: [1, 1.22, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-gold-500/30 via-wine-500/20 to-gold-300/30 blur-xl pointer-events-none"
            />

            {/* Rotating Decorative Mandala */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-56 h-56 sm:w-72 sm:h-72 pointer-events-none"
            >
              <GoldMandala className="w-full h-full text-gold-400/40" />
            </motion.div>

            {/* Royal Wax Seal Card */}
            <div className="relative z-10 px-8 py-7 sm:px-10 sm:py-9 rounded-3xl bg-gradient-to-b from-[#48081a] via-[#330512] to-[#20030a] border-2 border-gold-400/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(201,164,54,0.35)] flex flex-col items-center gap-3 backdrop-blur-md">
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-gold-500 via-gold-300 to-gold-600 flex items-center justify-center shadow-gold text-wine-950 font-bold"
              >
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-wine-900 text-wine-900" />
              </motion.div>

              <div className="space-y-1">
                <p className="font-serif text-[11px] sm:text-xs text-gold-300/90 tracking-[0.3em] uppercase">
                  ॥ श्री गणेशाय नमः ॥
                </p>
                <h1 className="font-display text-xl sm:text-2xl md:text-3xl text-gold-100 font-bold tracking-wide">
                  Vaishnavi & Satyam
                </h1>
                <p className="font-serif italic text-xs sm:text-sm text-gold-200/80 tracking-wider">
                  Engagement Celebration
                </p>
              </div>

              {/* Click Me Button */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="mt-2 relative group overflow-hidden px-7 sm:px-9 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-wine-950 font-serif font-bold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(201,164,54,0.6)] border border-gold-200 flex items-center gap-2"
              >
                {/* Shimmer light sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <Sparkles className="w-4 h-4 text-wine-950 group-hover:rotate-45 transition-transform duration-300" />
                <span>CLICK TO OPEN</span>
                <Sparkles className="w-4 h-4 text-wine-950 group-hover:-rotate-45 transition-transform duration-300" />
              </motion.div>

              <p className="text-[10px] sm:text-[11px] text-gold-300/70 font-serif tracking-widest flex items-center gap-1 mt-1">
                <span>🎵 Tap to begin music & celebration</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
