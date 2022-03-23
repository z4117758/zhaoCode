const fs = require("fs");
const Koa = require("koa");
const body = require("koa-body");
const Router = require("koa-router");
const static = require("koa-static");

let koa = new Koa();
koa.use(body());
let router = new Router();
let Path = "./html/test111.txt";
fs.readFile(Path, function (err, data) {
  router.post("/post_File", async (txc) => {
    console.log("请求了post");
    let z = {
      files: data,
    };
    txc.body = data;
  });
});

koa.use(router.routes());

koa.use(static("./html"));

koa.listen(8080);
