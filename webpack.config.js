var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        'bootstrap-loader',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            // es6, JSX
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            // SASS as CSS modules
            {
                test: /\.scss$/,
                loaders: [
                    "style",
                    "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
                    "sass"
                ]
            },
            // fonts
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            },

            // Bootstrap 3
            {test: /bootstrap-sass[\\\/]assets[\\\/]javascripts[\\\/]/, loader: 'imports?jQuery=jquery'}
            /*{
                test: path.resolve(__dirname, "node_modules", "boostrap-sass", "assets", "javascript"),
                loader: 'imports?jQuery=jquery'
            }*/
        ]
    }
}