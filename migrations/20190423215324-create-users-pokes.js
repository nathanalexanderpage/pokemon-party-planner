'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_pokes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      pokeId: {
        type: Sequelize.INTEGER
      },
      profile_name: {
        type: Sequelize.STRING
      },
      name: {
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
    return queryInterface.dropTable('users_pokes');
  }
};
