var merge = require("webpack-merge");
var baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        port: 9000
    },
    devtool: "source-map"
})