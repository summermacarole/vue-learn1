const Koa = require("koa");
const app = new Koa();
const logger = require("koa-logger");
const routers = require("./routers");

app.use(logger());
app.use(routers.routes()).use(routers.allowedMethods());
app.listen(3000);
