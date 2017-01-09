var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./conf/webpack-dev');
//console.log(config)
var compiler = webpack(config);
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/")

compiler.apply(new ProgressPlugin(function (percentage, msg) {
    process.stdout.write((percentage * 100).toFixed(2) + '% ' + msg + '                 \033[0G');
}));
var port=8080
new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    stats: {colors: true},
    port: port
}).listen(port, "localhost", function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at 127.0.0.1:'+port);
});

