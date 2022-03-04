const express = require("express");
const app = express();
const router = require("./router/router");
const path = require("path");

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use(
    "/node_modules/",
    express.static(path.join(__dirname, "./node_modules/"))
);

app.engine("html", require("express-art-template"));

app.use(router);

app.listen(8000, function(req, res) {
    console.log("正在为你创建中");
});