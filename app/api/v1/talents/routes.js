const express = require("express");
const router = express();

router.get("/talents", (req, res) => {
  res.status(200).json({
    message: "Halaman talents",
  });
});

module.exports = router;
