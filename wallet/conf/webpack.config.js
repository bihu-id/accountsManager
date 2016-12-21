var webpack = require('webpack');
var path=require("path")
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = function(options){
    
    var root_dir = path.resolve(__dirname, "..");
    var config={
        //插件项
        plugins: [commonsPlugin],
        //页面入口文件配置
        entry: {
            app: options.prod ?
                path.resolve(root_dir, './src/app.jsx') :
                [
                    "webpack-dev-server/client?http://localhost:8080",
                    //"webpack/hot/only-dev-server",
                    path.resolve(root_dir, './src/app.jsx')
                ]

        },
        //入口文件输出配置
        output: {
            path: path.resolve(root_dir, './dist'),
            filename: 'app.js',
            pathinfo: !options.prod,
            sourceMapFilename: "[name].js.map",
            publicPath: "/assets/"
        },
        devtool: options.prod ? "source-map" : "eval",
        debug: options.prod ? false : true,
        module: {
            //加载器配置
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {compact: false, cacheDirectory: true}
                },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            ]
        },
        //其它解决方案配置
        resolve: {
            root: [root_dir],
            extensions: ["", ".js", ".jsx", ".coffee", ".json"],
        }

    }
    return config
};