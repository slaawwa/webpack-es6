
import common from './webpack.common.babel'

export default (cnf={}) => {

    return Object.assign({}, common(cnf), cnf, {
        optimization: {
            minimize: true,
        },
    })
}
