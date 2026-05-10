const Reserva = require('../models/Reserva');
const Usuario = require('../models/Usuario');
const Servicio = require('../models/Servicio');

// Crear una nueva reserva
exports.crearReserva = async (req, res) => {
    try {
        const { usuarioId, servicioId, fecha } = req.body;
        
        // Verificamos que el servicio existe antes de reservar [cite: 38]
        const servicio = await Servicio.findByPk(servicioId);
        if (!servicio) return res.status(404).json({ mensaje: "Servicio no encontrado" });

        const nuevaReserva = await Reserva.create({
            usuarioId,
            servicioId,
            fecha,
            estado: 'pendiente' // Estado inicial por defecto [cite: 27, 52]
        });

        res.status(201).render('reservas/confirmacion', { reserva: nuevaReserva });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear la reserva", error: error.message });
    }
};

// Obtener todas las reservas [cite: 18]
exports.listarReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({ include: [Usuario, Servicio] });
        res.render('reservas/lista', { reservas });
    } catch (error) {
        res.status(500).send("Error al cargar reservas");
    }
};