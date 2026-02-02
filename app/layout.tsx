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
  title: "JR新宿駅 出口案内 | Dexit",
  description:
    "JR新宿駅の出口案内アプリ。バスタ新宿、NEWoMan、西口、東口、伊勢丹など、目的地別に最適な改札と出口をわかりやすく案内します。",
  keywords: [
    "新宿駅",
    "出口",
    "案内",
    "JR",
    "バスタ新宿",
    "NEWoMan",
    "伊勢丹",
    "改札",
    "道順",
    "行き方",
  ],
  openGraph: {
    title: "JR新宿駅 出口案内 | Dexit",
    description:
      "JR新宿駅の出口案内。目的地別に最適な改札と出口をわかりやすく案内。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "JR新宿駅 出口案内 | Dexit",
    description:
      "JR新宿駅の出口案内。目的地別に最適な改札と出口をわかりやすく案内。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
