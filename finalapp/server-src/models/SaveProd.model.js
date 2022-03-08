const { Schema, model } = require("mongoose");

const saveSchema = new Schema(
  {
    wine: { type: String, required: true },
    winery: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Object, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("save", saveSchema);
