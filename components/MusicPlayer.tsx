"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { eventDetails } from "@/lib/config";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  stage: "curtain" | "intro" | "transitioning" | "invitation";
  onGaneshCycleComplete?: () => void;
  onGaneshProgress?: (progress: number, currentTime: number, duration: number) => void;
}

export const MusicPlayer = ({
  isPlaying,
  setIsPlaying,
  stage,
  onGaneshCycleComplete,
  onGaneshProgress,
}: MusicPlayerProps) => {
  const ganeshAudioRef = useRef<HTMLAudioElement | null>(null);
  const mainAudioRef = useRef<HTMLAudioElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const hasTriggeredCycleRef = useRef(false);

  const currentAudioTitle =
    stage === "intro" ? "Ganesh Vandana Mantra 🕉️" : "Engagement Shehnai Theme 💍";

  const tryPlayCurrent = useCallback(() => {
    const audio = stage === "intro" ? ganeshAudioRef.current : mainAudioRef.current;
    if (!audio) return;

    audio.volume = stage === "intro" ? 0.75 : 0.65;
    audio.loop = true;

    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy until interaction
        });
    }
  }, [stage, setIsPlaying]);

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
        ganeshAudio.volume = 0.75;
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
        mainAudio.volume = 0.65;
        mainAudio.loop = true;
        if (isPlaying) {
          mainAudio.play().catch(() => {});
        }
      }
    }
  }, [stage, isPlaying]);

  // Audio cycle & progress tracking for Ganesh Intro
  useEffect(() => {
    const ganeshAudio = ganeshAudioRef.current;
    if (!ganeshAudio) return;

    const handleTimeUpdate = () => {
      if (stage !== "intro") return;
      const ct = ganeshAudio.currentTime;
      const dur = ganeshAudio.duration || 20;
      const progress = dur > 0 ? Math.min(1, Math.max(0, ct / dur)) : 0;
      onGaneshProgress?.(progress, ct, dur);

      // Trigger cycle complete when approaching end of first cycle
      if (!hasTriggeredCycleRef.current && dur > 0 && (ct >= dur - 0.5 || progress >= 0.96)) {
        hasTriggeredCycleRef.current = true;
        onGaneshCycleComplete?.();
      }
    };

    const handleEnded = () => {
      if (stage === "intro") {
        hasTriggeredCycleRef.current = true;
        onGaneshCycleComplete?.();
      }
    };

    const handleLoadedMetadata = () => {
      const dur = ganeshAudio.duration || 20;
      onGaneshProgress?.(0, 0, dur);
    };

    ganeshAudio.addEventListener("timeupdate", handleTimeUpdate);
    ganeshAudio.addEventListener("ended", handleEnded);
    ganeshAudio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      ganeshAudio.removeEventListener("timeupdate", handleTimeUpdate);
      ganeshAudio.removeEventListener("ended", handleEnded);
      ganeshAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [stage, onGaneshCycleComplete, onGaneshProgress]);

  // Attempt instant autoplay on mount + attach unlock listeners on any user gesture
  useEffect(() => {
    // 1. Immediate autoplay attempt
    tryPlayCurrent();

    // 2. Global unlock on any gesture
    const unlockAudio = () => {
      const audio = stage === "intro" ? ganeshAudioRef.current : mainAudioRef.current;
      if (audio && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    };

    window.addEventListener("click", unlockAudio, { passive: true });
    window.addEventListener("touchstart", unlockAudio, { passive: true });
    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });
    window.addEventListener("scroll", unlockAudio, { passive: true, once: true });
    window.addEventListener("mousemove", unlockAudio, { passive: true, once: true });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
      window.removeEventListener("mousemove", unlockAudio);
    };
  }, [tryPlayCurrent, stage, setIsPlaying]);

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
        console.warn("Audio playback error:", err);
      });
    }
  };

  return (
    <>
      <audio
        ref={ganeshAudioRef}
        src={eventDetails.audio.ganeshMantra}
        preload="auto"
        playsInline
      />
      <audio
        ref={mainAudioRef}
        src={eventDetails.audio.mainTheme}
        preload="auto"
        playsInline
      />

      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden sm:block px-3.5 py-1.5 rounded-full bg-wine-800/95 text-gold-200 text-xs font-serif shadow-xl border border-gold-400/50 backdrop-blur-md"
            >
              {isPlaying ? currentAudioTitle : "Audio Paused — Click to Play"}
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
