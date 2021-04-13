const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("mongoose");
const app = express();

app.use("*", cors());

if (process.env === "production") {
  app.use(express.static(path.resolve(__dirname, "react-ui")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
}


db.connect(process.env.MONGODB_URI);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API running at port ${port}`);
});
