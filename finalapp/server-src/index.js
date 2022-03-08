const express = require("express");
const cors = require("cors");
const app = express();

const path = require("path");

app.use(express.json());
app.use(cors());

const registerController = require("./controllers/Product.controller")
const saveController = require("./controllers/Save.controller")

const customercontroller = require("./controllers/Customer.controller")
app.use("/cart", registerController);
app.use("/save", saveController)
app.use("/customer", customercontroller)
module.exports = app;
