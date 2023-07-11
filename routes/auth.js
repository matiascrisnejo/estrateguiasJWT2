const express = require('express');
const router = express.Router();
const {
  signup,
  getProfile,
  signin,
  logout,
} = require('../controllers/authController');
const verifyToken = require('../libs/verifyToken');

// Rutas de autenticación
router.post('/registrarse', signup);
router.post('/iniciar', signin);
router.get('/perfil', verifyToken, getProfile);
router.get('/cerrar', logout);

module.exports = router;