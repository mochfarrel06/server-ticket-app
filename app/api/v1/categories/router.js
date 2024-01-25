const express = require("express");
const router = express();
const {index, create, find, update} = require("./controller");

router.get("/categories", index);

router.get("/categories/:id", find);

router.put("/categories/:id", update);

router.post("/categories", create);

module.exports = router;
