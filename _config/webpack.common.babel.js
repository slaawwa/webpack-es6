
import path from 'path'
import pkg from '@root/package.json'


export default (cnf={}) => {

    const isDev = cnf.mode === 'development',
        isProd = !isDev

    console.log(' -> cnf:', cnf)
    console.log(' -> isDev:', isDev)

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, '..', 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            alias: pkg._moduleAliases || {},
            modules: pkg._moduleDirectories || [],
        },
    }
}
