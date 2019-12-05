const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ser is up and runn");
});

module.exports = router;
