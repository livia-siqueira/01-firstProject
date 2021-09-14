const path = require('path')
const ReactRefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')



const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode:  isDevelopment ? 'development': 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebPackPlugin(),
        
    ].filter(Boolean),
    module: {
        rules: [ 
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //babel nao entende type
                    options:{
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel'),
                        ].filter(Boolean),
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader', 'sass-loader'],
            }
        
        ],
    }
};