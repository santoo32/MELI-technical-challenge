const request = require("request");

function findItemById(id, callback) {
  var url = process.env.API_URL;
  request.get(
    {
      uri: url + "items/" + id,
    },
    function (err, res, resBody) {
      parsedResBody = JSON.parse(resBody);
      if (parsedResBody.error) {
        callback(parsedResBody);
      } else {
        callback(null, {
          id: parsedResBody.id,
          title: parsedResBody.title,
          price: {
            currency: parsedResBody.currency_id,
            amount: parsedResBody.price,
            decimals: 0,
          },
          picture: parsedResBody.pictures[0].url,
          condition: parsedResBody.condition,
          free_shipping: parsedResBody.shipping.free_shipping,
          sold_quantity: parsedResBody.sold_quantity,
          description: parsedResBody.descriptions.id,
        });
      }
    }
  );
}

function findItems(query, callback) {
    var url = process.env.API_URL;
    request.get(
      {
        uri: url + "sites/MLA/search?q=​" + query,
      },
      function (err, res, resBody) {
        console.log(resBody)
        parsedResBody = JSON.parse(resBody);
        if (parsedResBody.error) {
          callback(parsedResBody);
        } else {
        //   callback(null, {
        //     id: parsedResBody.id,
        //     title: parsedResBody.title,
        //     price: {
        //       currency: parsedResBody.currency_id,
        //       amount: parsedResBody.price,
        //       decimals: 0,
        //     },
        //     picture: parsedResBody.pictures[0].url,
        //     condition: parsedResBody.condition,
        //     free_shipping: parsedResBody.shipping.free_shipping,
        //     sold_quantity: parsedResBody.sold_quantity,
        //     description: parsedResBody.descriptions.id,
        //   });
        callback(null, parsedResBody)
        }
      }
    );
  }

module.exports = {
  findItemById,
};
