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
            },
            {
                test:/\.css$/,
                //打包处理css样式表的loader
                //可以再css-loader之后 ，通过 ?追加参数，启用模块化
                use:['style-loader','css-loader']
            },
            {
                //打包处理字体文件 的 loader
                test:/\.ttf|woff|woff2|eot|svg$/,
                use:'url-loader'
            },
            {
                test:/\.scss$/,
                //打包处理scss样式表的loader
                //可以再css-loader之后 ，通过 ?追加参数，启用模块化
                use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:16]','sass-loader']
            }
        ]
    },
    resolve:{
        //表示这几类文件的后缀名可以不用写
        extensions: ['.js','.jsx','.json','.scss','.css'],
        alias: {
            //这样，@ 就表示在项目根目录中的src这一层路径
            '@':path.join(__dirname,'./src')
        }
    }
}

