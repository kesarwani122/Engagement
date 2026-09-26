"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { eventDetails } from "@/lib/config";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  stage: "intro" | "transitioning" | "invitation";
}

export const MusicPlayer = ({
  isPlaying,
  setIsPlaying,
  stage,
}: MusicPlayerProps) => {
  const ganeshAudioRef = useRef<HTMLAudioElement | null>(null);
  const mainAudioRef = useRef<HTMLAudioElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const currentAudioTitle =
    stage === "intro" ? "Ganesh Vandana Mantra 🕉️" : "Engagement Shehnai Theme 💍";

  // Handle stage audio switching
  useEffect(() => {
    const ganeshAudio = ganeshAudioRef.current;
    const mainAudio = mainAudioRef.current;

    if (stage === "intro") {
      if (mainAudio) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
      }
      if (ganeshAudio) {
        ganeshAudio.volume = 0.6;
        ganeshAudio.loop = true;
        if (isPlaying) {
          ganeshAudio.play().catch(() => {});
        }
      }
    } else if (stage === "invitation") {
      if (ganeshAudio) {
        ganeshAudio.pause();
      }
      if (mainAudio) {
        mainAudio.volume = 0.55;
        mainAudio.loop = true;
        if (isPlaying) {
          mainAudio.play().catch(() => {});
        }
      }
    }
  }, [stage, isPlaying]);

  // Attempt initial ambient start on first user interaction if not started yet
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (stage === "intro" && ganeshAudioRef.current) {
        ganeshAudioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [stage, setIsPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const activeAudio = stage === "intro" ? ganeshAudioRef.current : mainAudioRef.current;
    if (!activeAudio) return;

    if (isPlaying) {
      activeAudio.pause();
      setIsPlaying(false);
    } else {
      activeAudio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio play blocked:", err);
      });
    }
  };

  return (
    <>
      <audio
        ref={ganeshAudioRef}
        src={eventDetails.audio.ganeshMantra}
        preload="auto"
      />
      <audio
        ref={mainAudioRef}
        src={eventDetails.audio.mainTheme}
        preload="auto"
      />

      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden sm:block px-3 py-1.5 rounded-full bg-wine-800/95 text-gold-200 text-xs font-serif shadow-xl border border-gold-400/50 backdrop-blur-md"
            >
              {isPlaying ? currentAudioTitle : "Audio Paused"}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-wine-700 via-wine-800 to-wine-900 text-gold-200 flex items-center justify-center shadow-royal border border-gold-400/70 focus:outline-none focus:ring-2 focus:ring-gold-400 group overflow-hidden cursor-pointer"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Animated vinyl groove ring */}
          <div
            className={`absolute inset-1 rounded-full border border-gold-400/30 border-dashed ${
              isPlaying ? "animate-spin-slow" : ""
            }`}
          />

          {/* Pulsing soundwave halo */}
          {isPlaying && (
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gold-400/25 pointer-events-none"
            />
          )}

          {isPlaying ? (
            <div className="flex items-center gap-0.5">
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-300 drop-shadow" />
            </div>
          ) : (
            <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400/70" />
          )}

          {/* Music badge */}
          {isPlaying && (
            <motion.span
              animate={{ y: [-2, -8, -2], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="absolute top-1 right-2 text-[10px] text-gold-300"
            >
              ♪
            </motion.span>
          )}
        </motion.button>
      </div>
    </>
  );
};
