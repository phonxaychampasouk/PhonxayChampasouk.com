module.exports = {
  async exportPathMap(
    defaultPathMap,
    {
      dev, dir, outDir, distDir, buildId,
    },
  ) {
    return { '/': { page: '/' } };
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
