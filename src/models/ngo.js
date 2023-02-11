const mongoose = require("mongoose");
const ngoSchema = new mongoose.Schema({});

const Ngo = mongoose.model("Ngo", ngoSchema);

module.exports = Ngo;
