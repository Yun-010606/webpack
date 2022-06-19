const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: "./src/main.js", // 入口
    output: {
        path: path.join(__dirname, "lib"), // 出口路径
        filename: "webpack.ck.js",// 出口文件名
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            attributes: {
                id: "target",
                "data-target": "example",
              },
        }),
        new HtmlWebpackPlugin({
            // 绝对路径
            template: path.join(__dirname, "public/index.html")
        }),
        new VueLoaderPlugin(),
        
    ],
    devServer: {
        port: 3000,
        open: true
    },
    module: {
        rules: [
            // {
            //     test:/\.css$/i,
            //     use:["style-loader","css-loader"],
            // },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader", "less-loader"]
            },
            {
                test: /\.(gif|png|jpeg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024
                    }
                },
                generator: {
                    filename: 'images/[hash:6][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/i,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}