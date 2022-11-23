const express = require("express");
const app = require("./app");
require("dotenv").config();
const http = require("http");

const server = http.createServer(app);

const PORT = 4000;

server.listen(PORT, () => {
  console.log("server listening on port 4000");
});
