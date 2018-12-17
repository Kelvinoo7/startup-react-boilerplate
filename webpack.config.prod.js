var merge = require("webpack-merge");
var { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
var baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
            reportFilename: "bundle_sizes.html"
        })
    ]
})