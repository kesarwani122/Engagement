"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Navigation, QrCode, ExternalLink } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralDivider } from "./FloralDecorations";

export const VenueSection = () => {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <section id="venue" className="py-12 sm:py-16 px-4 relative overflow-hidden">
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
            The Celebration Awaits
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-wine-800 mt-1 font-bold">
            The Grand Venue
          </h2>
          <FloralDivider className="my-3" />
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-card max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 border border-gold-400/50 shadow-royal relative overflow-hidden"
        >
          {/* Decorative Palace Arch Icon */}
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-gold-100 to-blush-100 flex items-center justify-center text-wine-700 mb-4 border border-gold-400/40">
            <MapPin className="w-7 h-7 text-wine-700 animate-bounce" />
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-wine-800">
            {eventDetails.venue.name}
          </h3>

          <div className="mt-3 space-y-1 text-charcoal-text/80 font-serif">
            <p className="text-base sm:text-lg font-medium">
              {eventDetails.venue.addressLine1}
            </p>
            <p className="text-xs sm:text-sm text-gold-700 font-semibold">
              {eventDetails.venue.city}
            </p>
            <p className="text-xs italic text-sage-DEFAULT pt-1">
              Landmark: {eventDetails.venue.landmark}
            </p>
          </div>

          {/* Action Buttons: View on Map & Scan QR */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={eventDetails.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-wine-700 to-wine-800 text-gold-100 font-serif text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-md hover:shadow-gold border border-gold-400/60 transition-all duration-300 hover:scale-105"
            >
              <Navigation className="w-4 h-4 text-gold-300" />
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              onClick={() => setShowQrModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-100/80 hover:bg-gold-200 text-wine-800 font-serif text-xs sm:text-sm uppercase tracking-widest font-semibold border border-gold-400/50 transition-colors"
            >
              <QrCode className="w-4 h-4 text-gold-700" />
              <span>Scan Venue QR</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* QR Code Modal for Instant Phone Navigation */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowQrModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="royal-card max-w-sm w-full rounded-3xl p-6 text-center border border-gold-400 shadow-2xl relative"
          >
            <h4 className="font-display text-lg font-bold text-wine-800 mb-1">
              Venue Location QR Code
            </h4>
            <p className="text-xs font-serif text-charcoal-text/75 mb-4">
              Scan with your mobile camera for instant Google Maps navigation.
            </p>

            <div className="relative w-48 h-48 mx-auto rounded-xl overflow-hidden border-2 border-gold-400/60 p-2 bg-white shadow-inner">
              <Image
                src={eventDetails.venue.qrCodeImage}
                alt="Venue Location QR Code"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-[11px] font-serif text-wine-700 font-semibold mt-4">
              Hotel Swagat Grand • Ghoorpur, Prayagraj
            </p>

            <button
              onClick={() => setShowQrModal(false)}
              className="mt-4 px-6 py-2 rounded-full bg-wine-700 text-gold-200 text-xs font-serif uppercase tracking-wider"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};
