import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seonggyo Jung",
  description: "Seonggyo Jung's portfolio site",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "Seonggyo Jung",
    description: "Seonggyo Jung's portfolio site",
    url: "https://chamdom.vercel.app/",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
