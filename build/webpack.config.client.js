const path=require('path')
const HTMLPlugin=require('html-webpack-plugin')
const webpack=require('webpack')
var merge =require('webpack-merge')
const Extractplugin=require('extract-text-webpack-plugin')
const baseConfig=require('./webpack.config.base')
const VueClientPlugin=require('vue-server-renderer/client-plugin');

const isDev=process.env.NODE_ENV ==='development'
const defaultPlugins=[
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV:isDev? '"development"':'"production"'
        }
    }),
    new HTMLPlugin({
      template:path.join(__dirname,'template.html')
    }),
    new VueClientPlugin()

]
const devServer={
    port:'8008',
    host:'0.0.0.0',
    overlay:{
        errors:true
    },
     historyApiFallback:{
       index:'/public/index.html'
     }
    ,hot:true   //开启热更新   会在不刷新页面的情况下直接修改掉，这样就实现了热更新
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
            new webpack.HotModuleReplacementPlugin(),  // // 热替换，热替换不是刷新
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
