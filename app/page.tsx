"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CurtainOpening } from "@/components/CurtainOpening";
import { GaneshIntro } from "@/components/GaneshIntro";
import { PageTransition } from "@/components/PageTransition";
import { Navigation } from "@/components/Navigation";
import { FloatingPetals } from "@/components/FloatingPetals";
import { MusicPlayer } from "@/components/MusicPlayer";
import { InvitationHero } from "@/components/InvitationHero";
import { RingExchange } from "@/components/RingExchange";
import { DateSection } from "@/components/DateSection";
import { VenueSection } from "@/components/VenueSection";
import { ClosingSection } from "@/components/ClosingSection";
import { Footer } from "@/components/Footer";
import { FloralCorner } from "@/components/FloralDecorations";

export default function Home() {
  const [stage, setStage] = useState<"curtain" | "intro" | "transitioning" | "invitation">("curtain");
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [isGaneshCycleComplete, setIsGaneshCycleComplete] = useState(false);
  const [ganeshAudioProgress, setGaneshAudioProgress] = useState(0);

  const handleCurtainOpen = () => {
    setIsPlayingMusic(true);
    setStage("intro");
  };

  const handleEnterInvitation = () => {
    setIsPlayingMusic(true);
    setStage("transitioning");
  };

  const handleTransitionComplete = () => {
    setStage("invitation");
  };

  return (
    <main className="min-h-screen relative bg-paper-texture text-charcoal-text overflow-hidden selection:bg-wine selection:text-gold-200">
      {/* Universal Floating Petals & Gold Dust */}
      <FloatingPetals enabled={true} />

      {/* Background Music Controller (Ganesh Mantra on Page 1, Wedding Theme on Page 2) */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
        stage={stage}
        onGaneshCycleComplete={() => setIsGaneshCycleComplete(true)}
        onGaneshProgress={(progress) => setGaneshAudioProgress(progress)}
      />

      <AnimatePresence mode="wait">
        {/* Stage 0: Royal Velvet Curtain Opening with 'Click to Open' */}
        {stage === "curtain" && (
          <CurtainOpening key="curtain" onOpen={handleCurtainOpen} />
        )}

        {/* Page 1: Cinematic Ganesh Intro with Sacred Mantra */}
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <GaneshIntro
              onEnter={handleEnterInvitation}
              isFirstCycleComplete={isGaneshCycleComplete}
              audioProgress={ganeshAudioProgress}
              isPlaying={isPlayingMusic}
            />
          </motion.div>
        )}

        {/* Transition State: Blooming Golden Mandala */}
        {stage === "transitioning" && (
          <PageTransition key="transition" onComplete={handleTransitionComplete} />
        )}

        {/* Page 2: Main Engagement Invitation Experience */}
        {stage === "invitation" && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full relative"
          >
            {/* Top Corners Floral Decoration */}
            <FloralCorner position="top-left" className="opacity-75" />
            <FloralCorner position="top-right" className="opacity-75" />

            {/* Floating Navigation */}
            <Navigation />

            {/* Main Content Sections */}
            <div className="pt-8 sm:pt-14">
              <InvitationHero />
              <RingExchange />
              <DateSection />
              <VenueSection />
              <ClosingSection />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
