import React from "react";

interface SocialPost {
  id: number;
  image: string;
  caption: string;
}

interface SocialMediaGridProps {
  posts: SocialPost[];
}

export const SocialMediaGrid: React.FC<SocialMediaGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative overflow-hidden rounded-lg aspect-square"
        >
          <img
            src={post.image}
            alt={post.caption}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm">{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
