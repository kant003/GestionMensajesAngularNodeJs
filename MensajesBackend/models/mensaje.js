const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MensajeSchema = Schema(
    {
        _id: {type: Schema.ObjectId, auto:true},
        msg: String,
        user: String,
        // user: {type: Schema.ObjectId, ref='User'}
    }
)

module.exports = mongoose.model('mensaje', MensajeSchema)