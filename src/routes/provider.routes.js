const router = require("express").Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

router.get("/patients", auth(["provider"]), async (req, res) => {
  const patients = await User.find({ role: "patient" });
  res.json(patients);
});

module.exports = router;
