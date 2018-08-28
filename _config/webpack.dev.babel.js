
import path from 'path'
// import webpack from 'webpack'

export default (cnf={}) => {

    const isDev = cnf.mode === 'development',
        isProd = !isDev

    console.log(' -> cnf:', cnf);
    console.log(' -> isDev:', isDev);

    return {
        mode: isDev? 'development': 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, '..', 'dist'),
            filename: 'bundle.js'
        },
        optimization: {
            minimize: isProd,
        },
        // plugins: isProd? [
        //     new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        // ]: [],
    }
}
