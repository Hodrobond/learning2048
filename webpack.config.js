/**
 * Created by adam.kazberuk on 12/5/2016.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};