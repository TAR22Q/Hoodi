const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema({
  note: {
    type: String,
    //required: [true, "Please Enter Your Note!"],
    maxlength: [
      1000,
      "A post note must have less or equal then 1000 characters",
    ],
    minlength: [4, "A post note must have more or equal 4 characters"],
  },
  uniqueid: {
    type: String,
    required: true,
  },
  images: [String],
  coverImage: String,
});

const Clothes = mongoose.model("Clothes", clothesSchema);

module.exports = Clothes;
