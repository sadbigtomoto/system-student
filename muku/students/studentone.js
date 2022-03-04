const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/itcast')

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    schoolTime: {
        type: Number,
    },
    // 年级表
    major: {
        type: String,
    },
    // 专业表
    college: {
        type: String,
    },
    biaoxian: {
        type: String,
    }
    // 学院表
})

module.exports = mongoose.model('studentone', studentSchema)