
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import configFn from './webpack.config.babel.js'

const serverInfo = () => {
    console.log('****************************')
    console.log('SERVER STARTED:')
    console.log(`${host}:${port}`)
}

const config = configFn({mode: 'dev'}),
    devServer = config.devServer || {},
    port = devServer.port || 8080,
    host = devServer.host || 'localhost'

// NOTE: Need for testing
console.log(' -> config::::', config)

const compiler = webpack(config, function(err, status) {
    if(err) {
        return console.log(err)
    }
    setTimeout(serverInfo, 750)
})

const server = new WebpackDevServer(compiler, Object.assign({}, devServer, {
    hot: true,
    lazy: true,
    stats: {colors: true},
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    contentBase: devServer.contentBase || __dirname + '/',
    // historyApiFallback  : devServer.historyApiFallback,
    after(app) {
        // serverInfo()
    },
}))

server.listen(port, host, function(err) {
    if(err) {
        return console.log(err)
    }
    // serverInfo()
})
