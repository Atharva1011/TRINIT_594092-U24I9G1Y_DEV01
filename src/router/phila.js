const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const Phila = require("../models/phila");

router.get("/phila_reg", (req, res) => {
  res.render("phila_reg");
});

router.get("/phila_login", (req, res) => {
  res.render("phila_login");
});

router.post("/phila_login", (req, res) => {
  const valid = true;
  if (valid) {
    res.render("phila_dash");
  } else {
    res.redirect("/phila_login");
  }
});

router.post("/phila_reg", (req, res) => {
  res.render("phila_dash");
});

module.exports = router;
