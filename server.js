"use strict";

const port = process.env.PORT || 3002;
const express = require("express");
var app = express();
const router = express.Router();
const crypto = require('crypto');
const md5 = require('md5');

app.use(
  "/test",
  router.get("/", async function (req, res, next) {
    let id = req.query.id;
    let response;
    res.send({
      message:response,
    });
  })
);

app.use(function (req, res, next) {
  console.log("none");
  res.send({
    message: "No such URL!",
  });
});

const server = app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
