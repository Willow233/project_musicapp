const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // proxy:'http://localhost:3000'
  /* proxy: {
    // 请求地址有/api时，就会触发代理机制
    '/': {
      target: 'http://localhost:3000', // 代理地址
      changeOrigin: true // 是否跨域，true => 本地服务代理发出请求
    }
  } */
})
