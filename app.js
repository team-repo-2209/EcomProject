require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const { COOKIE_SECRET } = process.env;
const { authRequired } = require("./api/auth");

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser(COOKIE_SECRET));

app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "./client", "dist")));

app.get("/health", (req, res) => {
  res.send("All Healthy Good to Go!");
});

app.use("/api", require("./api"));
app.use(express.static(path.join(__dirname, "./client", "build")));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
// });

app.get("/test", authRequired, (req, res, next) => {
  res.send("You are authorized");
});

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  res.send({ success: false, message: error.message });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});
module.exports = app;
