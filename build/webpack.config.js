const path = require('path')

module.export = {
    extry: {
        app: path.join(__dirname, './../', 'src/index.tsx')
    },
    output: {
        path: path.join(__dirname, './../', 'dist'),
        filename: '[name].js'
    }
}