const express = require("express");
const app = express();
const path = require("path");

const version = require(path.resolve("./package.json")).version;
console.info("Starting ML Challenge API V" + version);


const ItemsRoute = require("./routes/items");
app.use("/api/items", ItemsRoute);


module.exports = app;
