"use strict";

const port = process.env.PORT || 3002;
const express = require("express");
var app = express();
const router = express.Router();

app.use(
  "/test",
  router.get("/", async function (req, res, next) {
    let id = req.query.id;
    let response ={
      id
    };
    res.send({
      message:response,
    });
  })
);

app.use(function (req, res, next) {
  res.send({
    message: "No such URL!",
  });
});

const server = app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
