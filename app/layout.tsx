import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veloura Naturals | The Tactile Alchemist",
  description:
    "Organic, cold-pressed castor oil for transformative hair growth, luscious lashes, and radiant skin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${notoSerif.variable} ${manrope.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}