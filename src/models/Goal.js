const mongoose = require("mongoose");

module.exports = mongoose.model("Goal",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    type: String,
    target: Number,
    progress: Number,
    date: Date
  })
);
