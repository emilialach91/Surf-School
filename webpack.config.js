const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
const DefinePlugin = require('@wepy/plugin-define');
require('dotenv').config()
// const api_key = process.env.api_key;

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    node: {
        fs: "empty"
     },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: 'images/',
                      name: '[name].[ext]',
                      publicPath: ''
                    }
                  }
                ]
              },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/about.html",
            filename: "./about.html",
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            template: "./src/teachers.html",
            filename: "./teachers.html",
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            template: "./src/price.html",
            filename: "./price.html",
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            template: "./src/contact.html",
            filename: "./contact.html",
            // inject: false,
            // apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap`,
            chunks: ['app']


        }),
        new MiniCssExtractPlugin ({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/styles/images", to: "images" },
            ],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
]}

