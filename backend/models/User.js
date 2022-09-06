const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    isAdmin: { type: Boolean, default: false },
    firstName: {type: String, required : true},
    lastName: {type: String, required : true},
    birthDate: {type: Date},
    email: {type: String, required : true, unique: true},
    password : { type : String, required : true, minlength: 6 },
    phoneNumber : { type : String },
    adress : { type : String},
}, {
    timestamps : true
})

const User = mongoose.model('User', UserSchema)
module.exports = User