const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.SERVER_PORT;
// const port = 3200;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: "Kamil Raza",
    role: "user",
    email: "kamil@gmail.com",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
