import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css"; // Import AOS styles

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
  google: {
    search: {
      country: ["AE", "DE", "US", "IN"],
      keywords: [
        "Full Stack Developer",
        "web developer",
        "mobile app developer",
        "React.js expert",
        "Node.js developer",
        "JavaScript solutions",
        "PHP Laravel",
        "cloud solutions",
        "UAE developer",
        "Indian developer",
        "German developer",
        "US developer",
        "Freelancer",
        "website development",
        "custom web applications",
        "UI/UX design",
        "front-end development",
        "back-end development",
        "responsive web design",
        "SEO optimization",
        "digital marketing",
        "app development",
        "database management",
        "API integration",
        "cloud services",
        "Angular developer",
        "Vue.js development",
        "web applications",
        "enterprise software",
        "e-commerce development",
        "MERN stack",
        "JavaScript frameworks",
        "database architecture",
        "mobile-first design",
        "web accessibility",
        "agile development",
        "scrum developer",
        "JavaScript developer",
        "typeScript expert",
        "database optimization",
        "search engine marketing",
        "web analytics",
        "SEO developer",
        "web security",
        "website optimization",
        "full-stack web development",
        "React Native developer",
        "cross-platform development",
        "front-end engineer",
        "back-end engineer",
        "server-side development",
        "web performance optimization",
        "cloud computing",
        "cloud applications",
        "website redesign",
        "E-commerce solutions",
        "custom web development",
        "web app design",
        "digital solutions",
        "UI/UX solutions",
        "server management",
        "tech consulting",
        "cloud-based solutions",
        "business automation",
        "programming languages",
        "software development",
        "web architecture",
        "digital innovation",
        "enterprise apps",
        "progressive web apps",
        "microservices architecture",
        "AI solutions",
        "machine learning applications",
        "IoT developer",
        "serverless architecture",
        "open-source developer",
        "agile methodologies",
        "continuous integration",
        "continuous delivery",
        "deployment strategies",
        "website analytics",
        "web hosting",
        "WordPress developer",
        "Magento development",
        "Laravel solutions",
        "React.js development",
        "e-commerce development",
        "Python development",
        "server optimization",
        "responsive design",
        "web-based applications",
        "technology solutions",
        "startups development",
        "freelance web developer",
        "hire web developer",
        "digital transformation",
        "web tech expert",
        "cloud integration",
        "website development UAE",
        "full-stack web development US",
        "full-stack developer India",
        "developer Germany",
        "web developer in UAE",
        "technology entrepreneur",
        "software engineer",
        "web development portfolio",
        "app designer",
        "Minhaj developer",
        "Minhaj portfolio",
        "Minhaj full stack",
        "Minhaj web developer",
        "Minhaj app developer",
        "Minhaj React",
        "Minhaj Node.js",
        "Minhaj JavaScript",
        "Minhaj PHP",
        "Minhaj Laravel",
        "Minhaj solutions",
        "Minhaj technology",
        "Minhaj programming",
        "Minhaj UAE",
        "Minhaj India",
        "Minhaj Germany",
        "Minhaj USA",
        "Minhaj freelance",
        "Minhaj web design",
        "Minhaj UI/UX",
        "Minhaj SEO",
        "Minhaj digital",
        "Minhaj cloud",
        "Minhaj expert",
        "Minhaj solutions",
        "Minhaj tech",
        "Minhaj software",
        "Minhaj engineer",
        "Minhaj innovation",
        "Minhaj tech consultant",
        "Minhaj development",
        "Minhaj design",
        "Minhaj programming languages",
        "Minhaj web technologies",
        "Minhaj website optimization",
        "Minhaj digital marketing",
        "Minhaj business",
        "Minhaj developer UAE",
        "Minhaj technology expert",
        "Minhaj enterprise solutions",
        "Minhaj software developer",
        "Minhaj developer portfolio",
        "Minhaj cloud computing",
        "Minhaj AI solutions",
        "Minhaj machine learning",
        "Minhaj IoT",
        "Minhaj web apps",
        "Minhaj mobile apps",
        "Minhaj responsive design",
        "Minhaj developer India",
        "Minhaj full-stack developer",
        "Minhaj API integration",
        "Minhaj website development",
        "Minhaj backend development",
        "Minhaj frontend development",
        "Minhaj agile development",
        "Minhaj coding",
        "Minhaj programming expert",
        "Minhaj digital solutions",
        "Minhaj business automation",
        "Minhaj web architecture",
        "Minhaj solutions India",
        "Minhaj start-up",
        "Minhaj web solutions",
        "Minhaj ecommerce",
        "Minhaj professional",
        "Minhaj developer freelancer",
        "Minhaj app design",
        "Minhaj JavaScript expert",
        "Minhaj PHP developer",
        "Minhaj web platform",
        "Minhaj developer USA",
        "Minhaj open-source",
        "Minhaj technology portfolio",
        "Minhaj software engineering",
        "Minhaj UI developer",
        "Minhaj website development UAE",
        "Minhaj website development India",
        "Minhaj developer UAE",
        "Minhaj full stack UAE",
        "Minhaj Ajman developer",
        "Minhaj software UAE",
        "Minhaj web developer UAE",
        "Minhaj IT consultant Ajman",
        "Minhaj cloud solutions UAE",
        "Minhaj app development Germany",
        "Minhaj digital marketing UAE",
        "Minhaj technology consultant Ajman",
        "Minhaj web design UAE",
        "Minhaj AI solutions Germany",
        "Minhaj programming UAE",
        "Minhaj software Germany",
        "Minhaj JavaScript UAE",
        "Minhaj tech expert Ajman",
        "Minhaj cloud developer Germany",
        "Minhaj digital solutions UAE",
        "Minhaj Node.js UAE",
        "Minhaj app development Ajman",
        "Minhaj web optimization UAE",
        "Minhaj freelance Germany",
        "Minhaj PHP UAE",
        "Minhaj backend development Germany",
        "Minhaj front-end developer UAE",
        "Minhaj IT expert Ajman",
        "Minhaj UI/UX UAE",
        "Minhaj freelance developer UAE",
        "Minhaj software developer Ajman",
        "Minhaj AI expert Germany",
        "Minhaj cloud computing UAE",
        "Minhaj technology Ajman",
        "Minhaj solutions Germany",
        "Minhaj web architecture UAE",
        "Minhaj tech developer UAE",
        "Minhaj business solutions Ajman",
        "Minhaj app solutions UAE",
        "Minhaj full-stack Germany",
        "Minhaj mobile apps UAE",
        "Minhaj website development Ajman",
        "Minhaj website design UAE",
        "Minhaj e-commerce UAE",
        "Minhaj programming languages Germany",
        "Minhaj digital transformation UAE",
      ],
    },
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
        {/* Meta Tags for SEO */}
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

        {/* Apple iOS Optimization */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="MiNHAJ Portfolio" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

        {/* Windows Optimization */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="/icons/mstile-150x150.png"
        />
        <meta name="application-name" content="MiNHAJ Portfolio" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* Icons for All Devices */}
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="manifest" href="/manifest.json" />

        {/* AOS for Animation */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
        <script>
          {`
            AOS.init({
              duration: 1200, // Animation duration
            });
          `}
        </script>
      </body>
    </html>
  );
}
