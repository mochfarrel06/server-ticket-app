const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// Routes
const categoriesRouter = require("./app/api/v1/categories/routes");
const authRouter = require("./app/api/v1/auth/router");

const v1 = "/api/v1/cms";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Halaman Utama
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to ticket app",
  });
});

// Halaman Categories
app.use(v1, categoriesRouter);

app.use(v1, authRouter);

module.exports = app;
