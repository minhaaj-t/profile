import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MiNHAJ - Full Stack Developer | Innovative Web & Mobile Solutions",
  description:
    "Explore the portfolio of MiNHAJ, a Full Stack Developer specializing in web and mobile development. Delivering innovative and user-friendly solutions to solve real-world challenges.",
  keywords: "...", // keep your keywords here
  author: "MiNHAJ",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
