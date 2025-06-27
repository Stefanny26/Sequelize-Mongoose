require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || "mongodb://admin:admin123@localhost:27018/espe-mongoose?authSource=admin";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Conexión exitosa a MongoDB');
        app.listen(PORT, () => console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`));
    })
    .catch((error) => {
        console.error('❌ Error de conexión a MongoDB:', error);
    });

