import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface SocialPost {
  id: string;
  image: string;
  caption: string;
  link: string;
}

export const SocialMediaGrid: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevTokens, setPrevTokens] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({ country: "in", language: "en" });

  const fetchPage = useCallback(
    async (token?: string) => {
      setLoading(true);
      setError(null);
      const param = token ? `&page=${token}` : "";
      const { country, language } = filters;
      const url = `https://newsdata.io/api/1/latest?apikey=pub_0dc6f564a2ef41728dfd8ba00a2d5838&q=tech&country=${country}&language=${language}&category=technology${param}`;

      try {
        const res = await fetch(url);
        const json = await res.json();
        if (json.results) {
          const mappedPosts: SocialPost[] = json.results.map(
            (
              item: {
                guid?: string;
                link?: string;
                image_url?: string;
                title?: string;
              },
              i: number
            ) => ({
              id: item.guid || item.link || `${token ?? "first"}-${i}`,
              image: item.image_url || "https://via.placeholder.com/400",
              caption: item.title || "",
              link: item.link || "#",
            })
          );
          setPosts(mappedPosts);
          setNextPage(json.nextPage || null);
          if (token) setPrevTokens((prev) => [...prev, token]);
          else setPrevTokens([]);
        }
      } catch (e) {
        console.error(e);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    },
    [filters]
  );

  useEffect(() => {
    fetchPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const currentPage = prevTokens.length + 1;

  return (
    <div className="p-4">
      {/* Filters on right side */}
      <div className="flex justify-end gap-4 mb-4">
        <select
          className="border rounded px-3 py-2 
            bg-white text-gray-900 
            dark:bg-gray-800 dark:text-gray-100 
            border-blue-500 dark:border-blue-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        >
          <option value="in">India</option>
          <option value="ae">UAE</option>
          <option value="qa">Qatar</option>
          <option value="om">Oman</option>
        </select>
        <select
          className="border rounded px-3 py-2 
            bg-white text-gray-900 
            dark:bg-gray-800 dark:text-gray-100 
            border-blue-500 dark:border-blue-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          value={filters.language}
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
        >
          <option value="en">English</option>
          <option value="ml">Malayalam</option>
        </select>
      </div>

      {loading && <p className="text-center text-gray-700 dark:text-gray-300">Loading...</p>}
      {error && <p className="text-center text-red-600 dark:text-red-400">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-square overflow-hidden rounded shadow group"
          >
            <Image
              src={p.image}
              alt={p.caption}
              fill
              className="object-cover w-full h-full group-hover:scale-110 transition"
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white text-sm">{p.caption}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2 flex-wrap items-center">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50
            bg-white text-blue-600 border-blue-500
            dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400
            hover:bg-blue-100 dark:hover:bg-blue-900
            transition"
          disabled={prevTokens.length === 0}
          onClick={() => {
            const prevToken = prevTokens.slice(-2, -1)[0];
            setPrevTokens(prevTokens.slice(0, -1));
            fetchPage(prevToken);
          }}
        >
          Previous
        </button>

        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`px-3 py-1 border rounded cursor-default
              ${i + 1 === currentPage 
                ? "bg-blue-500 text-white border-blue-600 dark:bg-blue-600 dark:border-blue-700"
                : "bg-white text-blue-600 border-blue-500 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400"
              }
              transition`}
          >
            {i + 1}
          </span>
        ))}

        <button
          className="px-4 py-2 border rounded disabled:opacity-50
            bg-white text-blue-600 border-blue-500
            dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400
            hover:bg-blue-100 dark:hover:bg-blue-900
            transition"
          disabled={!nextPage}
          onClick={() => nextPage && fetchPage(nextPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
