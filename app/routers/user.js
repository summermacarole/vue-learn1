const Router = require("koa-router");
const user = new Router();
const userList = require("../../mock/users");

user.get("/list", async ctx => {
  let { current, size } = ctx.query;
  ctx.body = {
    rows: userList.slice((current - 1) * size, current * size),
    total: userList.length
  };
});

user.post("/list", async ctx => {
  console.log(ctx.request.body);
  let { current, size } = ctx.request.body;
  ctx.body = {
    rows: userList.slice((current - 1) * size, current * size),
    total: userList.length
  };
});
module.exports = user;
