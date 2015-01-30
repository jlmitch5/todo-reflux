module.exports = {
    entry: './application/javascript/src/main.jsx',
    output: {
        path: 'application/static/js/',
        filename: 'app.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                loader: "jsxhint-loader"
            }    
        ],
        jshint:  {
            camelCase: true,
            emitErrors: true,
            failOnHint: false
        },
        jsxhint: {
            camelCase: true
        },
        loaders: [
                { test: /\.jsx$/, loader: 'jsx-loader'}
            ]
    }
};
