/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "";

  // 处理代理目标地址
  // 接口配置baseurl: api
  // uploads可以处理静态图片不展示的问题
  if (req.url.startsWith("/api") || req.url.includes("/uploads")) {
      debugger
    target = "http://121.5.240.208:1337/";
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 /api
      //   例如 /api/boss/xxx 将被转发到 http://121.5.240.208:1337/boss/xxx
      //   例如 /api/front/xxx 将被转发到 http://121.5.240.208:1337/front/xxx
      "^/api/": "",
    },
  })(req, res);
};
