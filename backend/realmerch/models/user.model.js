const mongoose = require('mongoose')

const userRegSchema = mongoose.Schema({
    fullname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone: { type: String, require: false },
    address: { type: String, require: false },
    is_superuser: {type: Boolean, default: false},
    is_staff: {type: Boolean, default: false},
    is_active: {type: Boolean, default: true},
    date_joined: {type: Date, default: Date.now}
})


let userRegModel = mongoose.model('user_collection', userRegSchema)
module.exports = userRegModel