const express = require("express");
const router = express();

router.get("/events", (req, res) => {
  res.status(200).json({
    message: "Halaman Events",
  });
});

module.exports = router;
