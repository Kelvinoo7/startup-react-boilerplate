var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [ ".js", ".css" ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: [
                                    "last 2 versions",
                                    "not dead",
                                    "not < 2%",
                                    "not ie 11"
                                ],
                                useBuiltIns: "entry"
                            } ],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "react-hot-loader/babel",
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-syntax-dynamic-import"
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}