const connect = require("./configs/db");

// const express = require("express");

const app = require("./index.js");

const path = require("path");

const port = process.env.PORT || 4500;
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable




app.listen(port, async (req, res) => {
  await connect();

  console.log(`Listening on PORT ${port}`);
});
