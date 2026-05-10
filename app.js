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
app.get('/reservar', (req, res) => {
    res.render('reservar');
});

    // Ruta para procesar el formulario de reserva (POST)
    app.post('/servicios/reservar', (req, res) => {
        const { empresa, cliente, servicio, fecha } = req.body;
        console.log(`Reserva recibida para ${empresa} de parte de ${cliente}`);
        // Aquí podrías guardarlo en la base de datos si quisieras, 
        // pero por ahora redirigimos al éxito.
        res.redirect('/?registro=exito'); 
    });

// Sincronizar Base de Datos y Arrancar
const startServer = async () => {
    try {
        await sequelize.sync(); 
        console.log('Conexión a Aiven exitosa y tablas creadas.');
        
        const PORT = process.env.PORT || 10000;

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar:', error);
    }
};

startServer();