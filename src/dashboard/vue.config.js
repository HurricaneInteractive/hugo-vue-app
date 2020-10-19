const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  outputDir: "../../static/dist/dashboard",
  publicPath: "/dist/dashboard",
  configureWebpack: {
    plugins: [
      new AssetsPlugin({
        filename: 'webpack_assets_dashboard.json',
        path: path.join(__dirname, '../../data'),
        prettyPrint: true
      })
    ]
  }
}
