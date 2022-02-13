"use strict";

const port = process.env.PORT || 3002;
const express = require("express");
var app = express();
const router = express.Router();
const crypto = require('crypto');
const md5 = require('md5');

const mailchimp = require("@mailchimp/mailchimp_marketing");

app.use(
  "/test",
  router.get("/", async function (req, res, next) {
    let id = req.query.id;

    // mailchimp.setConfig({
    //   apiKey: "dab7cc379e6cc8160077141731f3ccd1-us10",
    //   server: "us10",
    // });
    mailchimp.setConfig({
        apiKey: "dab7cc379e6cc8160077141731f3ccd1-us10",
        server: "us10",
      });
    let response;
    
    
    response = await mailchimp.lists.getAllLists();
    console.log(response.lists);

    // let listId = "7e8e4b7453";
    // try{
    //   response = await mailchimp.lists.addListMember(listId, {
    //     email_address: "testlink3@squadpalapp.com",
    //     status: "subscribed",
    //     merge_fields: {
    //       FNAME: "Test",
    //       LNAME: "Link2",
    //   },
    //   });
    //   console.log(response);
    // }catch(Err){
    //   console.log(Err);
    // }

    //  let listId = "";
    //  let hash = md5('testlink4@squadpalapp.com'.toLowerCase());//;crypto.createHash('md5').update('testlink4@squadpalapp.com'.toLowerCase()).digest('hex');
    // try{
    //   response = await mailchimp.lists.setListMember(listId,hash, {
    //     email_address: null,
    //     status_if_new: "subscribed",
    //     status:"subscribed",
    //     merge_fields: {
    //       FNAME: "Test4",
    //       LNAME:"LINK4"
    //   },
    //   });
    //   console.log(response.status);
    //   console.log(response.text);
    // }catch(Err){
    //   response = Err;
    //   console.log(Err.status);
    //   console.log(Err.response.text);
    // }

  //   let hash = crypto.createHash('md5').update('testlink2@squadpalapp.com'.toLowerCase()).digest('hex');
  // let listId = "7e8e4b7453";
  //   try{
  //     response = await mailchimp.lists.deleteListMemberPermanent(
  //       listId,
  //       hash
  //     );
  //     console.log(response);
  //   }catch(Err){
  //     console.log(Err);
  //   }

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
