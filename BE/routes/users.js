const router = require("koa-router")();

router.prefix("/users");

router.get("/", function (ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx, next) {
  ctx.body = {
    name: "zs",
    age: 18,
    sex: "男",
  };
});

module.exports = router;
