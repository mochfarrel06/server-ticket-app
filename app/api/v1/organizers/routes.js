const express = require("express");
const router = express();

router.get("/organizers", (req, res) => {
  res.status(200).json({
    message: "Halaman organizers",
  });
});

module.exports = router;
