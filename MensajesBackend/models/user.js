const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = Schema(
    {
        _id: {type: Schema.ObjectId, auto:true},
        nombre: String,
        email: String,
        password: String,
    }
)

module.exports = mongoose.model('user', UserSchema)