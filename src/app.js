const express = require("express");
const connectDB = require("./config/database");
const User = require("./model/user");
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const userData = new User(req.body);
  try {
    await userData.save();
    res.send("Details are saved");
  } catch (error) {
    res.status(400).send("Details not saved");
  }
});

connectDB()
  .then(() => {
    console.log("COnnection has been established");
    app.listen(3000, () => {
      console.log("listened to 3000");
    });
  })
  .catch((err) => {
    console.log("Connection not established");
  });
