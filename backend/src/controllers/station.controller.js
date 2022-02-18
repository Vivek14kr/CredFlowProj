const express = require("express");

const router = express();
const Register = require("../models/station.model");

router.post("/", async (req, res) => {
  const register = await Register.create(req.body);
  return res.status(201).send(register);
});

router.get("/", async (req, res) => {
    const PAGE_SIZE = 3
    const page = parseInt(req.query.page || "0")
    const total = await Register.countDocuments()
  const register = await Register
  .find().limit(PAGE_SIZE).skip(PAGE_SIZE * page);
  return res.status(201).send({register, 
    totalPages:Math.ceil(total/PAGE_SIZE)});
});

router.get("/:citytype", async(req, res)=>{
   const PAGE_SIZE = 3;
   const page = parseInt(req.query.page || "0");
   const total = await Register.countDocuments();
  console.log(req.params)
  const register = await Register.find(req.params)
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
  return res
    .status(201)
    .send({ register, totalPages: Math.ceil(total / PAGE_SIZE) });

})
router.get("/cityname/:cityname", async (req, res) => {
  const PAGE_SIZE = 3;
  const page = parseInt(req.query.page || "0");
  const total = await Register.countDocuments();
  console.log(req.params);
  const register = await Register.find(req.params)
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
  return res
    .status(201)
    .send({ register, totalPages: Math.ceil(total / PAGE_SIZE) });
});
router.get("/num/:citypopulation", async (req, res) => {
  const PAGE_SIZE = 3;

  let num = Number(req.params.citypopulation)
  const data= await Register.find()
    const register = []

    for (let i = 0; i < data.length; i++){
      if (data[i].citypopulation < num){
        register.push(data[i])
      }
    }

  
  return res
    .status(201)
    .send({ register});
});

module.exports = router;
