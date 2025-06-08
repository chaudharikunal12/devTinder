const express = require("express");

const app = express();

app.use("/dashboard", (req, res) => {
  throw new Error("error");
  res.send("hhdhfgjds");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("errorrrrr");
  }
});

app.listen(3000, () => {
  console.log("listened to 3000");
});
