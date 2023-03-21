const express = require("express");
const path = require("path");

const accueilRouter = express.Router();

accueilRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

module.exports = { accueilRouter };
