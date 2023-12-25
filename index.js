const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use("/user", require("./users/userRouter"));

mongoose
  .connect(process.env.DB_URL_STRING)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error Connecting DB", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
