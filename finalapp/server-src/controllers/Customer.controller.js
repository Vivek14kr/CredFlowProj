const express = require("express");

const router = express();
const customer = require("../models/CustomerInfo.model");

router.post("/", async (req, res) => {
  const register = await customer.create(req.body);
  return res.status(201).send(register);
});

router.get("/", async (req, res) => {
  const register = await customer.find().lean().exec();
  return res.status(201).send({ register });
});

module.exports = router;
