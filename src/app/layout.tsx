import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_SC({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "应龙 · 山鬼研究语料",
  description: "先秦楚语境、荆楚文化、屈原与楚辞（《离骚》《九歌》《山鬼》）研究起步包",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${serif.variable} font-body antialiased`}
        style={
          {
            "--font-display": "var(--font-body)",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
