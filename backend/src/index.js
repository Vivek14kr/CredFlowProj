const express = require("express");
const cors = require("cors");
const app = express();

const path = require("path");

app.use(express.json());
app.use(cors());

const registerController = require("./controllers/station.controller")



app.use("/register", registerController);
module.exports = app;
