const express = require("express");
require("dotenv").config();

const router = require("./routes/router");

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`app is connected and listening to port ${PORT}`);
});
