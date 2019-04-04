const Router = require("koa-router");
const user = new Router();
const userList = require("../../mock/users");

user.get("/list", async ctx => {
  ctx.body = userList;
});

module.exports = user;
