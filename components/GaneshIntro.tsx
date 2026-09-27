"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Music2 } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralCorner, FloralDivider, GoldMandala } from "./FloralDecorations";

interface GaneshIntroProps {
  onEnter: () => void;
  isFirstCycleComplete?: boolean;
  audioProgress?: number;
  isPlaying?: boolean;
}

export const GaneshIntro = ({
  onEnter,
  isFirstCycleComplete = false,
  audioProgress = 0,
  isPlaying = true,
}: GaneshIntroProps) => {
  // Smooth animated progress fallback that advances gracefully alongside audio
  const [internalProgress, setInternalProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Grapheme breakdown of sacred Sanskrit Shlok lines for authentic Indian calligraphy
  const line1Graphemes = useMemo(() => {
    const text = "॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।";
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const seg = new Intl.Segmenter("hi", { granularity: "grapheme" });
      return Array.from(seg.segment(text), (s) => s.segment);
    }
    return Array.from(text);
  }, []);

  const line2Graphemes = useMemo(() => {
    const text = "निर्विघ्नं कुरु मे देव शुभकार्येषु सर्वदा ॥";
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const seg = new Intl.Segmenter("hi", { granularity: "grapheme" });
      return Array.from(seg.segment(text), (s) => s.segment);
    }
    return Array.from(text);
  }, []);

  // Internal ticker ensuring smooth continuous handwriting animation (18s target cycle)
  useEffect(() => {
    if (isFirstCycleComplete) {
      setIsUnlocked(true);
      return;
    }

    const durationMs = 19000;
    const intervalMs = 60;
    const step = intervalMs / durationMs;

    const timer = setInterval(() => {
      setInternalProgress((prev) => {
        const next = prev + step;
        if (next >= 1) {
          setIsUnlocked(true);
          return 1;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isFirstCycleComplete]);

  // Combine audio progress and ticker progress
  const effectiveProgress = isFirstCycleComplete || isUnlocked
    ? 1
    : Math.max(internalProgress, audioProgress || 0);

  const isCycleDone = isFirstCycleComplete || isUnlocked || effectiveProgress >= 0.98;

  // Calculate visible characters for Line 1 (0.05 -> 0.46)
  const line1Progress = isCycleDone
    ? 1
    : Math.min(1, Math.max(0, (effectiveProgress - 0.05) / 0.41));
  const visibleLine1Count = isCycleDone
    ? line1Graphemes.length
    : Math.floor(line1Progress * line1Graphemes.length);
  const line1Displayed = line1Graphemes.slice(0, visibleLine1Count).join("");
  const isTypingLine1 = !isCycleDone && effectiveProgress >= 0.05 && effectiveProgress < 0.46;

  // Calculate visible characters for Line 2 (0.46 -> 0.87)
  const line2Progress = isCycleDone
    ? 1
    : Math.min(1, Math.max(0, (effectiveProgress - 0.46) / 0.41));
  const visibleLine2Count = isCycleDone
    ? line2Graphemes.length
    : Math.floor(line2Progress * line2Graphemes.length);
  const line2Displayed = line2Graphemes.slice(0, visibleLine2Count).join("");
  const isTypingLine2 = !isCycleDone && effectiveProgress >= 0.46 && effectiveProgress < 0.87;

  // Show transliteration & meaning towards end of cycle
  const showSubtext = isCycleDone || effectiveProgress >= 0.82;

  return (
    <div
      onClick={() => {
        // Any click or touch ensures ambient audio is playing
        const audio = document.querySelector("audio");
        if (audio && audio.paused) {
          audio.play().catch(() => {});
        }
      }}
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-6 sm:py-8 px-4 sm:px-8 bg-paper-texture overflow-hidden select-none"
    >
      {/* Corner Floral Motifs */}
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      {/* Subtle Background Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] bg-gradient-to-tr from-gold-300/25 via-blush-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Auspicious Note */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10 pt-2 sm:pt-4"
      >
        <p className="font-serif text-xs sm:text-sm tracking-[0.35em] uppercase text-wine-600 font-semibold drop-shadow-sm">
          ॥ श्री गणेशाय नमः ॥
        </p>
      </motion.div>

      {/* Center Composition: Ganesh Ji + Sanskrit Sacred Shlok */}
      <div className="flex flex-col items-center max-w-2xl mx-auto z-10 text-center my-auto py-2">
        {/* Lord Ganesh Sacred Aura & Image */}
        <div className="relative mb-3 sm:mb-5">
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
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.7, 0.35],
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
              className="object-contain filter drop-shadow-[0_8px_24px_rgba(201,164,54,0.4)]"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
            />
          </motion.div>
        </div>

        {/* Sanskrit Shloka in Calligraphic Writing Format */}
        <div className="space-y-2.5 px-2 max-w-xl mx-auto">
          <FloralDivider className="my-1.5 opacity-80" />

          {/* Sacred Sanskrit Shlok with Typewriter Handwriting Animation */}
          <div className="font-sanskrit text-base sm:text-xl md:text-2xl text-wine-700 leading-relaxed font-semibold tracking-wide min-h-[4rem] sm:min-h-[4.5rem] flex flex-col items-center justify-center">
            {/* Line 1 */}
            <div className="relative inline-flex items-center justify-center flex-wrap">
              <span className="bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 bg-clip-text text-transparent transition-all duration-150">
                {line1Displayed}
              </span>
              {isTypingLine1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-1 sm:w-1.5 h-4 sm:h-6 bg-gold-500 ml-1 rounded-full shadow-[0_0_8px_rgba(201,164,54,0.8)]"
                />
              )}
            </div>

            {/* Line 2 */}
            <div className="relative inline-flex items-center justify-center flex-wrap mt-1">
              <span className="bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 bg-clip-text text-transparent transition-all duration-150">
                {line2Displayed}
              </span>
              {isTypingLine2 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-1 sm:w-1.5 h-4 sm:h-6 bg-gold-500 ml-1 rounded-full shadow-[0_0_8px_rgba(201,164,54,0.8)]"
                />
              )}
            </div>
          </div>

          {/* Transliteration & English Meaning */}
          <AnimatePresence>
            {showSubtext && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="space-y-1.5"
              >
                <p className="font-serif italic text-xs sm:text-sm text-charcoal-text/80 tracking-wider">
                  {eventDetails.shloka.transliteration}
                </p>

                <p className="text-[11px] sm:text-xs text-sage-DEFAULT font-light max-w-lg mx-auto tracking-wide pt-0.5">
                  &ldquo;May Lord Ganesha bless this new beginning with happiness, harmony, and prosperity.&rdquo;
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Action Area: Waiting State OR Unlocked Button + Pointer Hand Emoji */}
      <div className="z-20 w-full flex flex-col items-center justify-center min-h-[90px] sm:min-h-[110px]">
        <AnimatePresence mode="wait">
          {!isCycleDone ? (
            /* During First Cycle: Sacred Listening Ambient Indicator */
            <motion.div
              key="listening"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 border border-gold-300/60 shadow-sm backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-gold-600"
                >
                  <Music2 className="w-3.5 h-3.5" />
                </motion.div>
                <span className="font-serif text-[11px] sm:text-xs text-wine-700 tracking-wider font-medium">
                  Writing Sacred Invocation with Background Mantra...
                </span>
              </div>

              {/* Progress bar matching the background music cycle */}
              <div className="w-36 sm:w-48 h-1 bg-gold-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold-500 via-wine-500 to-gold-600 transition-all duration-200 rounded-full"
                  style={{ width: `${Math.round(effectiveProgress * 100)}%` }}
                />
              </div>
            </motion.div>
          ) : (
            /* After First Cycle Complete: Reveal Button & Pointer Emoji */
            <motion.div
              key="cta"
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                {/* 3D Pointer Hand Emoji pointing directly at button */}
                <motion.div
                  animate={{
                    x: [-6, 8, -6],
                    scale: [1, 1.06, 1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex items-center justify-center filter drop-shadow-[0_8px_18px_rgba(201,164,54,0.5)]"
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                    <Image
                      src="/images/image-removebg-preview.png"
                      alt="Pointer Hand Emoji"
                      fill
                      className="object-contain transform rotate-90 sm:rotate-0"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Enter Invitation CTA Button */}
                <button
                  onClick={onEnter}
                  className="relative group overflow-hidden px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-wine-700 via-wine-600 to-wine-800 text-gold-100 font-serif text-sm sm:text-base tracking-[0.2em] uppercase font-semibold shadow-royal border border-gold-400/80 transition-all duration-300 hover:scale-105 hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-gold-400 ring-offset-2 ring-offset-ivory cursor-pointer"
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                  <span className="relative flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform duration-300" />
                    <span>BEGIN THE CELEBRATION</span>
                    <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </button>
              </div>

              <p className="mt-2.5 text-[11px] sm:text-xs text-wine-600/85 font-serif tracking-widest flex items-center gap-1.5">
                <span>Tap to enter celebration with wedding shehnai theme</span>
                <span>✨</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
