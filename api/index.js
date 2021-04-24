require('dotenv').config();
const path = require("path");
//const configVars = require(path.resolve("./config"));
const app = require(path.resolve("./app"));

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.listen(PORT, function (req, res) {
  console.log(
    "ML Challenge API is running at http://" + HOSTNAME + ":" + PORT
  );
});
