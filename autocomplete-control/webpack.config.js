var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './components/controller/autocomplete-control.js',
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },

    resolve: {
      extensions: ['', '.js']
    },

    devtool: 'source-map'
};
