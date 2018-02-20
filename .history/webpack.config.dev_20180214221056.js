import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'src')
    ],

    output: {
        path: path.resolve(__dirname)
    }
}