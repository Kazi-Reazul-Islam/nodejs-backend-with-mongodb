const express = require("express");

const router = express.Router();

router.get("/admin", (req, res) => {
  res.json({
    data: "From admin routes",
  });
});

module.exports = router;
