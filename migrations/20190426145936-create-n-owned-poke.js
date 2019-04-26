'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nOwnedPokes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nDexId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      profilename: {
        type: Sequelize.STRING
      },
      move1: {
        type: Sequelize.INTEGER
      },
      move2: {
        type: Sequelize.INTEGER
      },
      move3: {
        type: Sequelize.INTEGER
      },
      move4: {
        type: Sequelize.INTEGER
      },
      ability: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('nOwnedPokes');
  }
};
