const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const liveReloadPlugin = require('webpack-livereload-plugin');




const directoryPath = path.join(__dirname)

module.exports={
    mode:'development',
    entry:{
        app: path.resolve(__dirname, 'src/client/App.js'),
        index:path.resolve(__dirname,'src/client/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    devServer:{
            port:3000,
            open:true,
            contentBase:path.resolve(__dirname, "./dist"),
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
                test:/\.css$/,
                use:[{
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:'../'
                    }
                },
                "css-loader"
            ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            'template':'src/client/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:"css/[name].css",
            chunkFilename:"[id].css"
        })
    ]
}
