var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './forJasmineBrowser/test-spec.js',
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },

    resolve: {
      extensions: ['', '.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },
};
