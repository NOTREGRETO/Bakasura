import type { Metadata } from "next";
import localFont from "next/font/local";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const mulish = localFont({
  src: [
    { path: "./fonts/mulish/Mulish-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/mulish/Mulish-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./fonts/mulish/Mulish-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/mulish/Mulish-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/mulish/Mulish-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/mulish/Mulish-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/mulish/Mulish-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/mulish/Mulish-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./fonts/mulish/Mulish-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/mulish/Mulish-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/mulish/Mulish-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/mulish/Mulish-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./fonts/mulish/Mulish-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/mulish/Mulish-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-mulish",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Bakasura | Big on South Indian Feast",
  description: "Experience the ultimate South Indian feast at Bakasura. Authentic flavors and premium dining experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mulish.variable} ${greatVibes.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-dark-bg text-white">{children}</body>
    </html>
  );
}
