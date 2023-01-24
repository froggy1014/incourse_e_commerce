module.exports = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['54.249.65.116'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/generate-sitemap-json');
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};
