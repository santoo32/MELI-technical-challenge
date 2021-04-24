const express = require("express");
const app = express();
const path = require("path");

const version = require(path.resolve("./package.json")).version;
console.info("Starting ML Challenge API V" + version);


// Serve the app code
// app.use(
//   express.static(
//     path.join(__dirname, process.env.WEBAPP_PATH || configVars.WEBAPP_PATH)
//   )
// );

// if ((process.env.USE_EXAMPLES || configVars.USE_EXAMPLES) === "true") {
//   app.use(
//     "/examples",
//     express.static(
//       path.join(
//         __dirname,
//         process.env.EXAMPLES_PATH || configVars.EXAMPLES_PATH
//       )
//     )
//   );
//   app.get("/examples", (req, res) => {
//     let root = require("path").join(
//       __dirname,
//       process.env.EXAMPLES_PATH || configVars.EXAMPLES_PATH
//     );
//     res.sendFile("index.html", { root });
//   });
// }



const ProductRoute = require("./routes/products");
app.use("/api/products", ProductRoute);


module.exports = app;
