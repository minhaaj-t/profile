import React, { useEffect, useState } from "react";

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

  const fetchPage = async (token?: string) => {
    setLoading(true);
    setError(null);
    const param = token ? `&page=${token}` : "";
    const { country, language } = filters;
    const url = `https://newsdata.io/api/1/latest?apikey=pub_0dc6f564a2ef41728dfd8ba00a2d5838&q=tech&country=${country}&language=${language}&category=technology${param}`;

    try {
      const res = await fetch(url);
      const json = await res.json();
      if (json.results) {
        setPosts(
          json.results.map((item: any, i: number) => ({
            id: item.guid || item.link || `${token}-${i}`,
            image: item.image_url || "https://via.placeholder.com/400",
            caption: item.title || "",
            link: item.link || "#",
          }))
        );
        if (token) setPrevTokens([...prevTokens, token]);
        else setPrevTokens([]);
        setNextPage(json.nextPage || null);
      } else {
        setPosts([]);
        setNextPage(null);
        setError("No results found.");
      }
    } catch (e: any) {
      console.error(e);
      setError("Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage();
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
          <div
            key={p.id}
            className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            onClick={() => window.open(p.link, "_blank")}
          >
            <img
              src={p.image}
              alt={p.caption}
              className="object-cover w-full h-full hover:scale-110 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition flex items-end p-4">
              <p className="text-white text-sm">{p.caption}</p>
            </div>
          </div>
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
