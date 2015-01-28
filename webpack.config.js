module.exports = {
    entry: './app/javascript/src/entry_point.jsx',
    output: {
        path: 'app/static/bundles/js/',
        filename: 'app.js'
    },
    module: {
        loaders: [
                { test: /\.jsx$/, loader: 'jsx-loader'}
            ]
    }
};
