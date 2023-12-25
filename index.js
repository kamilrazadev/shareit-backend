const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.SERVER_PORT;

app.use(
  cors({
    origin: ["https://shareit-backend.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/user", require("./users/userRouter"));

app.get("/", (req, res) => {
  res.json({
    message: "Cors Origin Added",
  });
});

mongoose
  .connect(process.env.DB_URL_STRING)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error Connecting DB", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
