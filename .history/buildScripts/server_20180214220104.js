// const express = require('express');
// const path = require('path');
// const open = require('open');
import express from 'express';
import path from 'path';
import open from 'open';

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