// next-seo.config.js
const seoConfig = {
  title: "Minhaj Pro | Full Stack Developer & SEO Expert",
  description:
    "Build lightning-fast websites with Minhaj Pro using Next.js, SEO best practices, and modern web technologies.",
  canonical: "https://minhaj.pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minhaj.pro",
    site_name: "Minhaj Pro",
    images: [
      {
        url: "https://minhaj.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minhaj Pro Banner",
      },
    ],
  },
  twitter: {
    handle: "@minhajpro",
    site: "@minhajpro",
    cardType: "summary_large_image",
  },
};

export default seoConfig;
