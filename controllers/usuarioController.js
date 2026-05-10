const Usuario = require('../models/Usuario');

// Mostrar formulario
exports.getRegistroForm = (req, res) => {
    res.render('usuarios/registro');
};

// Guardar usuario en Aiven
exports.crearUsuario = async (req, res) => {
    try {
        const { nombre, email } = req.body;
        await Usuario.create({ nombre, email });
        res.redirect('/?registro=exito'); 
    } catch (error) {
        // Esto atrapará el error y te dirá exactamente qué campo falló
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send("Ese correo electrónico ya está registrado.");
        }
        if (error.name === 'SequelizeValidationError') {
            const mensajes = error.errors.map(err => err.message);
            return res.status(400).send("Error de validación: " + mensajes.join(", "));
        }
        res.status(500).send("Error interno del servidor");
    }
};

// Listar usuarios (para el admin)
exports.listarUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
};