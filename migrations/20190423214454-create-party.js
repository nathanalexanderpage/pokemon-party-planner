'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      p1Id: {
        type: Sequelize.INTEGER
      },
      p2Id: {
        type: Sequelize.INTEGER
      },
      p3Id: {
        type: Sequelize.INTEGER
      },
      p4Id: {
        type: Sequelize.INTEGER
      },
      p5Id: {
        type: Sequelize.INTEGER
      },
      p6Id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parties');
  }
};