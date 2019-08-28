const path=require('path');
const webpack=require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry:'./src/main.js',
    output:{
        //输出路径
        path: path.resolve(__dirname, 'dist'),
        //指定输出文件的名称
        filename: 'bundle.js'
    },
    devServer:{
        open:true,//自动打开浏览器
        port:3002,//启动端口
        contentBase:'src',//指定托管的根目录
        hot:true,//启动热跟新
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},//处理.css文件的第三方loader 规则
            {test:/\.(jpg|png|bmp|jpep|gif)$/,use:'url-loader?limit=51295&name=[hash:8]-[name].[ext]'},//处理图片路径的loader
            {test:/\.(ttf|eot|svg|woff|woff2)/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{ //修改导入 vue的路径
            // "vue$":"vue/dist/vue.js"
        }
        
    }
}