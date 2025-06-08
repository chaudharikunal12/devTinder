const express = require('express')

const app = express()

app.get('/user', (req, res)=>{
    res.send({name:"Kunal"})
})
app.post('/user', (req, res)=>{
    res.send({name:"Kunal",
        lastname:'Chaudhari'
    })
})
app.use('/dashboard',(req,res)=>{
    res.send('dashboard')
})

app.use('/',(req,res)=>{
    res.send('Welcome')
})

 app.listen(3000, ()=>{
    console.log('listened to 3000')
 })