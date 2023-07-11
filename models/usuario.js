'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nombre: DataTypes.STRING,
    contraseña: DataTypes.STRING
  }, {});
  usuario.associate = function(models) {
    // associations can be defined here
  };
  return usuario;
};