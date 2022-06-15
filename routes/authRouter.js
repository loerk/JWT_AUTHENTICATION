const express = require("express");
const { login, tokenController } = require("../controllers/controller");
const refreshAuth = require("../middleware/refreshAuthorization");

require("dotenv").config();

const router = express.Router();

router.post("/login", login);
router.post("/token", refreshAuth, tokenController);
module.exports = router;
