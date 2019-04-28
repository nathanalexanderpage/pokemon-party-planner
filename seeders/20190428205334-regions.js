'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('gens', [
      {
        name: 'kanto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'johto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'hoenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sinnoh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'unova',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kalos',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
