const express = require("express");
require("dotenv").config();

const router = require("./routes/authRouter");

const app = express();
const PORT = process.env.AUTH_SERVER_PORT;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`app is connected and listening to port ${PORT}`);
});
