var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var mainConfig = {
    entry: "./src/index.js",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}

var commonConfig = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [ "@babel/preset-env", "@babel/preset-react" ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}

module.exports = Object.assign({}, mainConfig, commonConfig);