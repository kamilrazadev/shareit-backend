const express = require("express");
const app = express();
const cors = require("cors");
const port = 3100;

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
