import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "세현ICT — Smarter IT Solution Provider",
  description: "공간정보 기반의 IT 솔루션으로 고객의 디지털 전환을 함께합니다. SmartGeoKit, GIS Engine, CAD Compare, CAD View.",
  keywords: "세현ICT, GIS, 공간정보, IT솔루션, SmartGeoKit, CAD, 디지털전환",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
