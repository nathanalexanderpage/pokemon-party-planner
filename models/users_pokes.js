'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_pokes = sequelize.define('users_pokes', {
    userId: DataTypes.INTEGER,
    pokeDex: DataTypes.INTEGER,
    profile_name: DataTypes.STRING,
    name: DataTypes.STRING,
    ability: DataTypes.STRING,
    move1: DataTypes.STRING,
    move2: DataTypes.STRING,
    move3: DataTypes.STRING,
    move4: DataTypes.STRING
  }, {});
  users_pokes.associate = function(models) {
    // associations can be defined here
  };
  return users_pokes;
};
