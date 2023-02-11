const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
require("../db/mongoose");

router.get("/", (req, res) => {
  res.render("hero");
});

module.exports = router;
