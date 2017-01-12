var webpack = require('webpack');
var path=require("path")
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = function(options){
    
    var root_dir = path.resolve(__dirname, "..");
    var plugins=[commonsPlugin];

    /*if (options.prod) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                compress: true,
                output: {screw_ie8: true}
            }
        }))
    }*/

    var config={
        //插件项
        plugins:plugins,
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
            path: path.resolve(root_dir, './assets'),
            filename: 'app.js',
            pathinfo: !options.prod,
            sourceMapFilename: "[name].js.map",
            publicPath: "/assets/"
        },
        devtool: options.prod ? "" : "eval",
        debug: options.prod ? false : true,
        module: {
            //加载器配置
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                /*{
                    test: /\.jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    loaders: options.prod ? ["babel-loader"] : ["babel-loader?cacheDirectory"]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {compact: false, cacheDirectory: true}
                },*/
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        babelrc: false,
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.js$/,
                    loader: "babel",
                    include :path.join(root_dir, "node_modules/ethereumjs-tx"),
                    babel: {
                        babelrc: false,
                        presets: [
                            ['es2015'],
                        ],
                    },
                },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
                { test: /\.json/, loader: "json" }
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