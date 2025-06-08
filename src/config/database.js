const {mongoose} = require('mongoose')

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://chaudharikunal314:QHJYBqHW4EnDpHkX@kunalnode.tqnzz3i.mongodb.net/devTinder')     
}

module.exports = connectDB