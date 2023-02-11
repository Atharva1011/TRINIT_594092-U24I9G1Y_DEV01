const mongoose = require("mongoose");
const philaSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
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
  organization_name: {
    type: String,
    trim: true,
  },
  donated_ids: {
    type: Number,
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
