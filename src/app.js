const express = require('express');
const app = express();
const courseRoutes = require('./routes/course.routes');

app.use(express.json());
app.use('/courses', courseRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World desde Docker + MongoDB!');
});

module.exports = app;