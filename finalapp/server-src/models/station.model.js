const { Schema, model } = require('mongoose');

const registerSchema = new Schema(
  {
    cityname: { type: String, required: true },
    citytype: { type: String, required: true },
    citypopulation: { type: Number, required: true },
    pollingstations:{type:Number, required:true},
   stationname: { type: String, required: true },
    address: { type: String, required: true },
    pincode:{type:Number, required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = model('register', registerSchema);
