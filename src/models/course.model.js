const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, minlength: 10, maxlength: 200 },
    numberOfTopics: { type: Number, default: 0, required: true, min: 0, max: 40 },
    publishedAt: Date,
});

module.exports = mongoose.model('Course', courseSchema);