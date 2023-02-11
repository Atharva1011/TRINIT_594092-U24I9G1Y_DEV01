const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/nit_tri",
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("MongoDB Connected Successfully");
  }
);
