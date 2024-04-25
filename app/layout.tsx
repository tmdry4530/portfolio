import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Font 설정
const inter = Inter({ subsets: ["latin"] });

// Metadata 타입 정의
interface OGImage {
  url: string;
}

interface OpenGraphMetadata {
  type: string;
  url: string;
  description: string;
  siteName: string;
  images: OGImage[]; // 이미지 배열의 타입을 명확히 선언
}

interface Metadata {
  openGraph: OpenGraphMetadata;
  title: string;
  description: string;
}

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
