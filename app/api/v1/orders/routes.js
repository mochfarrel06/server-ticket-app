const express = require("express");
const router = express();

router.get("/orders", (req, res) => {
  res.status(200).json({
    message: "Halaman orders",
  });
});

module.exports = router;
