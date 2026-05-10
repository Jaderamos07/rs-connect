const express = require('express');
const sequelize = require('./config/db');
const servicioRoutes = require('./routes/servicioRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Configuración de EJS y archivos estáticos
app.set('view engine', 'ejs');
app.use(express.static('public')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/servicios', servicioRoutes);
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'RS Connect - Inicio' });
});

// Sincronizar Base de Datos y Arrancar
const startServer = async () => {
    try {
        await sequelize.sync(); // Crea las tablas automáticamente en Aiven
        console.log('Conexión a Aiven exitosa y tablas creadas.');
        app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar:', error);
    }
};

startServer();