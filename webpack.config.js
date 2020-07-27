const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const srcDir = path.resolve(__dirname, 'src');
const dstDir = path.resolve(__dirname, 'dist');
const pages = ['index'];

const entry = {};
pages.forEach((page) => entry[page] = srcDir + '/js/' + page + '.js');
module.exports = {
    mode: dev ? 'development' : 'production',
    entry,
    output: {
        path: dstDir,
        filename: dev ? 'static/[name].js' : 'static/[name].[contentHash].js',
        chunkFilename: 'static/[id].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ico|gif|png|jpg|jpeg|svg|webp|webm|mp4|woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // publicPath: (url) => './' + url,
                            outputPath: 'static/',
                            name: !dev ? '[hash:10].[ext]' : '[path][name].[ext]',
                            emitFile: true,
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: dev ? 'static/[name].css' : 'static/[name].[contentHash].css',
            chunkFilename: 'static/[id].css',
        }),
        ...pages.map((page) => new HtmlWebpackPlugin({
            filename: page + '.html',
            template: srcDir + '/html/' + page + '.html',
            chunks: [page],
        })),
    ],
};
