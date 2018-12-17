var path = require("path");

var mainConfig = {
    entry: "./src/index.js",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}

var commonConfig = {
    mode: "production"
}

module.exports = Object.assign({}, mainConfig, commonConfig);