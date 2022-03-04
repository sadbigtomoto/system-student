const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/itcast')
const Schema = mongoose.Schema;
const studentCjSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    schoolTime: {
        type: Number,
        required: true
    },
    // 年级表
    major: {
        type: String,
        required: true
    },
    // 专业表
    college: {
        type: String,
        required: true
    },
    typename: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('studentcj', studentCjSchema)