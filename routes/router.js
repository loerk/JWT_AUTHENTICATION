const express = require("express");
// importing controller
const { getFavourites } = require("../controllers/controller");
// importing middleware
const authorizeToken =
  require("../middleware/accessAuthorization").authorizeToken;

const router = express.Router();

router.get("/favourites", authorizeToken, getFavourites);

module.exports = router;
