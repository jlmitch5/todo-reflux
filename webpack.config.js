module.exports = {
    entry: './app/javascript/src/main.jsx',
    output: {
        path: 'app/static/js/',
        filename: 'app.js'
    },
    module: {
        loaders: [
                { test: /\.jsx$/, loader: 'jsx-loader'}
            ]
    }
};
