const jwt = require("jsonwebtoken");

function generateToken(user, secret, expTime) {
  return jwt.sign(user, secret, { expiresIn: expTime });
}

module.exports = generateToken;
