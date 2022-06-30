const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.listen(PORT, () => {
  console.log("listening on PORT 8080...");
});