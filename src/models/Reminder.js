const mongoose = require("mongoose");

module.exports = mongoose.model("Reminder",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    dueDate: Date,
    status: String
  })
);
