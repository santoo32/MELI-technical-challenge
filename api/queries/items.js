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
          ...parseItem(parsedResBody),
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
    { url: url + "sites/MLA/search?", qs: { q: query } },
    function (err, res, resBody) {
      parsedResBody = JSON.parse(resBody);
      if (parsedResBody.error) {
        callback(parsedResBody);
      } else {
        callback(
          null,
          parsedResBody.results.map((item) => {
            return parseItem(item);
          })
        );
      }
    }
  );
}

function parseItem(item) {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 0,
    },
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    picture: item.pictures ? item.pictures[0].url : item.thumbnail,
  };
}

module.exports = {
  findItemById,
  findItems,
};
