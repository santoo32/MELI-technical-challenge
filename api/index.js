const path = require("path");
//const configVars = require(path.resolve("./config"));
const app = require(path.resolve("./app"));

//const PORT = process.env.PORT || configVars.PORT;
const PORT = 9000;
//const HOSTNAME = process.env.HOSTNAME || configVars.HOSTNAME;
const HOSTNAME = "localhost";

app.listen(PORT, function (req, res) {
  console.log(
    "ML Challenge API is running at http://" + HOSTNAME + ":" + PORT
  );
});
