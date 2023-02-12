const express = require("express");
const router = new express.Router();
const url = require("url");
const multer = require("multer");

const mongoose = require("mongoose");
const Ngo = require("../models/ngo");
const Activity = require("../models/activity");

// const {registerNGO} = require("../controllers/ngo.js");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/ngoProfile");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

router.get("/ngo/register", async (req, res) => {
  res.render("ngo_reg");
});

router.get("/ngo/login", async (req, res) => {
  res.render("ngo_login");
});

router.post("/ngo/register", async (req, res) => {
  const ngo = await Ngo.create(req.body);
  console.log(req.body);
  if (!ngo) {
    console.log("Error creating student");
    return;
  }
  console.log(ngo);

  res.redirect("/");
});

router.post("/ngo/login", async (req, res) => {
  const { email, password } = req.body;

  //checking if ngo has given email and password both
  console.log(email, password);
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter email and password" });
  }

  const ngo = await Ngo.findOne({ email: email }).select("+password");
  if (!ngo) {
    return res.status(400).json({ msg: "NGO does not exist" });
  }

  console.log("ngo", ngo);
  let isPasswordMatched = false;
  if (password === ngo.password) {
    isPasswordMatched = true;
  } else {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }
  res.redirect("/" + `ngo?ngo_id=${ngo._id}`);
});

router.post("/ngo/newActivity/:ngo_id", async (req, res) => {
  const activity = await Activity.create(req.body);

  const ngo_id = req.params.ngo_id;
  const ngo = await Ngo.findById(ngo_id);

  console.log(req.body);
  if (!activity) {
    console.log("Error creating student");
    return;
  }
  console.log(activity);

  res.render("ngo_reg");
});

router.get("/ngo", async (req, res) => {
  const ngo = await Ngo.findById(req.query.ngo_id);
  if (!ngo) {
    return res.status(404).json({ msg: "NGO not found" });
  }

  // res.status(200).json({
  //   success: true,
  //   ngo,
  // });
  res.render("ngo_dash", { name: ngo.name, category: "NGO" });
});

router.get("/activity/:id", async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (!activity) {
    return res.status(404).json({ msg: "No registered drive" });
  }

  res.status(200).json({
    success: true,
    activity,
  });
});

module.exports = router;
