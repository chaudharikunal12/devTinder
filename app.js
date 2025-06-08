const express = require("express");

const app = express();
const {adminAuth, userAuth} = require('./middlewares/auth')

app.use('/admin', adminAuth)
app.use('/user', userAuth)

app.get('/admin/data', (req,res)=>{
    res.send('admin data')
})

app.get('/user/list', (req, res)=>{
    res.send('user listed fetch')
})

// app.use(
//   "/dashboard",
//     (req, res, next) => {
//       res.send("Response 1");
//       next();
//     }
// );

app.use("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000, () => {
  console.log("listened to 3000");
});
