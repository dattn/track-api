const Webpack = require('webpack');
const path = require('path');

module.exports = {
    target: 'node',
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
    },
    plugins: [
        new Webpack.IgnorePlugin(new RegExp('^(' + [
            'mariasql',
            'mssql',
            'mysql',
            'oracle',
            'oracledb',
            'pg-query-stream',
            'sqlite3',
            'strong-oracle',
            'pg-native',
            'pg'
        ].join('|') + ')$'), /\/knex\//)
    ]
};
