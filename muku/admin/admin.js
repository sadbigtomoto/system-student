const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/itcast')


const Schema = mongoose.Schema;

const adminSchema = new Schema({
    zhanghao: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    id1: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('admin', adminSchema)