const request = require("request");

var url = process.env.API_URL;

const CONDITION_MAPPER = {
  'new': 'Nuevo',
  'used': 'Usado',
  'not_specified': 'No especificado',
}

function findItemById(id, callback) {
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
          category: parsedResBody.category_id
        });
      }
    }
  );
}

function findItems(query, callback) {
  request.get(
    { url: url + "sites/MLA/search?", qs: { q: query } },
    function (err, res, resBody) {
      parsedResBody = JSON.parse(resBody);
      const categoriesResultFilters = parsedResBody.filters.find(f => f.name === 'Categorías');
      const filtered = categoriesResultFilters ? categoriesResultFilters.values[0].path_from_root : [];

      if (parsedResBody.error) {
        callback(parsedResBody);
      } else {
        callback(
          null,
          {
            categories: filtered,
            items:parsedResBody.results.slice(0, 4).map((item) => {
            return {...parseItem(item), address: item.address.state_name};
          })}
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
    condition: CONDITION_MAPPER[item.condition],
    free_shipping: item.shipping.free_shipping,
    picture: item.pictures ? item.pictures[0].url : item.thumbnail
  };
}

function findDescription(itemId, callback){
  request.get(
    {
      uri: url + "items/" + itemId + "/description",
    },
    function (err, res, resBody) {
      parsedResBody = JSON.parse(resBody);
      if (parsedResBody.error) {
        callback(null , parsedResBody.message);
      } else {
        callback(null, parsedResBody.plain_text);
      }
    }
  );
}

function findCategory(catId, callback){
  request.get(
    {
      uri: url + "categories/" + catId,
    },
    function (err, res, resBody) {
      parsedResBody = JSON.parse(resBody);
      if (parsedResBody.error) {
        callback(null , parsedResBody.message);
      } else {
        callback(null, parsedResBody.path_from_root);
      }
    }
  );
}

module.exports = {
  findItemById,
  findItems,
  findDescription,
  findCategory
};
