"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralDivider, GoldMandala, RoyalArchOrnament } from "./FloralDecorations";

export const InvitationHero = () => {
  return (
    <section id="invitation" className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-gold-300/15 via-blush-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Ornate Frame / Royal Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-3xl mx-auto royal-card rounded-3xl p-6 sm:p-12 md:p-14 text-center overflow-hidden border border-gold-400/50 shadow-royal"
      >
        {/* Subtle Background Watermark Ganesh */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <Image
            src="/images/ganesh-ji.png"
            alt="Ganesh Ji Watermark"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Top Sacred Lord Ganesh Ji Presence */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3"
        >
          {/* Subtle Golden Glow Halo */}
          <div className="absolute inset-0 rounded-full bg-gold-400/25 blur-xl pointer-events-none" />
          <Image
            src="/images/ganesh-ji.png"
            alt="Lord Ganesha"
            fill
            priority
            className="object-contain filter drop-shadow-[0_4px_12px_rgba(201,164,54,0.35)]"
          />
        </motion.div>

        {/* Auspicious Header Mantra */}
        <div className="relative z-10 mb-4">
          <p className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-wine-600 font-medium">
            ॥ श्री गणेशाय नमः ॥
          </p>
        </div>

        {/* Blessings & Ancestors */}
        <div className="relative z-10 space-y-1.5 mb-6">
          <p className="font-serif text-xs sm:text-sm tracking-[0.18em] uppercase text-charcoal-text/80 font-medium max-w-md mx-auto">
            {eventDetails.hosts.parentsText}
          </p>

          <div className="pt-2">
            <p className="font-serif text-base sm:text-lg md:text-xl text-wine-800 font-semibold tracking-wide">
              {eventDetails.hosts.parents[0]}
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-gold-600">&</p>
            <p className="font-serif text-base sm:text-lg md:text-xl text-wine-800 font-semibold tracking-wide">
              {eventDetails.hosts.parents[1]}
            </p>
          </div>

          <p className="font-serif italic text-xs sm:text-sm text-charcoal-text/75 pt-3 max-w-md mx-auto leading-relaxed">
            {eventDetails.hosts.invitationNote}
          </p>
        </div>

        <RoyalArchOrnament />

        {/* Main Event Title */}
        <div className="relative z-10 my-4 sm:my-6">
          <span className="inline-block px-4 py-1 rounded-full bg-gold-100/80 border border-gold-400/40 text-wine-700 font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-2">
            Auspicious Occasion
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-wider text-wine-700 font-extrabold uppercase drop-shadow-sm">
            Engagement Ceremony
          </h1>
        </div>

        <FloralDivider className="my-4" />

        {/* Centerpiece: Vaishnavi & Satyam */}
        <div className="relative z-10 py-4 sm:py-6 space-y-3">
          {/* Bride */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="transition-transform duration-300"
          >
            <h2 className="font-script text-5xl sm:text-7xl md:text-8xl text-wine-700 font-normal leading-none drop-shadow-sm">
              Vaishnavi Keserwani
            </h2>
            <p className="font-serif text-[11px] sm:text-xs tracking-[0.2em] uppercase text-blush-500 font-medium mt-1">
              Beloved Daughter of Saroj Kumar & Shalini Keserwani
            </p>
          </motion.div>

          {/* With / Ampersand */}
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1px] w-8 sm:w-16 bg-gold-400/60" />
            <span className="font-serif italic text-lg sm:text-2xl text-gold-600 font-medium">
              with
            </span>
            <span className="h-[1px] w-8 sm:w-16 bg-gold-400/60" />
          </div>

          {/* Groom */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="transition-transform duration-300"
          >
            <h2 className="font-script text-5xl sm:text-7xl md:text-8xl text-wine-700 font-normal leading-none drop-shadow-sm">
              Satyam Keserwani
            </h2>
            <p className="font-serif text-[11px] sm:text-xs tracking-[0.2em] uppercase text-wine-600/80 font-medium mt-1">
              Beginning of a Lifetime of Togetherness
            </p>
          </motion.div>
        </div>

        <FloralDivider className="my-4" />

        {/* Event Quick Snapshot Badge */}
        <div className="relative z-10 mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-ivory-100 via-gold-50 to-ivory-100 border border-gold-400/50 shadow-sm text-wine-800">
          <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider">
            {eventDetails.date.fullDate}
          </span>
          <span className="text-gold-500">•</span>
          <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider">
            {eventDetails.date.time}
          </span>
          <span className="text-gold-500">•</span>
          <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider">
            {eventDetails.venue.name}, Prayagraj
          </span>
        </div>
      </motion.div>
    </section>
  );
};
