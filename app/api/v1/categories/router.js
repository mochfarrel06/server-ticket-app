const express = require("express");
const router = express();
const {index, create} = require("./controller");

router.get("/categories", index);

router.post("/categories", create);

module.exports = router;
