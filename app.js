const express = require("express");

const app = express();

app.use(
  "/dashboard",
  [
    (req, res, next) => {
      res.send("Response 1");
      next();
    },
    (req, res, next) => {
      res.send("Response 2");
      next();
    },
  ],
  (req, res) => {
    res.send("Response 3");
  },
  (req, res) => {
    res.send("Response 4");
  },
  (req, res) => {
    res.send("Response 5");
  }
);

app.use("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000, () => {
  console.log("listened to 3000");
});
