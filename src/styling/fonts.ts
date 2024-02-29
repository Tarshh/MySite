import { Inter, PT_Serif } from "next/font/google";

export const inter = Inter({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-PT-Serif",
});
