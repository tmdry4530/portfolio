import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    url: "https://chamdom.vercel.app",
    description: "Seonggyo Jung's portfolio site",
    siteName: "Seonggyo Jung",
    images: [
      {
        url: "/sky.png",
      },
    ],
  },
  title: "Seonggyo Jung",
  description: "Seonggyo Jung's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
