
import getWebpackCnf from './_config/webpack.dev.babel'

export default env => {

    let config

    switch (env.mode) {
        case 'prod':
        case 'production':
            config = getWebpackCnf({mode: 'production'})
            break
        case 'test':
        case 'testing':
            config = getWebpackCnf({mode: 'test'})
            break
        case 'load-static':
            config = require('./_config/webpack.load-static.babel')({
                mode: 'load-static'
            })
            break
        case 'deploy':
        case 'github-deploy':
            config = require('./_config/webpack.github-deploy')
            break
        case 'dev':
        case 'development':
        default:
            config = getWebpackCnf({mode: 'development'})
    }

    return config
}
