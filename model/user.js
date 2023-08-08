const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require: true

    },
    email : {
        type : String,
        require: true

    },
    password : {
        type : String,
        require: true

    },
    confirmPassword :{
        type: String,
        require: true
    }
})

//creating a model for the schema
module.exports = mongoose.model('user',userSchema)