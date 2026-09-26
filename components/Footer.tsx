"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Heart } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralDivider, GoldMandala } from "./FloralDecorations";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-24 sm:pb-16 px-4 bg-gradient-to-b from-transparent to-ivory-200 border-t border-gold-300/40 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <p className="font-sanskrit text-sm sm:text-base text-wine-700 font-semibold tracking-wide pt-2">
          ॥ शुभं भवतु • सदा मंगलम् भवतु ॥
        </p>

        <FloralDivider className="my-3" />

        <h3 className="font-script text-3xl sm:text-4xl text-wine-800">
          Vaishnavi & Satyam
        </h3>

        <p className="font-serif text-xs uppercase tracking-widest text-gold-700 font-semibold mt-1">
          Engagement Ceremony • 14th October 2026
        </p>

        <p className="font-serif italic text-xs text-charcoal-text/70 mt-3 max-w-md mx-auto">
          Warmly hosted by {eventDetails.hosts.parents[0]} & {eventDetails.hosts.parents[1]}
        </p>

        {/* Back to top CTA */}
        <button
          onClick={scrollToTop}
          className="mt-6 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-wine-700 text-xs font-serif uppercase tracking-widest border border-gold-400/40 shadow-sm transition-all hover:scale-105"
        >
          <ArrowUp className="w-3.5 h-3.5 text-gold-600" />
          <span>Back to Top</span>
        </button>

        <div className="mt-8 text-[11px] font-serif text-charcoal-text/50 flex items-center gap-1">
          <span>Crafted with love & devotion for Vaishnavi & Satyam</span>
          <Heart className="w-3 h-3 text-blush-400 fill-current" />
        </div>
      </div>
    </footer>
  );
};
