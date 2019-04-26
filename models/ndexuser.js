'use strict';
module.exports = (sequelize, DataTypes) => {
  const nDexUser = sequelize.define('nDexUser', {
    nDexNo: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  nDexUser.associate = function(models) {
    // associations can be defined here
  };
  return nDexUser;
};