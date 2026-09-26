"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, CalendarPlus } from "lucide-react";
import { eventDetails } from "@/lib/config";
import { FloralDivider } from "./FloralDecorations";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const DateSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(eventDetails.date.isoTarget).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleGoogleCalendar = () => {
    // 14 Oct 2026, 19:00 IST to 23:30 IST (20261014T133000Z / 20261014T180000Z in UTC)
    const title = encodeURIComponent("Engagement Ceremony: Vaishnavi & Satyam");
    const details = encodeURIComponent(
      "Engagement Ceremony of Vaishnavi Keserwani & Satyam Keserwani with the blessings of Mr. Saroj Kumar & Mrs. Shalini Keserwani."
    );
    const location = encodeURIComponent("Hotel Swagat Grand, Ghoorpur (Opposite to SBI Bank), Prayagraj");
    const dates = "20261014T133000Z/20261014T180000Z";
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleUrl, "_blank");
  };

  return (
    <section id="celebration" className="py-12 sm:py-16 px-4 relative overflow-hidden">
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
            Save The Date
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-wine-800 mt-1 font-bold">
            The Auspicious Day & Time
          </h2>
          <FloralDivider className="my-3" />
        </motion.div>

        {/* Date & Time Calendar Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-card rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-gold transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-wine-700 mb-3 border border-gold-400/40">
              <Calendar className="w-6 h-6" />
            </div>
            <p className="font-serif text-xs uppercase tracking-widest text-gold-700 font-semibold">
              {eventDetails.date.day}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-wine-800 my-1">
              14 October 2026
            </h3>
            <p className="font-serif italic text-xs text-charcoal-text/75">
              An evening of sacred promises
            </p>
          </motion.div>

          {/* Time Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-card rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-gold transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-wine-700 mb-3 border border-gold-400/40">
              <Clock className="w-6 h-6" />
            </div>
            <p className="font-serif text-xs uppercase tracking-widest text-gold-700 font-semibold">
              Evening Muhurat
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-wine-800 my-1">
              {eventDetails.date.time}
            </h3>
            <p className="font-serif italic text-xs text-charcoal-text/75">
              Followed by dinner & celebration
            </p>
          </motion.div>
        </div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-wine-700 via-wine-800 to-wine-900 text-gold-100 border border-gold-400/60 shadow-royal"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gold-300 animate-pulse" />
            <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-300 font-semibold">
              Countdown to the Celebration
            </p>
            <Sparkles className="w-4 h-4 text-gold-300 animate-pulse" />
          </div>

          {mounted ? (
            timeLeft.isPast ? (
              <div className="py-4 text-center">
                <p className="font-display text-xl sm:text-2xl text-gold-200">
                  The celebration has begun ✨
                </p>
                <p className="font-serif text-xs text-gold-300/80 mt-1">
                  Thank you for bestowing your blessings upon Vaishnavi & Satyam!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-3.5 rounded-2xl bg-black/25 backdrop-blur-sm border border-gold-400/30 flex flex-col items-center"
                  >
                    <span className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-gold-200 tabular-nums">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[10px] sm:text-xs uppercase tracking-wider text-gold-300/80 mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="h-16 flex items-center justify-center text-xs font-serif text-gold-300">
              Loading auspicious countdown...
            </div>
          )}

          {/* Calendar Export Button */}
          <div className="mt-6 pt-4 border-t border-gold-400/20 flex justify-center">
            <button
              onClick={handleGoogleCalendar}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 text-xs font-serif uppercase tracking-widest border border-gold-400/40 transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-gold-300" />
              <span>Add to Google Calendar</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
