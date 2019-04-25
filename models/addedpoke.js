'use strict';
module.exports = (sequelize, DataTypes) => {
  const addedPoke = sequelize.define('addedPoke', {
    userId: DataTypes.INTEGER,
    pokeDexId: DataTypes.INTEGER
  }, {});
  addedPoke.associate = function(models) {
    // associations can be defined here
    
  };
  return addedPoke;
};
