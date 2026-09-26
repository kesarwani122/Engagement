"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export const RingExchange = () => {
  const [key, setKey] = useState(0);
  const [isPlaced, setIsPlaced] = useState(false);

  const handleReplay = () => {
    setIsPlaced(false);
    setKey((prev) => prev + 1);
  };

  const triggerSparkleBurst = () => {
    setIsPlaced(true);
    // Soft celebratory gold and rose confetti burst
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#C59B27", "#E88B9E", "#70112B", "#FAF5EB", "#F7E7B4"],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="story" className="py-12 sm:py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.25em] text-wine-600 font-semibold">
            The Sacred Bond
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-wine-800 mt-1 font-bold">
            The Exchange of Rings
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-text/75 font-serif max-w-md mx-auto mt-2">
            A timeless promise of love, devotion, and shared dreams for eternity.
          </p>
        </motion.div>

        {/* Animated Ring Exchange Stage */}
        <div className="relative max-w-lg mx-auto h-72 sm:h-88 rounded-3xl bg-gradient-to-b from-ivory-50 via-white to-ivory-100 p-6 shadow-royal border border-gold-400/40 flex flex-col items-center justify-between overflow-hidden">
          {/* Subtle Arch Background Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-300/20 via-blush-100/10 to-transparent pointer-events-none" />

          {/* Top Arch Filigree SVG */}
          <div className="absolute top-2 w-full flex justify-center opacity-40">
            <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
              <path d="M10 20 Q 90 2 170 20" stroke="#C59B27" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="90" cy="11" r="3" fill="#C59B27" />
            </svg>
          </div>

          {/* Interactive Animation Arena */}
          <div key={key} className="relative w-full h-48 flex items-center justify-between px-4 sm:px-12 my-auto">
            {/* Groom's Side & Hand Illustration */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center z-10"
            >
              <div className="relative">
                {/* Royal Sherwani / Kurta Sleeve */}
                <svg width="90" height="70" viewBox="0 0 100 80" fill="none">
                  {/* Sleeve */}
                  <path
                    d="M 10 20 L 55 30 L 55 55 L 10 65 Z"
                    fill="#70112B"
                    stroke="#C59B27"
                    strokeWidth="1.5"
                  />
                  {/* Gold Zari Embroidery on cuff */}
                  <line x1="48" y1="30" x2="48" y2="57" stroke="#ECD482" strokeWidth="2.5" />
                  <line x1="52" y1="30" x2="52" y2="56" stroke="#ECD482" strokeWidth="1.5" />
                  
                  {/* Groom Hand & Palm */}
                  <path
                    d="M 55 35 Q 75 33 88 40 Q 92 48 85 52 Q 70 54 55 51 Z"
                    fill="#F2D2BD"
                    stroke="#D4AF37"
                    strokeWidth="0.8"
                  />
                  {/* Groom's Thumb */}
                  <path
                    d="M 68 35 Q 78 30 82 34 Q 78 40 70 38"
                    fill="#F2D2BD"
                    stroke="#D4AF37"
                    strokeWidth="0.6"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-serif uppercase tracking-widest text-wine-700 font-semibold mt-1">
                Satyam
              </span>
            </motion.div>

            {/* Engagement Ring Animated Flight */}
            <motion.div
              initial={{ x: -70, y: -5, scale: 0.9, opacity: 0 }}
              animate={{
                x: [ -70, -20, 20, 62 ],
                y: [ -5, -28, -20, 0 ],
                scale: [0.9, 1.25, 1.15, 1],
                opacity: [0, 1, 1, 1],
              }}
              transition={{
                duration: 2.4,
                times: [0, 0.4, 0.75, 1],
                ease: "easeInOut",
              }}
              onAnimationComplete={triggerSparkleBurst}
              className="absolute left-1/2 -translate-x-1/2 z-20"
            >
              <div className="relative flex items-center justify-center">
                {/* Ring Solitaire Diamond & Gold Band */}
                <svg width="44" height="44" viewBox="0 0 50 50" fill="none">
                  {/* Golden Band */}
                  <ellipse cx="25" cy="28" rx="14" ry="12" stroke="#D4AF37" strokeWidth="3" fill="none" />
                  <ellipse cx="25" cy="28" rx="14" ry="12" stroke="#FFF0A0" strokeWidth="1" strokeDasharray="2 4" fill="none" />
                  
                  {/* Diamond Crown */}
                  <polygon points="25,6 31,14 19,14" fill="#E6F2FF" stroke="#A6C8FF" strokeWidth="0.8" />
                  <polygon points="25,18 31,14 19,14" fill="#C0E0FF" stroke="#80B8FF" strokeWidth="0.6" />
                  
                  {/* Diamond Sparkle Highlight */}
                  <circle cx="25" cy="11" r="2.5" fill="#FFFFFF" />
                </svg>

                {/* Sparkling Flare */}
                <motion.div
                  animate={{
                    scale: [0.8, 1.4, 0.8],
                    rotate: [0, 90, 180],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute -top-1"
                >
                  <Sparkles className="w-5 h-5 text-gold-300 drop-shadow-[0_0_8px_#ECD482]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Bride's Side & Hand Illustration */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center z-10"
            >
              <div className="relative">
                {/* Royal Lehenga / Chooda Sleeve */}
                <svg width="90" height="70" viewBox="0 0 100 80" fill="none">
                  {/* Sleeve */}
                  <path
                    d="M 90 20 L 45 30 L 45 55 L 90 65 Z"
                    fill="#E88B9E"
                    stroke="#C59B27"
                    strokeWidth="1.5"
                  />
                  {/* Gold & Red Chooda / Bangles */}
                  <line x1="52" y1="30" x2="52" y2="57" stroke="#70112B" strokeWidth="3" />
                  <line x1="48" y1="30" x2="48" y2="56" stroke="#ECD482" strokeWidth="2" />
                  <line x1="44" y1="31" x2="44" y2="55" stroke="#70112B" strokeWidth="2.5" />
                  
                  {/* Bride Delicate Hand with Mehendi */}
                  <path
                    d="M 45 35 Q 25 33 12 40 Q 8 48 15 52 Q 30 54 45 51 Z"
                    fill="#F7DFD4"
                    stroke="#D4AF37"
                    strokeWidth="0.8"
                  />
                  {/* Mehendi henna pattern dots */}
                  <circle cx="28" cy="42" r="1.5" fill="#70112B" opacity="0.75" />
                  <circle cx="34" cy="40" r="1" fill="#70112B" opacity="0.75" />
                  <circle cx="33" cy="46" r="1" fill="#70112B" opacity="0.75" />
                  <circle cx="22" cy="44" r="1.2" fill="#70112B" opacity="0.75" />
                </svg>
              </div>
              <span className="text-[11px] font-serif uppercase tracking-widest text-blush-500 font-semibold mt-1">
                Vaishnavi
              </span>
            </motion.div>
          </div>

          {/* Celebration Status / Replay Action */}
          <div className="w-full flex items-center justify-between z-10 pt-2 border-t border-gold-300/30">
            <AnimatePresence>
              {isPlaced ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-1.5 text-xs font-serif text-wine-700 font-medium"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-blush-500" />
                  <span>Forever & Always Connected</span>
                </motion.div>
              ) : (
                <div className="text-[11px] font-serif text-gold-700/80 italic">
                  Exchanging rings of eternal love...
                </div>
              )}
            </AnimatePresence>

            <button
              onClick={handleReplay}
              className="flex items-center gap-1 text-xs font-serif text-wine-600 hover:text-wine-800 transition-colors px-2.5 py-1 rounded-full bg-gold-100/60 hover:bg-gold-200/80 border border-gold-300/60"
              title="Replay ring exchange animation"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Replay</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
