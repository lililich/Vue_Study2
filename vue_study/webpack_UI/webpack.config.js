const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path');
// 导入在内存中生成页面的插件
// 自动在内存中根据指定页面生成一个内存页面
// 自动把打包好的bundle.js追加到页面中去
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 配置文件就是一个JS文件，通过Node中的模块操作，向外暴露一个配置对象

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),//入口，表示使用webpack打包的文件

    output: {//输出文件相关配置
        path:path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    devServer: {// 配置webpack-dev-server命令参数的第二种形式
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    // 只要是插件都要放入plugins里面
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),// 指定模板页面
            filename: "index.html",// 指定生成页面的名称
        }),
        new VueLoaderPlugin(),
    ],
    module: { // 用于配置所有第三方模块的加载器
        rules: [ // 匹配规则
            {test: /\.css$/, use: ['style-loader','css-loader']}, // 配置处理css第三方loader规则，使用正则表达式匹配，调用顺序从右到左
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},// 配置less loader规则
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},// 配置scss loader规则
            {test: /\.(jpg|png|gif|bmp|jepg)$/, use: 'url-loader?limit=5189030&name=[hash:8]-[name].[ext]'}, // 配置处理图片路径loader
            // ？后面是传的参数，limit给定的值是图片的大小单位是byte，如果引用图片大于或等于给定的值，则不会被转为Base64格式的字符串
            // 如果小于就会转换成base64的字符串，name是对图片名称的设置，8位hash值[hash:8]加图片原名[name].[ext]
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},// 配置处理字体文件
            {test: /\.js$/,use:'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {
        alias: { // 修改vue被导入时候的包的路径
            // 'vue$': "vue/dist/vue.js"
        }
    }


};
