const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { usuario } = require('../models');
const config = require('../config');

// Controlador para registrar un nuevo usuario
exports.signupController = async (req, res) => {
  try {
    const { nombre, contraseña } = req.body; // Obtiene el nombre y la contraseña del cuerpo de la solicitud

    const hashedPassword = await bcrypt.hash(contraseña, 10); // Genera un hash de la contraseña usando bcrypt

    await usuario.create({
      nombre,
      contraseña: hashedPassword,
    }); // Crea un nuevo usuario en la base de datos con el nombre y la contraseña hashada

    // Crea un token JWT (JSON Web Token)
    const token = jwt.sign({ nombre }, config.secret, {
      expiresIn: 60 * 60 * 24, // Expira en 24 horas
    });

    res.json({ auth: true, token }); // Devuelve una respuesta JSON con el token generado
  } catch (e) {
    console.log(e);
    res.status(500).send('Hubo un problema al registrar su usuario'); // Devuelve un mensaje de error si ocurre un problema durante el registro
  }
};
/*
router.post('/signin',(req, res, next) => {
  res.json('sigin');
})

router.get('/me',(req, res, next) => {
  res.json('me');
})
*/

module.exports = router;

