module.exports = {
    pwa: {
    iconPaths: {
    favicon32: 'favicon.ico',
    
    favicon16: 'favicon.ico',
    
    appleTouchIcon: 'favicon.ico',
    
    maskIcon: 'favicon.ico',
    
    msTileImage: 'favicon.ico'
    
    }
    
    },
    lintOnSave:false,
    // publicPath:"/mda/vision/calendar/",
    devServer: {
    // host: '127.0.0.1',
    // port: 9090,
    // proxy:"http://127.0.0.1:5465"
    proxy: {
      '/*': {
        //代理
        target: "http://192.168.1.137:5465",
        // target: "http://192.168.1.196:5465",

        changeOrigin: true
      }
    }
  }
    
    };
