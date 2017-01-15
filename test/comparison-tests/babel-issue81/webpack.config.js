module.exports = {
    entry: './a.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'babel-loader?presets[]=es2015!ts-loader' }
        ]
    }
}


