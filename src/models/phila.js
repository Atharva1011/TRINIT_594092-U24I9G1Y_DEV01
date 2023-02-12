const mongoose = require("mongoose");
const philaSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    max: 50,
    unique: true,
  },
  password:{
    type: String,
  },
  contact_no: {
    type: String,
    minLength: 10,
    trim: true,
  },
  sector: {
    type: String,
    trim: true,
  },
  organization: {
    type: String,
    trim: true,
  },
  donated_ids: {
    type: Array,
    default: [],
  },
  total_amount: {
    type: Number,
  },
  no_of_organizations: {
    type: Number,
  },
});

const Phila = mongoose.model("Phila", philaSchema);

module.exports = Phila;
