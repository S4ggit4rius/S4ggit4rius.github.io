const { createProxyMiddleware } = require("http-proxy-middleware");
const target = "http://127.0.0.1:3001";
module.exports = function (app) {
  app.use(
    "/users",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};