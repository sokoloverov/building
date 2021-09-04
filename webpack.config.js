const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(mp3|png|jpe?g|gif|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                        },
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'src/index.html') }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        //new BundleAnalyzerPlugin(),
    ],
};