const mongoose = require("mongoose");
const data = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("searchdata", data);
