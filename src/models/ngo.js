const mongoose = require("mongoose");
const ngoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      // required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    state: String,
    city: String,
    address: String,
    mobileNo: String,
    desc: String,
    sector: String,

    ongoing_activities: {
      type: Array,
      default: [],
    },

    past_activies: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Ngo = mongoose.model("Ngo", ngoSchema);

module.exports = Ngo;
