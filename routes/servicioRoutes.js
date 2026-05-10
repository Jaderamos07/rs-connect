const express = require('express');
const router = express.Router();
// Aquí luego importaremos el controlador

// Ruta de prueba para ver que funciona
router.get('/test', (req, res) => {
    res.json({ mensaje: "La ruta de servicios funciona correctamente" });
});

module.exports = router;