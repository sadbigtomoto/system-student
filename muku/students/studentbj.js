const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/itcast')


const Schema = mongoose.Schema;

const studentBjSchema = new Schema({
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
    // 学院表
    people: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('studentbj', studentBjSchema)