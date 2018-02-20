const express = require('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const config = require('../webpack.config.dev');

const PORT = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${PORT}`);
    }
});