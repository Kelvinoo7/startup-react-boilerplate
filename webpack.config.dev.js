var baseConfig = require("./webpack.config.base");

module.exports = Object.assign({}, baseConfig, {
    mode: "development",
    devServer: {
        port: 9000
    }
})