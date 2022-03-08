const { Schema, model } = require("mongoose");

const customerSchema = new Schema(
  {
    name: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("customer", customerSchema);
