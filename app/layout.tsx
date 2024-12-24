import React from "react";
import Script from "next/script"; // Import Script component from Next.js to load external JS
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MiNHAJ - Full Stack Developer | Innovator & Tech Enthusiast",
  description:
    "MiNHAJ, a versatile Full Stack Developer, Innovator, and Tech Enthusiast based in the UAE. Specializing in web development, mobile apps, React.js, Node.js, PHP, Laravel, and cloud solutions, MiNHAJ creates innovative, user-focused applications that solve real-world problems.",
  author: "MiNHAJ",
  date: "2024-12-24",
  openGraph: {
    title: "MiNHAJ - Full Stack Developer | Innovator & Tech Enthusiast",
    description:
      "Discover MiNHAJ, an experienced Full Stack Developer and Innovator offering cutting-edge web and app solutions, from concept to delivery.",
    url: "https://minhaj.pro/",
    site_name: "MiNHAJ - Full Stack Developer Portfolio",
    images: [
      {
        url: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
        width: 1200,
        height: 630,
        alt: "MiNHAJ - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@minhaj_pro",
    title: "MiNHAJ - Full Stack Developer | Innovator & Tech Enthusiast",
    description:
      "Explore MiNHAJ's portfolio to see how he combines innovation and technical expertise to create seamless, user-centric web and app solutions.",
    image: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
  },
  linkedin: {
    image: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="MiNHAJ, Full Stack Developer, UAE Developer, Web Development, Mobile App Development, React.js, Node.js, Laravel, PHP, Cloud Solutions, Tech Innovator"
        />
        <meta name="author" content="MiNHAJ" />
        <meta
          name="theme-color"
          content="#121212"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#FFFFFF"
          media="(prefers-color-scheme: light)"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={inter.className}>
        {children}
        {/* Async Script for AOS (removed AOS initialization logic) */}
        <Script
          src="https://unpkg.com/aos@2.3.4/dist/aos.js"
          strategy="afterInteractive" // Load script after page interaction
        />
      </body>
    </html>
  );
}
