const express = require('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const config = require('../webpack.config.dev');

const compiler = webpack(config);

const PORT = 3000;
const app = express();

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${PORT}`);
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});