
import 'module-alias/register'

import getWebpackDevCnf from '@cnf/webpack.dev.babel'
import getWebpackProdCnf from '@cnf/webpack.prod.babel'

export default env => {

    let config

    switch (env.mode) {
        case 'prod':
        case 'production':
            config = getWebpackProdCnf({mode: 'production'})
            break
        case 'test':
        case 'testing':
            config = getWebpackTestCnf({mode: 'test'})
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
            config = getWebpackDevCnf({mode: 'development'})
    }

    return config
}
