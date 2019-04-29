'use strict';
module.exports = (sequelize, DataTypes) => {
  const move = sequelize.define('move', {
    id: {type: DataTypes.INTEGER, primaryKey: true,},
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    typeId: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    category: DataTypes.STRING,
    pp: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER
  }, {});
  move.associate = function(models) {
    // associations can be defined here
    models.move.belongsTo(models.type)
    models.move.belongsToMany(models.own, {
      through: models.moves_owns
    })
    models.move.belongsToMany(models.dex, {
      through: models.dexes_moves
    })
  };
  return move;
};
