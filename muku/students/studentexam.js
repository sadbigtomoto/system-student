const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/itcast')


const Schema = mongoose.Schema;

const studentExamSchema = new Schema({
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
    examtype: {
        type: String,
        required: true
    },
    examtime: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('studentexam', studentExamSchema)