import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display, Great_Vibes, Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaishnavi-satyam-engagement.vercel.app"),
  title: "Vaishnavi & Satyam | Engagement Ceremony",
  description:
    "Join us in celebrating the auspicious engagement ceremony of Vaishnavi Keserwani & Satyam Keserwani on Wednesday, 14th October 2026 at Hotel Swagat Grand, Prayagraj.",
  keywords: [
    "Vaishnavi and Satyam Engagement",
    "Vaishnavi Keserwani",
    "Satyam Keserwani",
    "Engagement Invitation",
    "Hotel Swagat Grand Prayagraj",
    "Indian Wedding Invitation",
  ],
  authors: [{ name: "Keserwani Family" }],
  openGraph: {
    title: "Vaishnavi & Satyam | Engagement Ceremony",
    description:
      "We joyfully invite you to the Engagement Ceremony of Vaishnavi Keserwani & Satyam Keserwani on 14th October 2026.",
    url: "https://vaishnavi-satyam-engagement.vercel.app",
    siteName: "Vaishnavi & Satyam Engagement Invitation",
    images: [
      {
        url: "/images/invitation-reference.png",
        width: 1200,
        height: 630,
        alt: "Vaishnavi & Satyam Engagement Invitation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishnavi & Satyam | Engagement Ceremony",
    description:
      "Join us in celebrating the engagement ceremony on 14th October 2026 at Hotel Swagat Grand, Prayagraj.",
    images: ["/images/invitation-reference.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#70112B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${inter.variable} ${notoDevanagari.variable}`}
    >
      <body className="antialiased selection:bg-wine selection:text-gold-200">
        {children}
      </body>
    </html>
  );
}
