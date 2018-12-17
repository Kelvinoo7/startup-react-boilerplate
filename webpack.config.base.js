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
                    presets: [ "@babel/preset-env", "@babel/preset-react" ],
                    plugins: [ "@babel/plugin-proposal-class-properties" ]
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