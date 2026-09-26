"use client";

import React from "react";
import { motion } from "framer-motion";

export const GoldMandala = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-gold-500/80 ${className}`}
  >
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
    
    {/* 8-pointed petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M50 18 C46 26 46 34 50 40 C54 34 54 26 50 18 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle cx="50" cy="14" r="1.5" fill="currentColor" />
        <path
          d="M50 4 C48 10 48 14 50 18 C52 14 52 10 50 4 Z"
          fill="currentColor"
          fillOpacity="0.3"
        />
      </g>
    ))}
  </svg>
);

export const FloralDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 my-6 opacity-90 ${className}`}>
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-gold-400 to-gold-600" />
    
    <div className="flex items-center gap-1.5 text-gold-600">
      <svg className="w-3.5 h-3.5 fill-current text-blush-400 rotate-45" viewBox="0 0 24 24">
        <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
      </svg>
      <svg className="w-5 h-5 fill-current text-gold-500" viewBox="0 0 24 24">
        <path d="M12 3C13 7 17 11 21 12C17 13 13 17 12 21C11 17 7 13 3 12C7 11 11 7 12 3Z" />
      </svg>
      <svg className="w-3.5 h-3.5 fill-current text-blush-400 rotate-45" viewBox="0 0 24 24">
        <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
      </svg>
    </div>

    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-gold-400 to-gold-600" />
  </div>
);

export const FloralCorner = ({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) => {
  const getTransforms = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0 rotate-90";
      case "bottom-right":
        return "bottom-0 right-0 rotate-180";
      case "bottom-left":
        return "bottom-0 left-0 -rotate-90";
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-0 overflow-hidden ${getTransforms()} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 opacity-60 transition-transform duration-700 hover:scale-105"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vine lines */}
        <path
          d="M0 0 Q 60 10 110 50 Q 140 80 160 160"
          stroke="#C59B27"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M0 0 Q 30 40 50 110 Q 70 140 160 160"
          stroke="#C59B27"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        
        {/* Leaves */}
        <path
          d="M40 18 C 50 12, 60 22, 55 30 C 45 28, 38 24, 40 18 Z"
          fill="#526754"
          fillOpacity="0.45"
        />
        <path
          d="M80 38 C 95 35, 100 48, 92 56 C 82 50, 78 44, 80 38 Z"
          fill="#526754"
          fillOpacity="0.4"
        />
        <path
          d="M20 50 C 12 60, 22 70, 30 65 C 28 55, 24 48, 20 50 Z"
          fill="#526754"
          fillOpacity="0.4"
        />

        {/* Bougainvillea / Rose Pink Blossoms */}
        <g transform="translate(60, 24) scale(0.9)">
          <circle cx="0" cy="0" r="10" fill="#E88B9E" fillOpacity="0.85" />
          <circle cx="-6" cy="-4" r="8" fill="#D95279" fillOpacity="0.7" />
          <circle cx="6" cy="-4" r="8" fill="#D95279" fillOpacity="0.7" />
          <circle cx="0" cy="6" r="8" fill="#70112B" fillOpacity="0.6" />
          <circle cx="0" cy="0" r="3" fill="#ECD482" />
        </g>

        <g transform="translate(115, 60) scale(1.1)">
          <circle cx="0" cy="0" r="12" fill="#E88B9E" fillOpacity="0.85" />
          <circle cx="-8" cy="-5" r="9" fill="#D95279" fillOpacity="0.7" />
          <circle cx="8" cy="-5" r="9" fill="#D95279" fillOpacity="0.7" />
          <circle cx="0" cy="8" r="9" fill="#70112B" fillOpacity="0.65" />
          <circle cx="0" cy="0" r="3.5" fill="#ECD482" />
        </g>

        <g transform="translate(28, 90) scale(0.8)">
          <circle cx="0" cy="0" r="9" fill="#E88B9E" fillOpacity="0.85" />
          <circle cx="-5" cy="-3" r="7" fill="#D95279" fillOpacity="0.7" />
          <circle cx="5" cy="-3" r="7" fill="#D95279" fillOpacity="0.7" />
          <circle cx="0" cy="5" r="7" fill="#70112B" fillOpacity="0.6" />
          <circle cx="0" cy="0" r="2.5" fill="#ECD482" />
        </g>

        {/* Gold Dust Accent Dots */}
        <circle cx="45" cy="50" r="1.5" fill="#C59B27" />
        <circle cx="95" cy="20" r="1.5" fill="#C59B27" />
        <circle cx="130" cy="110" r="2" fill="#C59B27" />
        <circle cx="70" cy="120" r="1" fill="#C59B27" />
      </svg>
    </div>
  );
};

export const RoyalArchOrnament = () => (
  <div className="w-full max-w-md mx-auto my-2 flex items-center justify-center">
    <svg viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-gold-500">
      <path
        d="M 10 35 C 60 5, 110 20, 150 5 C 190 20, 240 5, 290 35"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="150" cy="5" r="3" fill="currentColor" />
      <circle cx="110" cy="20" r="1.5" fill="currentColor" />
      <circle cx="190" cy="20" r="1.5" fill="currentColor" />
    </svg>
  </div>
);
