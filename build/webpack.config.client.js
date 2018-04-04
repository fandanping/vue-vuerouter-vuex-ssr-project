const path=require('path')
const HTMLPlugin=require('html-webpack-plugin')
const webpack=require('webpack')
var merge =require('webpack-merge')
const Extractplugin=require('extract-text-webpack-plugin')
const baseConfig=require('./webpack.config.base')

const isDev=process.env.NODE_ENV ==='development'
const defaultPlugins=[
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV:isDev? '"development"':'"production"'
        }
    }),
    new HTMLPlugin()

]
const devServer={
    port:'8008',
    host:'0.0.0.0',
    overlay:{
        errors:true
    }
    ,hot:true
}
let config
if(isDev){
    //开发环境
    config=merge(baseConfig,{
        devtool: '#cheap-module-eval-source-map',
        module:{
            rules:[
                {
                    test:/\.styl/,
                    use:[
                        'vue-style-loader',   /*不用刷新自动改变样式*/
                       /*  'css-loader',*/
                        {
                            loader:'css-loader',
                            options:{
                                module:true,
                                localIdentName:isDev? '[path]-[name]-[hash:base64:5]':'[hash:base64:5]'
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        'stylus-loader'
                    ]
                }
            ]
        },
        devServer,
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])

    })

}else{
    //正式环境
    config=merge(baseConfig,{
        entry:{
            app:path.join(__dirname,'../client/index.js'),
            vendor:['vue']
        },
        output:{
            filename:'[name].[chunkhash:8].js'
        },
        module:{
            rules:[
                {
                    test:/\.styl/,
                    use:Extractplugin.extract({
                        fallback:'vue-style-loader',
                        use:[

                            'css-loader',
                            {
                                loader:'postcss-loader',
                                options:{
                                    sourceMap:true
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                }
            ]
        },
        plugins:defaultPlugins.concat([
            new Extractplugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name:'verdor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:'runtime'
            })
        ])

    })

}
module.exports=config