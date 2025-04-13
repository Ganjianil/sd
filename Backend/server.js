const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router=require("./Router/Searchrouter")
const bodyparser=require("body-parser")
const cors= require("cors")
dotenv.config();
mongoose
  .connect(process.env.mongo_uri)
  .then(() => {
    console.log("data base connected");
  })
  .catch((error) => console.log("error while database connectinG", error));

const port = process.env.PORT || 8085;
app.use(bodyparser.json())
app.use(cors())

app.listen(port, () => {
  console.log(`server running under ${port}`);
});
app.use("/", (req, res) => {
  res.status(201).json({ message: "WELCOME" });
});
app.use("/signup",router)
