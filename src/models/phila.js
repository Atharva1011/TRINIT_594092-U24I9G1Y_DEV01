const mongoose = require("mongoose");
const philaSchema = new mongoose.Schema({});

const Phila = mongoose.model("Phila", philaSchema);

module.exports = Phila;
