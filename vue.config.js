module.exports = {
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  }
};
