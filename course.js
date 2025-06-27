const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
        maxlength: 200
    },
    numberOfTopics: {
        type: Number,
        default: 0,
        required: true,
        min: 0,
        max: 40
    },
    publishedAt: Date,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;