import path from 'path'
import webpack from 'webpack'

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
}

export default {
  devtool: 'source-map',
  entry: {
    app: ['babel-polyfill', PATHS.app],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true, //set this variable from outside
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: PATHS.app,
        query: {
          "presets": [
            "es2015",
            "stage-0",
            "react",
            "react-optimize",
          ],
          "plugins": [
            "transform-decorators-legacy",
            "transform-class-properties"
          ],
        }
      },
    ],
  },
}
