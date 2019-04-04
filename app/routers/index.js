const Router = require("koa-router");
const index = new Router();
const user = require("./user");

index.get("/", async ctx => {
  ctx.body = "hello index";
});
index.use("/user", user.routes(), user.allowedMethods());
module.exports = index;
