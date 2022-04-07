const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination: process.env.NODE_ENV === 'development' ? 'http://localhost:3333/studio/:path*' : '/studio/index.html'
};

module.exports = {
  images: {
    domains: ['cdn.sanity.io']
  },
  future: {
    webpack5: true
  },
  rewrites: () => [STUDIO_REWRITE],
  async redirects() {
    return [
      {
        source: '/trainings/backend/register',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true
      }
    ];
  }
};
