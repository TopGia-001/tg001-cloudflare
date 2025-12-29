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
  title: "TopGia",
  description: "TopGia",

  icons: {
    icon: "/favicon-topgia.jpeg",
    shortcut: "/favicon-topgia.jpeg",
    apple: "/favicon-topgia.jpeg",
  },

  openGraph: {
    title: "Rinh Top Gia - Lộc Đầy Nhà",
    description: "Tham gia ngay để có cơ hội nhận những phần quà vô cùng hấp dẫn cùng Top Gia #rinhtopgia #locdaynha",
    url: "https://locdaynha.topgiahomecare.vn",
    siteName: "TopGia",
    images: [
      {
        url: "https://locdaynha.topgiahomecare.vn/og-topgia.jpeg",
        width: 1200,
        height: 630,
        alt: "TopGia preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
