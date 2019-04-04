const Mock = require("mockjs");
let userList = [];
let userCount = 100;
for (let i = 0; i < userCount; i++) {
  userList.push(
    Mock.mock({
      id: "@increment",
      name: "@name",
      age: "@integer(10,100)",
      address: "@county(true)"
    })
  );
}
module.exports = userList;
