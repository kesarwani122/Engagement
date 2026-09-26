"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralDivider } from "./FloralDecorations";

export const FamilySection = () => {
  return (
    <section className="py-10 sm:py-14 px-4 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-card rounded-3xl p-6 sm:p-8 border border-gold-400/40 shadow-royal relative"
        >
          <div className="w-10 h-10 mx-auto rounded-full bg-blush-100 flex items-center justify-center text-wine-600 mb-3">
            <Heart className="w-5 h-5 fill-current text-blush-400" />
          </div>

          <span className="text-xs font-serif uppercase tracking-[0.25em] text-wine-600 font-semibold">
            Cordially Invited By
          </span>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-wine-800 mt-1 mb-2">
            With The Blessings of Our Families
          </h3>

          <FloralDivider className="my-2" />

          <div className="space-y-1 text-wine-800 font-serif">
            <p className="text-lg sm:text-xl font-semibold">
              {eventDetails.hosts.parents[0]}
            </p>
            <p className="text-xs text-gold-600 font-bold">&</p>
            <p className="text-lg sm:text-xl font-semibold">
              {eventDetails.hosts.parents[1]}
            </p>
          </div>

          <p className="text-xs font-serif italic text-charcoal-text/75 mt-4 max-w-md mx-auto leading-relaxed">
            &ldquo;We eagerly look forward to welcoming you and your family to celebrate this auspicious milestone in our children&apos;s lives.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};
