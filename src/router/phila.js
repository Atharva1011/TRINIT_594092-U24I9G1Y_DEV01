const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const Phila = require("../models/phila");
const Activity = require("../models/activity");
const Ngo = require("../models/ngo");

router.post("/phila/register", async (req, res) => {
  const phila = await Phila.create(req.body);
  console.log(req.body);
  if (!phila) {
    console.log("Error creating philanthrophist");
    return;
  }
  console.log(phila);

  res.redirect("/");
});

router.post("/phila/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  //checking if ngo has given email and password both
  console.log(email, password);
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter email and password" });
  }

  const phila = await Phila.findOne({ email: email }).select("+password");
  if (!phila) {
    return res.status(400).json({ msg: "Philanthrophist does not exist" });
  }

  console.log("phila", phila);
  let isPasswordMatched = false;
  if (password === phila.password) {
    isPasswordMatched = true;
  } else {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  res.redirect("/phila" + `?phila_id=${phila._id}`);
});

router.get("/phila", async (req, res) => {
  const phila = await Phila.findById(req.query.phila_id);
  if (!phila) {
    return res.status(404).json({ msg: "Philanthropist not found" });
  }

  res.render("phila_dash", {
    name: `${phila.firstName} ${phila.lastName}`,
    category: "Philanthropist",
  });
});

router.get("/phila/register", (req, res) => {
  res.render("phila_reg");
});

router.get("/phila/login", (req, res) => {
  res.render("phila_login");
});

module.exports = router;
