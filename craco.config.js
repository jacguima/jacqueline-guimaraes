module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Remove CssMinimizerPlugin from minimizers
      webpackConfig.optimization.minimizer =
        webpackConfig.optimization.minimizer.filter(
          (plugin) => plugin.constructor.name !== "CssMinimizerPlugin",
        );

      return webpackConfig;
    },
  },
};
