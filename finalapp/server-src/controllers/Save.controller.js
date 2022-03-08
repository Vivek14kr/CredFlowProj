const express = require("express");

const router = express();
const Register = require("../models/SaveProd.model");

router.post("/", async (req, res) => {
  const register = await Register.create(req.body);
  return res.status(201).send(register);
});

router.get("/", async (req, res) => {
  const register = await Register.find().lean().exec();
  return res.status(201).send({ register });
});
router.delete("/:id", async (req, res) => {
  const cart = await Register.findByIdAndDelete(req.params.id);
  return res.send(cart);
});
module.exports = router;
