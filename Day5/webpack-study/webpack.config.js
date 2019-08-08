// 导入处理路径的模块
const path = require('path')
const webpack = require('webpack')   // 启用热更新第二步
// 导入在内存中生成的HTML页面的插件
// 只要是插件，就一定要放到Plugins的节点上
const htmlWebpackPlugin = require('html-webpack-plugin')
// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.join(__dirname, './dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    devServer:{
        hot:true,   //启用热更新第一步
        open:true,   // 自动打开浏览器
        port:3000,   // 设置启动的运行端口
        contentBase:'src'   // 指定托管的根目录
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象，这是启用热更新第三步
        new htmlWebpackPlugin({   // 创建一个在内存中生产HTML页面的插件
        path: path.join(__dirname, './dist'), // 配置输出的路径
            template: path.join(__dirname, './src/index.html'),  // 指定模板页面，将来会根据指定的页面路径去生成内存中的页面
            filename: 'index.html'  // 指定生成的页面的名称
        })
    ],
    module:{  // 这个节点用于配置所有第三方模块的加载器
        rules: [  // 所有第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },  //配置处理.css文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },  // 配置处理.less文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }  // 配置处理.scss文件的第三方loader规则
        ]
    }
}
// 当我们在控制台执行webpack命令时，webpack做了以下几步：
// 1.首先，我们并没有通过命令的形式，给它指定入口和出口
// 2.webpack就回去项目的根目录中，查找一个叫做webpack.config.js的配置文件
// 3.当找到配置文件后，webpack会去执行解析这个配置文件，当解析完这个配置文件后，就得到了配置文件中导出的配置对象
// 4.当webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建