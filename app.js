const express = require("express");
const morgan = require("morgan");

const app = express();

const api = require("./routes/api");

app.use(morgan("dev"));

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    test: "helllo",
  });
});
app.use("/v1", api);

module.exports = app;
