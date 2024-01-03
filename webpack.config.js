const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env', '@babel/preset-react'],
                //     },
                // },
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    },
};
