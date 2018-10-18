const body = require("body-parser");
const express = require("express");
const router = require("./router");
const path = require("path");
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
// app.use("/api", router);

app.listen(PORT, () => {
  console.log(`successfully connected to port ${PORT}`);
});

module.exports = app;
