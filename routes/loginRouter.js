const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  const username = req.body.username;
  const user = {
    name: username,
  };

  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET);
  res.json({ accessToken });
});

module.exports = loginRouter;
