const Router = require("koa-router");
const user = new Router();
const userList = require("../../mock/users");

user.get("/list", async ctx => {
  console.log(JSON.stringify(ctx.query));
  let { current, size } = ctx.query;
  ctx.body = {
    rows: userList.slice((current - 1) * size, current * size),
    total: userList.length
  };
});

module.exports = user;
