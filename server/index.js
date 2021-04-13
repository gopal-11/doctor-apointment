const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const path = require("path");

const db = require("mongoose");
const app = express();

app.use("*", cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
}


db.connect(process.env.MONGODB_URI);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API running at port ${port}`);
});
