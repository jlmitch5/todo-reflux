module.exports = {
    entry: './app/javascript/src/main.jsx',
    output: {
        path: 'app/static/js/',
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
    },
    jshint: {
            camelcase: true,
            curly: true,
            eqeqeq: true,
            strict: true,
            indent: 4,
            latedef: true,
            unused: true,
            node: true,
            browser: true
            
    },
    loaders: [
        { test: /\.jsx$/, loader: 'jsx-loader'}
    ]
};
