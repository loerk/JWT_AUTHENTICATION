const express = require("express");
require("dotenv").config();

const favouritesRouter = require("./routes/favouritesRouter");
const loginRouter = require("./routes/loginRouter");
const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.use("/api/favourites", favouritesRouter);
app.use("/api/login", loginRouter);

app.listen(PORT, () => {
  console.log(`app is connected and listening to port ${PORT}`);
});
