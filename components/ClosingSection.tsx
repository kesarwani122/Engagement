"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralDivider, GoldMandala, RoyalArchOrnament } from "./FloralDecorations";

export const ClosingSection = () => {
  return (
    <section className="py-14 sm:py-20 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="royal-card rounded-3xl p-8 sm:p-12 border border-gold-400/60 shadow-royal relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/15 via-blush-100/10 to-transparent pointer-events-none" />

          {/* Heart Icon with Halo */}
          <div className="relative w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-gold-100 to-blush-100 flex items-center justify-center text-wine-600 mb-4 border border-gold-400/40">
            <Heart className="w-7 h-7 fill-current text-blush-500 animate-pulse-slow" />
          </div>

          <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.25em] text-wine-600 font-semibold">
            Heartfelt Gratitude
          </span>

          <FloralDivider className="my-4" />

          {/* Prompt Quote */}
          <blockquote className="font-display text-xl sm:text-3xl md:text-4xl text-wine-800 font-semibold leading-relaxed sm:leading-snug max-w-2xl mx-auto">
            &ldquo;{eventDetails.closingMessage}&rdquo;
          </blockquote>

          <FloralDivider className="my-4" />

          {/* Parents & Hosts */}
          <div className="space-y-1.5 pt-2">
            <p className="font-serif italic text-xs sm:text-sm text-charcoal-text/75 uppercase tracking-wider">
              With love, warm regards & blessings
            </p>
            <p className="font-serif text-base sm:text-xl font-bold text-wine-800 tracking-wide">
              {eventDetails.hosts.parents[0]}
            </p>
            <p className="font-serif italic text-xs text-gold-600 font-semibold">&</p>
            <p className="font-serif text-base sm:text-xl font-bold text-wine-800 tracking-wide">
              {eventDetails.hosts.parents[1]}
            </p>
            <p className="font-serif text-xs text-gold-700 font-semibold uppercase tracking-widest pt-1">
              & The Keserwani Family
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
