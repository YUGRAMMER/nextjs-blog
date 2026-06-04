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
  metadataBase: new URL("https://yujinbyun.dev/nextjs-project-1"),
  title: {
    default: "변유진 | 프론트엔드 개발자",
    template: "%s | 변유진",
  },
  description: "프론트엔드 개발자 변유진의 기록 블로그",
  openGraph: {
    siteName: "변유진",
    type: "website",
    locale: "ko_KR",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
