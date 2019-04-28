sequelize model:create --name moves_owns --attributes moveId:integer,ownId:integer
sequelize model:create --name owns_parties --attributes ownId:integer,partyId:integer



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
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      power: {
        allowNull: false,
        type: Sequelize.INTEGER
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


/*  USER MODEL  */
'use strict'

let bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a username!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Hey, please give me a valid email address!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 32],
          msg: 'Your password must be between 8 and 32 characters in length.'
        }
      }
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    defaultToPublic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    hooks: {
      beforeCreate: (pendingUser) => {
        if(pendingUser && pendingUser.password) {
          // hash the password before it goes into user table
          let hash = bcrypt.hashSync(pendingUser.password, 12)

          // Reassign the password to the hashed value
          pendingUser.password = hash
        }
      }
    }
  })

  user.associate = function(models) {
    // associations can be defined here
    /*  OLD  */
    // models.user.hasMany(models.users_pokes, {foreignKey: 'userId', sourceKey: 'id'})
    // models.user.hasMany(models.party, {foreignKey: 'userId', sourceKey: 'id'})
    // models.user.belongsToMany(models.addedPoke, {
    //   through: models.addedPoke, foreignKey: 'userId'
    // })

    /*  NEW  */
    models.user.hasMany(models.nParty, {foreignKey: 'userId', sourceKey: 'id'})
    models.user.belongsToMany(models.nDex, {
      through: models.nDexUser
    })
    models.user.hasMany(models.nOwnedPoke, {foreignKey: 'userId', sourceKey: 'id'})
  }

  user.prototype.validPassword = function(typedInPassword) {
    return bcrypt.compareSync(typedInPassword, this.password)
  }

  return user
}
