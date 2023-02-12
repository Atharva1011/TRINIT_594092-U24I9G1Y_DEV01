const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const Phila = require("../models/phila");
const Activity = require("../models/activity");

router.post("/phila/register", async(req, res) => {
  const phila = await Phila.create(req.body);
  console.log(req.body);
  if(!phila){
      console.log("Error creating philanthrophist");
      return;
  };
  console.log(phila);
  
  res.redirect("/");
});

router.get("/phila/login", (req, res) => {
  res.render("phila_login");
});

router.get("/phila/", (req, res) => {
  res.render("phila_login");
});


router.post("/phila/login", async(req, res) => {
    const {email, password}= req.body;
    console.log(req.body);
    //checking if ngo has given email and password both
    console.log(email, password);
    if(!email || !password){
      return res.status(400).json({ msg :"Please enter email and password" });
    }

    const phila= await Phila.findOne({email: email}).select("+password");
    if(!phila){
      res.status(400).json({ msg :"Philanthrophist does not exist" });
    }

    console.log("phila",phila);
    let isPasswordMatched=false;
    if(password === phila.password){
      isPasswordMatched=true;
    }
    else{
        return res.status(400).json({ msg :"Invalid Credentials" });
    }

    res.redirect("/");
});

router.get("/phila/register", (req, res) => {
  res.render("phila_reg");
});

module.exports = router;
