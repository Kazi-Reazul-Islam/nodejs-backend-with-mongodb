const express = require("express");

const router = express.Router();

router.get("/all", (req, res) => {
  res.json({
    data: "From all routes",
  });
});

module.exports = router;
