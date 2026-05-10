const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Servicio = sequelize.define('Servicio', {
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: { len: [3, 100] } // Validación de min 3 caracteres [cite: 35]
    },
    descripcion: { type: DataTypes.TEXT },
    precio: { 
        type: DataTypes.FLOAT, 
        validate: { min: 0.1 } // El precio debe ser mayor que 0 [cite: 36]
    },
    empresa: { type: DataTypes.STRING }, // Nombre de la empresa que ofrece el servicio
    imagen: { type: DataTypes.STRING }   // Guardaremos la URL de la imagen para el carrusel
});

module.exports = Servicio;