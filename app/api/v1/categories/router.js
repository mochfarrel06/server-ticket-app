const express = require("express");
const router = express();
const {index, create, find} = require("./controller");

router.get("/categories", index);

router.get("/categories/:id", find);

router.post("/categories", create);

module.exports = router;
