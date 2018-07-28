const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const liveReloadPlugin = require('webpack-livereload-plugin');



const directoryPath = path.join(__dirname)

module.exports={
    mode:'development',
    entry:{
        app: path.resolve(__dirname, 'src/client/App.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    devServer:{
            port:3000,
            open:true,
            proxy:{
                "/api":"http://localhost:8080"
            }
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
