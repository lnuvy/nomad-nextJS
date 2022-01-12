const API_KEY = "71f43de951c136a669bee61f1fbf4c5b";

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/form/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}