const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    firstName:String,
    lastName:String,
    email:String
})

module.exports = mongoose.model('User', userSchema)