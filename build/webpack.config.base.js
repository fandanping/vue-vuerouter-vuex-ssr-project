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
        path:path.join(__dirname,'../dist')
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
               test:/\.js$/,
               loader:'babel-loader',
               exclude:/node_modules/
            }, {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'resources/[path][name].[hash:8].[ext]'
                        }
                    }

                ]

            }
        ]
    }
}



module.exports=config
