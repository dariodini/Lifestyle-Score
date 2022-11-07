const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: './src/app.JS',
    mode: "development",
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                exclude: /(node_modules)/,
                test: /\.(js|jsx)$/i,
                loader: "babel-loader"
            }
        ],
    },
    plugins: [
        new Dotenv()
    ]
};

