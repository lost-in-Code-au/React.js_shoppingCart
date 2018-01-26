const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/Index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 8080
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    { loader: "url-loader" }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin()
    ]
}