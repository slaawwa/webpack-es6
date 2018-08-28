
import path from 'path'

const envKey = process.env.npm_config_env_mode || 'dev',
    isDev = envKey === 'dev',
    isProd = !isDev

export default {
    mode: isDev? 'development': 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
}
