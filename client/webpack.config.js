const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: `${SRC_DIR}/app/index.jsx`,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                },
            },
            {
                test: [/\.scss$/, /\.css$/],
                loader: 'style-loader',
            },
            {
                test: [/\.scss$/, /\.css$/],
                loader: 'css-loader',
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader',
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/index.html',
                to: './index.html',
            },
        ])
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

module.exports = config;