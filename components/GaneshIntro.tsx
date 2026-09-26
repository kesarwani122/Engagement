"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralCorner, FloralDivider, GoldMandala } from "./FloralDecorations";

interface GaneshIntroProps {
  onEnter: () => void;
}

export const GaneshIntro = ({ onEnter }: GaneshIntroProps) => {
  return (
    <div
      onClick={() => {
        // Any tap initiates ambient audio
        const audio = document.querySelector('audio');
        if (audio && audio.paused) {
          audio.play().catch(() => {});
        }
      }}
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-8 px-4 sm:px-8 bg-paper-texture overflow-hidden select-none cursor-pointer"
    >
      {/* Corner Floral Motifs */}
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      {/* Subtle Background Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-gradient-to-tr from-gold-300/20 via-blush-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Auspicious Note */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10 pt-4"
      >
        <p className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-wine-600/90 font-medium">
          ॥ श्री गणेशाय नमः ॥
        </p>
      </motion.div>

      {/* Center Composition: Ganesh Ji + Sanskrit Invocation */}
      <div className="flex flex-col items-center max-w-2xl mx-auto z-10 text-center my-auto">
        {/* Lord Ganesh Sacred Aura & Image */}
        <div className="relative mb-4 sm:mb-6">
          {/* Subtle Golden Mandala Halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-6 sm:-m-10 flex items-center justify-center pointer-events-none"
          >
            <GoldMandala className="w-56 h-56 sm:w-80 sm:h-80 opacity-40 text-gold-500" />
          </motion.div>

          {/* Golden Pulse Aura */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-400/30 to-blush-300/30 blur-2xl pointer-events-none"
          />

          {/* Standalone Ganesh Ji Asset */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto drop-shadow-2xl"
          >
            <Image
              src="/images/ganesh-ji.png"
              alt="Lord Ganesha"
              fill
              priority
              className="object-contain filter drop-shadow-[0_8px_20px_rgba(201,164,54,0.35)]"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
            />
          </motion.div>
        </div>

        {/* Sanskrit Shloka */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-2.5 px-2"
        >
          <FloralDivider className="my-2" />

          <p className="font-sanskrit text-base sm:text-xl md:text-2xl text-wine-700 leading-relaxed font-semibold tracking-wide">
            {eventDetails.shloka.sanskrit}
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-charcoal-text/80 tracking-wider">
            {eventDetails.shloka.transliteration}
          </p>

          <p className="text-[11px] sm:text-xs text-sage-DEFAULT font-light max-w-lg mx-auto tracking-wide pt-1">
            &ldquo;May Lord Ganesha bless this new beginning with happiness, harmony, and prosperity.&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Enter Invitation CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="z-10 pb-6 sm:pb-8 flex flex-col items-center"
      >
        <button
          onClick={onEnter}
          className="relative group overflow-hidden px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-wine-700 via-wine-600 to-wine-800 text-gold-100 font-serif text-sm sm:text-base tracking-[0.2em] uppercase font-semibold shadow-royal border border-gold-400/80 transition-all duration-300 hover:scale-105 hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-gold-400"
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          <span className="relative flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform duration-300" />
            <span>BEGIN THE CELEBRATION</span>
            <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1.5 transition-transform duration-300" />
          </span>
        </button>

        <p className="mt-3 text-[11px] sm:text-xs text-wine-600/80 font-serif tracking-widest flex items-center gap-1.5">
          <span>Tap to enter celebration with wedding shehnai theme</span>
          <span>✨</span>
        </p>
      </motion.div>
    </div>
  );
};
