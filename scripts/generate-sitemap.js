import fs from "fs";
import globby from "globby";

(async () => {
  const pages = await globby([
    "app/**/*.tsx",
    "!app/**/_*.tsx",
    "!app/api",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const path = page
        .replace("app", "")
        .replace("/page.tsx", "")
        .replace(/\/index$/, "")
        .replace(".tsx", "");
      const route = `https://minhaj.pro${path}`;
      return `
    <url>
      <loc>${route}</loc>
    </url>`;
    })
    .join("")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
