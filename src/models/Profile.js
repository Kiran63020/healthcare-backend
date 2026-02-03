const mongoose = require("mongoose");

module.exports = mongoose.model("Profile",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    allergies: [String],
    medications: [String]
  })
);
