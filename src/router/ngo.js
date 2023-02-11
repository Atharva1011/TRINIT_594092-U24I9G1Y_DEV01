const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const Ngo = require("../models/ngo");
const Activity = require("../models/activity");

router.get("/ngo_reg", (req, res) => {
  res.render("ngo_reg");
});

router.get("/ngo_login", (req, res) => {
  res.render("ngo_login");
});

router.post("/ngo_login", (req, res) => {
  const valid = false;
  if (valid) {
    res.render("ngo_dash");
  } else {
    res.redirect("/ngo_login");
  }
});

router.post("/ngo_reg", (req, res) => {
  res.render("ngo_dash");
});

module.exports = router;
