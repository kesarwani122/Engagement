# Vaishnavi & Satyam — Engagement Ceremony Digital Invitation 💍✨

A luxury, interactive, production-ready Indian engagement invitation website crafted with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌸 Visual Experience & Design Highlights

- **Cinematic Lord Ganesha Entry (Page 1)**:
  - Serene royal paper background with golden mandala halo.
  - Authentic standalone high-resolution Lord Ganesha iconography.
  - Sacred Sanskrit invocation with Devanagari typography (`॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ॥`).
  - **Background Audio**: Plays the sacred *Vakratunda Mahakaya Ganesh Mantra* in the background.
  - Interactive *"BEGIN THE CELEBRATION"* entrance button with golden shimmer.

- **Cinematic Golden Portal Transition**:
  - Expanding golden mandala light rays blooming into the celebration story.

- **Main Invitation Experience (Page 2)**:
  - **Royal Hero Section**: Auspicious blessings from Mr. Saroj Kumar Keserwani & Mrs. Shalini Keserwani.
  - **Centerpiece Couple Typography**: Elegant handwritten calligraphy for *Vaishnavi Keserwani & Satyam Keserwani*.
  - **Animated Ring Exchange Scene**: Illustrated sherwani & lehenga hands exchanging the solitaire diamond engagement ring with dynamic sparkle burst and interactive replay.
  - **Save the Date & Live Muhurat Countdown**: Real-time days/hours/minutes/seconds countdown targeting 14th October 2026, 7:00 PM IST with 1-click Google Calendar integration.
  - **Grand Venue & Instant Mobile QR**: Hotel Swagat Grand, Ghoorpur, Prayagraj with Google Maps navigation and QR scan modal.
  - **Closing Gratitude & Blessings**: *"Your presence and blessings will make this beautiful beginning even more special."* with warm regards from Mr. Saroj Kumar Keserwani, Mrs. Shalini Keserwani & the Keserwani family.
  - **Ambient Shehnai & Sitar Theme Audio**: Non-blocking floating vinyl player with play/pause/mute controls.
  - **Floating Petal Engine**: Lightweight 60fps canvas engine with pink bougainvillea petals and gold dust.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Motion**: React 19, Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Typography**: Playfair Display, Cormorant Garamond, Great Vibes, Inter, Noto Serif Devanagari

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001`) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ☁️ Deployment Guide

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com).
2. Set Build Command to: `npm run build`
3. Set Publish Directory to: `.next` (or use `@netlify/plugin-nextjs`).
4. Click **"Deploy Site"**.

---

## 📜 Event Details Configuration

All event details (names, dates, times, venue coordinates, maps URL, audio tracks) are centralized in [`lib/config.ts`](./lib/config.ts) for effortless customization.
