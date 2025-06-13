const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config; // ❌ This is ESM, which breaks on Netlify
