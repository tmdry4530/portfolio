import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seonggyo Jung",
  description: "Seonggyo Jung's portfolio site",
  openGraph: {
    title: "Seonggyo Jung",
    description: "Seonggyo Jung's portfolio site",
    url: "https://chamdom.vercel.app",
    siteName: "Seonggyo Jung's Portfolio",
    images: [
      {
        url: "/og/sky.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
