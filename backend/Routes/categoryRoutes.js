const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Sucessful connection to categories route");
});

module.exports = router; 
