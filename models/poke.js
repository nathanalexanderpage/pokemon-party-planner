'use strict';
module.exports = (sequelize, DataTypes) => {
  const poke = sequelize.define('poke', {
    dex: DataTypes.INTEGER,
    name: DataTypes.STRING,
    urlImage: DataTypes.TEXT,
    urlSprite: DataTypes.TEXT
  }, {});
  poke.associate = function(models) {
    // associations can be defined here
    models.poke.hasMany(models.users_pokes, {foreignKey: 'pokeDex', sourceKey: 'dex'})
  };
  return poke;
};
