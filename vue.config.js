const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const publicPath = '';
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  publicPath,
  configureWebpack:{
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/modules'),
        '@img': path.resolve(__dirname, 'public/img'),
        '@css': path.resolve(__dirname, 'public/css'),
      }
    },
  },
  devServer: {
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/gz-edas': {
        target: 'http://192.168.10.83:9999'
      }
    }
  },
};