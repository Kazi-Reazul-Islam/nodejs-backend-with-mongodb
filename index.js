const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { readdirSync } = require("fs");
const mongoose = require("mongoose");

//App
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(cors());

//Mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Somthing went wrong"));

//routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on por ${port}`));
