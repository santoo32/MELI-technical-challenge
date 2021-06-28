const express = require("express");
const router = express();
const Response = require("../models/Response");
const ItemsQ = require("../queries/items");

//Here we can see what is commonly named 'Nested Callbacks' this can be easily replaced with promises to 
// make the code more maintainable
router.route("/:id").get(function (req, res) {
  let response = new Response();
  try {
    ItemsQ.findItemById(req.params.id, function (err, result) {
      if (err) {
        response.setError(err.error);
        response.getResponse(res);
        return;
      } else {
        ItemsQ.findDescription(req.params.id, function(dError, dResult){
          if (dError) {
            response.setError(dError);
            response.getResponse(res);
            return;
          }else{
            ItemsQ.findCategory(result.category, function(cError, cResult){
              if(cError) {
                response.setError(cError);
                response.getResponse(res);
                return;
              } else {
                result.category = cResult;
                result.description = dResult
                response.setData(result);
                response.getResponse(res);
              }
            })
          }
        })
      }
    });
  } catch (err) {
    response.setError(err);
    response.getResponse(res);
  }
});

router.route("/").get(function (req, res) {
  let response = new Response();
  try {
    ItemsQ.findItems(req.query.q, function (err, result) {
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

module.exports = router;
