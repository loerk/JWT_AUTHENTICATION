const express = require("express");
const data = require("../dataset/dataset");
const authorizeToken = require("../middleware/auth").authorizeToken;

const favouritesRouter = express.Router();

favouritesRouter.get("/", authorizeToken, (req, res) => {
  res.json(data.filter((item) => item.username === req.user.name));
});

module.exports = favouritesRouter;
