const path=require('path')
const createVueLoaderOptions=require('./vue-loader.config')
const isDev=process.env.NODE_ENV ==='development'

const config={
    /*webpack的编译平台是web平台*/
    target:'web',
    //入口
    entry:path.join(__dirname,'../client/index.js'),
    //出口
    output: {
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public/'
    },
    module:{
        rules:[
            {
                test:/\.(vue|js|jsx)$/,
               /* loader:'eslint-loader',*/
                exclude:/node_modules/,
                enforce:'pre'
            },
            {   test:/.vue$/,  /*检验文件类型*/
                loader:'vue-loader',
                options:createVueLoaderOptions(isDev)
            },{
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
              //做到代码转成ES5了
               test:/\.js$/,
               loader:'babel-loader',
               exclude:/node_modules/    //排除掉node_modules，优化打包速度
            }, {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,//小于1k的图片自动转成base64格式，并且不会存在实体图片
                            name:'resources/[path][name].[hash:8].[ext]'
                            //outPath :  图片打包后存放的目录
                        }
                    }

                ]

            }
        ]
    }
}



module.exports=config
