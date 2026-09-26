"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Calendar, MapPin, Mail, Sparkles, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("invitation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "invitation", label: "Invitation", icon: Sparkles },
    { id: "story", label: "Ring Exchange", icon: Heart },
    { id: "celebration", label: "Date & Time", icon: Calendar },
    { id: "venue", label: "Venue", icon: MapPin },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Floating Navigation Bar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-40 hidden md:block"
      >
        <nav className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gold-400/50 shadow-royal">
          <span className="px-2 font-script text-xl text-wine-700 font-semibold select-none">
            V & S
          </span>

          <div className="h-4 w-[1px] bg-gold-400/50 mx-1" />

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-serif uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "text-gold-100 font-semibold"
                    : "text-charcoal-text/75 hover:text-wine-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-wine-700 to-wine-800 shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-gold-300" : "text-gold-600"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </motion.header>

      {/* Mobile Top Header with Monogram and Hamburger Button */}
      <div className="fixed top-4 left-4 right-4 z-40 flex items-center justify-between md:hidden pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gold-400/50 shadow-md pointer-events-auto">
          <span className="font-script text-xl text-wine-700 font-semibold">
            Vaishnavi & Satyam
          </span>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-full bg-wine-700 text-gold-200 flex items-center justify-center border border-gold-400/60 shadow-md pointer-events-auto focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-16 z-40 md:hidden royal-card rounded-2xl p-4 shadow-2xl border border-gold-400"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-serif uppercase tracking-wider text-left transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-wine-700 to-wine-800 text-gold-100 font-semibold"
                        : "text-charcoal-text/80 hover:bg-gold-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-gold-300" : "text-gold-600"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
