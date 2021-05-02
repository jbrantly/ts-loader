module.exports = {
    mode: 'development',
    entry: './a.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        "presets": ['@babel/preset-env']
                    }
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }]
    }
}


