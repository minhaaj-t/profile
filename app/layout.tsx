// app/layout.tsx

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MiNHAJ - Full Stack Developer | Innovative Web & Mobile Solutions",
  description:
    "Explore the portfolio of MiNHAJ, a Full Stack Developer specializing in web and mobile development. Delivering innovative and user-friendly solutions to solve real-world challenges.",
  keywords:
    "Full Stack Developer, web developer, mobile app developer, React.js expert, Node.js developer, JavaScript solutions, PHP Laravel, cloud solutions, UAE developer, Indian developer, German developer, US developer, Freelancer, website development, custom web applications, UI/UX design, front-end development, back-end development, responsive web design, SEO optimization, digital marketing, app development, database management, API integration, cloud services, Angular developer, Vue.js development, web applications, enterprise software, e-commerce development, MERN stack, JavaScript frameworks, database architecture, mobile-first design, web accessibility, agile development, scrum developer, JavaScript developer, typeScript expert, database optimization, search engine marketing, web analytics, SEO developer, web security, website optimization, full-stack web development, React Native developer, cross-platform development, front-end engineer, back-end engineer, server-side development, web performance optimization, cloud computing, cloud applications, website redesign, E-commerce solutions, custom web development, web app design, digital solutions, UI/UX solutions, server management, tech consulting, cloud-based solutions, business automation, programming languages, software development, web architecture, digital innovation, enterprise apps, progressive web apps, microservices architecture, AI solutions, machine learning applications, IoT developer, serverless architecture, open-source developer, agile methodologies, continuous integration, continuous delivery, deployment strategies, website analytics, web hosting, WordPress developer, Magento development, Laravel solutions, React.js development, e-commerce development, Python development, server optimization, responsive design, web-based applications, technology solutions, startups development, freelance web developer, hire web developer, digital transformation, web tech expert, cloud integration, website development UAE, full-stack web development US, full-stack developer India, developer Germany, web developer in UAE, technology entrepreneur, software engineer, web development portfolio, app designer, Minhaj developer, Minhaj portfolio, Minhaj full stack, Minhaj web developer, Minhaj app developer, Minhaj React, Minhaj Node.js, Minhaj JavaScript, Minhaj PHP, Minhaj Laravel, Minhaj solutions, Minhaj technology, Minhaj programming, Minhaj UAE, Minhaj India, Minhaj Germany, Minhaj USA, Minhaj freelance, Minhaj web design, Minhaj UI/UX, Minhaj SEO, Minhaj digital, Minhaj cloud, Minhaj expert, Minhaj solutions, Minhaj tech, Minhaj software, Minhaj engineer, Minhaj innovation, Minhaj tech consultant, Minhaj development, Minhaj design, Minhaj programming languages, Minhaj web technologies, Minhaj website optimization, Minhaj digital marketing, Minhaj business, Minhaj developer UAE, Minhaj technology expert, Minhaj enterprise solutions, Minhaj software developer, Minhaj developer portfolio, Minhaj cloud computing, Minhaj AI solutions, Minhaj machine learning, Minhaj IoT, Minhaj web apps, Minhaj mobile apps, Minhaj responsive design, Minhaj developer India, Minhaj full-stack developer, Minhaj API integration, Minhaj website development, Minhaj backend development, Minhaj frontend development, Minhaj agile development, Minhaj coding, Minhaj programming expert, Minhaj digital solutions, Minhaj business automation, Minhaj web architecture, Minhaj solutions India, Minhaj start-up, Minhaj web solutions, Minhaj ecommerce, Minhaj professional, Minhaj developer freelancer, Minhaj app design, Minhaj JavaScript expert, Minhaj PHP developer, Minhaj web platform, Minhaj developer USA, Minhaj open-source, Minhaj technology portfolio, Minhaj software engineering, Minhaj UI developer, Minhaj website development UAE, Minhaj website development India, Minhaj developer UAE, Minhaj full stack UAE, Minhaj Ajman developer, Minhaj software UAE, Minhaj web developer UAE, Minhaj IT consultant Ajman, Minhaj cloud solutions UAE, Minhaj app development Germany, Minhaj digital marketing UAE, Minhaj technology consultant Ajman, Minhaj web design UAE, Minhaj AI solutions Germany, Minhaj programming UAE, Minhaj software Germany, Minhaj JavaScript UAE, Minhaj tech expert Ajman, Minhaj cloud developer Germany, Minhaj digital solutions UAE, Minhaj Node.js UAE, Minhaj app development Ajman, Minhaj web optimization UAE, Minhaj freelance Germany, Minhaj PHP UAE, Minhaj backend development Germany, Minhaj front-end developer UAE, Minhaj IT expert Ajman, Minhaj UI/UX UAE, Minhaj freelance developer UAE, Minhaj software developer Ajman, Minhaj AI expert Germany, Minhaj cloud computing UAE, Minhaj technology Ajman, Minhaj solutions Germany, Minhaj web architecture UAE, Minhaj tech developer UAE, Minhaj business solutions Ajman, Minhaj app solutions UAE, Minhaj full-stack Germany, Minhaj mobile apps UAE, Minhaj website development Ajman, Minhaj website design UAE, Minhaj e-commerce UAE, Minhaj programming languages Germany, Minhaj digital transformation UAE",
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
      <head>
        {/* Basic SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />

        {/* Open Graph Meta Tags (for Social Media) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://minhaj.pro/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://scastiel.dev/api/image/minhaaj-t?dark&removeLink"
        />
        <meta property="og:site_name" content="MiNHAJ - Full Stack Developer" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://scastiel.dev/api/image/minhaaj-t?dark&removeLink"
        />

        {/* Apple Touch Icons and Theme Color */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Performance Optimizations */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />

        {/* Font Preload */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          as="style"
        />

        {/* Critical CSS */}
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
