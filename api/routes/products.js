const express = require("express");
const router = express();
const Response = require("../models/Response");


router.route("/create").get(function (req, res) {
  let response = new Response();
      response.setData({asd: "asd"});
      response.getResponse(res);
    console.log("asd");
});

module.exports = router;
