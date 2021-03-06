module.exports = {
  devServer: {
    /* open: true,
    host: 'localhost',
    port: 8080,
    https: false, */
    // 以上的 ip 和端口是我们本机的;下面为需要跨域的
    proxy: {  // 配置跨域
      '/api': {
        target: 'http://localhost:10086/mock',  // 后台服务器地址
        ws: true,
        changOrigin: true,  // 允许跨域
        pathRewrite: {
          '^/api': '/61f0e1360c5cad514091d1a2'  // 请求的时候使用这个 api 就可以
        }
      }
    }
  }
}
