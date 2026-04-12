import type { Metadata } from "next";
import { Workbench, Silkscreen, Courier_Prime } from "next/font/google";
import "./globals.css";

const workbench = Workbench({
  subsets: ["latin"],
  variable: "--font-workbench",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Bit Sloppy",
  description: "Vibe coding using public data and AI tools to create cool projects.",
  openGraph: {
    title: "Bit Sloppy",
    description: "Vibe coding using public data and AI tools to create cool projects.",
    url: "https://bitsloppy.vercel.app",
    siteName: "Bit Sloppy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${workbench.variable} ${silkscreen.variable} ${courierPrime.variable}`}>
      <body>{children}</body>
    </html>
  );
}
