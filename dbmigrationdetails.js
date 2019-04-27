/*  DEX MIGRATION  */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokes', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      attack: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      defense: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      spAttack: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      spDefense: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      speed: {
        allowNull: false,
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
    return queryInterface.dropTable('pokes');
  }
};


/*  PARTY MIGRATION  */
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
        allowNull:false,
        type: Sequelize.INTEGER
      },
      isPublic: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaults: false
      },
      description: {
        type: Sequelize.TEXT
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


/*  OWN MIGRATION  */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('owns', {
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
      dexId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      archetype: {
        type: Sequelize.STRING
      },
      ability: {
        allowNull: false,
        type: Sequelize.STRING
      },
      abilityDesc: {
        allowNull: false,
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('owns');
  }
};


/*  MOVES MIGRATION  */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('moves', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      power: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      accuracy: {
        allowNull: false,
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
    return queryInterface.dropTable('moves');
  }
};



/*  TYPE MIGRATION  */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      normal: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      fire: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      water: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      electric: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      grass: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      ice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      fighting: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      poison: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      ground: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      flying: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      psychic: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      bug: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      rock: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      ghost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      dragon: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      dark: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      steel: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      fairy: {
        allowNull: false,
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('types');
  }
};
