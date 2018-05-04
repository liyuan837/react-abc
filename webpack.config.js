const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})

module.exports={
    mode:'development',
    plugins: [
        htmlPlugin
    ],
    //webpack默认只能打包处理 .js 后缀名类型的文件；这里添加所有第三方 模块的配置规则
    module:{
        rules:[ //第三方匹配规则
            {
                test:/\.js|jsx$/,
                use:'babel-loader',
                //千万别忘记添加 exclude 项
                exclude:/node_modules/
            }
        ]
    }
}

