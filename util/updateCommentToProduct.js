const mongoose = require("mongoose");
const comment = require("../models/comment");
const Product = require("../models/product");
const urlConnect = process.env.DB;
//Connect to db
mongoose.connect(
  urlConnect,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    console.log("Connect to update!!");
    Product.find({}, (err, res) => {
      console.log(res);
    });
  }
);
