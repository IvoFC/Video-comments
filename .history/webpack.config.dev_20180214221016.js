import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(_)
    ]
}