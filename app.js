const express = require('express')

const app = express()

app.use('/',(req,res)=>{
    res.send('send')
})

app.use('/test',(req,res)=>{
    res.send('test')
})
 app.listen(3000, ()=>{
    console.log('listened to 3000')
 })