require("dotenv").config();
const jwt = require("jsonwebtoken");

function refreshAuth(req, res, next) {
  const { token } = req.body;

  if (token === null) {
    return res.sendStatus("401");
  }

  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

module.exports = refreshAuth;
