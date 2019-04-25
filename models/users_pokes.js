'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_pokes = sequelize.define('users_pokes', {
    userId: DataTypes.INTEGER,
    pokeDex: DataTypes.INTEGER,
    profile_name: DataTypes.STRING,
    name: DataTypes.STRING,
    move1: DataTypes.INTEGER,
    move2: DataTypes.INTEGER,
    move3: DataTypes.INTEGER,
    move4: DataTypes.INTEGER
  }, {})
  users_pokes.associate = function(models) {
    // associations can be defined here
    models.users_pokes.belongsTo(models.poke, {foreignKey: 'pokeDex', targetKey: 'dex'})
    // models.users_pokes.belongsTo(models.user, {foreignKey: 'id', targetKey: 'userId'})
  };
  return users_pokes;
};
