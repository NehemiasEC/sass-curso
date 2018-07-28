const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const liveReloadPlugin = require('webpack-livereload-plugin');



module.exports={
    mode:'development',
    entry:'./src/client/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                use:['style-loader','css-loader'],
                test:/\.css$/
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            'template':'src/client/index.html'
        })
    ]
}