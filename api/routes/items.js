const express = require("express");
const router = express();
const Response = require("../models/Response");
const ItemsQ = require("../queries/items");

router.route("/:id").get(function (req, res) {
  let response = new Response();
  try {
    ItemsQ.findItemById(req.params.id, function (err, result) {
      if (err) {
        response.setError(err);
        response.getResponse(res);
        return;
      } else {
        response.setData(result);
        response.getResponse(res);
      }
    });
  } catch (err) {
    response.setError(err);
    response.getResponse(res);
  }
});

// router.route("/create2").get(function (req, res) {
//   let response = new Response();
//   response.setData({ asd: "asd" });
//   response.getResponse(res);
//   console.log("asd");
// });

module.exports = router;
