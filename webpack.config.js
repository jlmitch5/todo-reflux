module.exports = {
    entry: './application/javascript/src/main.jsx',
    output: {
        path: 'application/static/js/',
        filename: 'app.js'
    },
    module: {
        loaders: [
                { test: /\.jsx$/, loader: 'jsx-loader'}
            ]
    }
};
