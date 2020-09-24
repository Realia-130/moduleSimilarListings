const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src/');
const DIST_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'styled-components': path.resolve('node_modules', 'styled-components'),
    },
  },
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
};