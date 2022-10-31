// Github @josueperezparejo

import mongoose from "mongoose";

// Conexion base de datos
const conectarDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB Conectado en: ${url}`)
    } catch (error) {
        console.log(`error: ${error}`);
        process.exit(1);
    }
};

export default conectarDB;

// Github @josueperezparejo