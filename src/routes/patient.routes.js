const router = require("express").Router();
const auth = require("../middleware/auth");
const Goal = require("../models/Goal");
const Reminder = require("../models/Reminder");

router.get("/dashboard", auth(["patient"]), async (req, res) => {
  const goals = await Goal.find({ userId: req.user.id });
  const reminders = await Reminder.find({ userId: req.user.id });
  res.json({ goals, reminders });
});

router.post("/goal", auth(["patient"]), async (req, res) => {
  await Goal.create({ ...req.body, userId: req.user.id });
  res.json({ message: "Goal added" });
});

module.exports = router;
