// app/layout.tsx

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammed Minhaj Mahroof - Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Muhammed Minhaj Mahroof, a passionate Full Stack Developer based in the UAE, offering web development, mobile apps, React.js, Node.js, JavaScript, PHP, Laravel, and cloud solutions. Specializing in creating seamless, user-centric applications that solve real-world problems.",
  author: "MiNHAJ", // Author
  date: "2024-12-24", // Publication date

  openGraph: {
    title: "Muhammed Minhaj Mahroof - Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Muhammed Minhaj Mahroof, a passionate Full Stack Developer dedicated to creating seamless, user-centric applications that solve real-world problems.",
    url: "https://minhaj.pro/",
    site_name: "Muhammed Minhaj Mahroof",
    images: [
      {
        url: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
        width: 1200,
        height: 630,
        alt: "Muhammed Minhaj Mahroof - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@minhaj_pro",
    title: "Muhammed Minhaj Mahroof - Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Muhammed Minhaj Mahroof, a passionate Full Stack Developer dedicated to creating seamless, user-centric applications that solve real-world problems.",
    image: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
  },
  linkedin: {
    image: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink", // LinkedIn meta image
  },
};

export const viewport = {
  themeColor: "#000000", // Set default theme color for light mode
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* Dark Mode Theme Color */}
      <meta
        name="theme-color"
        content="#121212"
        media="(prefers-color-scheme: dark)"
      />
      {/* Light Mode Theme Color */}
      <meta name="theme-color" content="#FFFFFF" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
