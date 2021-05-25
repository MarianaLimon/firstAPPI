
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/, 
        maxLength: 20,
    },
    password: {
        type: String,
        required: true,
        minLength: 1
    }
})

const model = mongoose.model('users', usersSchema)

module.exports = model
