'use strict';
module.exports = (sequelize, DataTypes) => {
  const nParty = sequelize.define('nParty', {
    userId: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    p1Id: DataTypes.INTEGER,
    p2Id: DataTypes.INTEGER,
    p3Id: DataTypes.INTEGER,
    p4Id: DataTypes.INTEGER,
    p5Id: DataTypes.INTEGER,
    p6Id: DataTypes.INTEGER
  }, {});
  nParty.associate = function(models) {
    // associations can be defined here
  };
  return nParty;
};