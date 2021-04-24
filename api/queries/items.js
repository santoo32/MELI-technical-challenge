const request = require("request");


function findItemById(id, callback) {

  var url = "https://api.mercadolibre.com/";
  request.get(
    {
      uri: url + "items/" + id
    },
    function (err, res, resBody) {
        console.log(resBody);
        callback(null, resBody);
    }
  );
}

module.exports = {
    findItemById
};