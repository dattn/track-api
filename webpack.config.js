require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [ nodeExternals() ],
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader'
            }],
        }, ],
    }
};
