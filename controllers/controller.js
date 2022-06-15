const favourites = require("../dataset/favouritesDataset");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = require("../middleware/generateToken");

function getFavourites(req, res) {
  let currentUser = favourites.find((item) => item.username === req.user.name);
  res.json(
    `just in case you forgot. Your favourite Tea is ${currentUser.favourite}`
  );
}

function login(req, res) {
  const username = req.body.username;
  const user = {
    name: username,
  };

  const accessToken = generateToken(user, process.env.ACCESS_SECRET, "30s");
  const refreshToken = generateToken(user, process.env.REFRESH_SECRET, "3600s");
  res.json({ accessToken, refreshToken });
}

function tokenController(req, res) {
  const username = req.user.name;
  const user = {
    name: username,
  };
  const accessToken = generateToken(user, process.env.ACCESS_SECRET, "30s");
  res.send({ accessToken });
}
module.exports = { getFavourites, login, tokenController };
