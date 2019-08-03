// Require needed modules
let express = require('express')
var request = require('request')

// Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Include our custom middleware to ensure that users are logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

// GET /profile
router.get('/', loggedIn, (req, res) => {
  db.own.findAll({
    where: {
      userId: req.user.id
    },
    order: [
      ['id', 'DESC']
    ]
  })
  .then((results) => {
    let doesOwnPokes = true;
    if (!results[0]) {
      doesOwnPokes = false;
    }
    console.log(results);
    let dexNoArr = [];
    let recents = [];
    results.forEach((result, i) => {
      if (!dexNoArr.includes(result.dataValues.dexId)) {
        dexNoArr.push(result.dataValues.dexId)
      }
      if (i < 4) {
        recents.push(result)
      }
    })
    console.log(req);
    db.dex.findAll({
      where: {
        id: {[Op.in]: dexNoArr}
      },
      order: [
        ['id', 'ASC']
      ]
    })
    .then(dexResults => {
      db.party.findAll({
        where: {
          userId: req.user.id
        },
        order: [
          ['id', 'DESC']
        ],
        limit: 1
      })
      .then(parties => {
        let doesOwnParties = true;
        if (parties.length < 1 || !parties[0].id) {
          doesOwnParties = false;
        }
        if (doesOwnParties && doesOwnPokes) {
          db.owns_parties.findAll({
            where: {
              partyId: parties[0].id
            },
            limit: 6
          })
          .then(featuredParty => {
            let partyPokes = [];
            featuredParty.forEach(poke => {
              partyPokes.push(poke.ownId)
            })
            db.own.findAll({
              where: {
                id: {[Op.in]: partyPokes}
              }
            })
            .then(featuredPartyPokes => {
              res.render('profile/index', {
                results: results,
                dexResults: dexResults,
                parties: parties,
                featuredPartyPokes: featuredPartyPokes,
                recents: recents
              })
            })
          })
        } else {
          res.render('profile/index', {
            results: results,
            dexResults: dexResults,
            parties: parties,
            featuredPartyPokes: [],
            recents: []
          })
        }
      })
    })
  })
})

// GET /profile/admin
router.get('/admin', adminLoggedIn, (req, res) => {
  res.render('profile/admin')
})

// GET /profile/pokemon/dex/:id
router.get('/pokemon/dex/:id', loggedIn, (req, res) => {
  db.own.findAll({
    where: {
      userId: req.user.dataValues.id,
      dexId: req.params.id
    }
  })
  .then(owneddexiterations => {
    db.dex.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(dex => {
      res.render('profile/owneddexiterations', {
        owneddexiterations: owneddexiterations,
        dex: dex
      })
    })
  })
})

router.post('/pokemon/new', loggedIn, (req, res) => {
  let creationAttr = {};
  if (req.body.dexId) {
    creationAttr.dexId = req.body.dexId
  }
  if (!creationAttr.dexId) {
    res.redirect('/profile', {alert: 'Error occurred in creation of new pokémon'})
  }
  if (!req.body.nickname || req.body.nickname.trim() === '') {
    creationAttr.nickname = req.body.dexName.trim()
  } else {
    creationAttr.nickname = req.body.nickname.trim()
  }
  if (req.body.profilename) {
    creationAttr.profilename = req.body.profilename.trim()
  }
  if (req.body.abilityId) {
    creationAttr.abilityId = req.body.abilityId.trim()
  }
  creationAttr.userId = req.user.dataValues.id
  db.own.create(creationAttr)
  .then(createdPoke => {
    res.redirect(`/profile/pokemon/${createdPoke.id}`)
  })
})


// GET /profile/pokemon/:id
router.get('/pokemon/:id', loggedIn, (req, res) => {
  db.own.findOne({
    where: {
      id: req.params.id
    },
    include: [db.dex]
  })
  .then((resultOwn) => {
    if (resultOwn.dataValues.userId === req.user.id) {
      db.dexes_moves.findAll({
        where: {
          dexId: resultOwn.dataValues.dexId
        }
      })
      .then((resultDexMoves) => {
        dexMoveArr = [];
        resultDexMoves.forEach((dexMove) => {
          dexMoveArr.push(dexMove.moveId);
        })
        db.move.findAll({
          where: {
            id: {[Op.in]: dexMoveArr}
          }
        })
        .then((dexMoveData) => {
          db.moves_owns.findAll({
            where: {
              ownId: req.params.id
            }
          })
          .then((ownMoves) => {
            let ownMovesArr = [];
            ownMoves.forEach((ownMoveObj) => {
              ownMovesArr.push(ownMoveObj.moveId);
            })
            db.abilities_dexes.findAll({
              where: {
                dexId: resultOwn.dataValues.dexId
              },
              order: [
                ['abilityId', 'ASC']
              ]
            })
            .then((dexPotentialAbilities) => {
              potAbilArr = [];
              dexPotentialAbilities.forEach((potAbil) => {
                potAbilArr.push(potAbil.abilityId);
              })
              db.ability.findAll({
                where: {
                  id: {[Op.in]: potAbilArr}
                },
                order: [
                  ['id', 'ASC']
                ]
              })
              .then((dexAbilArr) => {

                db.move.findAll({
                  where: {
                    id: {[Op.in]: ownMovesArr}
                  },
                  order: [
                    ['id', 'ASC']
                  ]
                })
                .then((ownMovesDetails) => {
                  db.type.findAll()
                  .then((typeInfo) => {
                    let ownKnownAbilIndex = potAbilArr.indexOf(Number(resultOwn.abilityId));
                    res.render('profile/pokeindshow', {abilitiesData: dexAbilArr, dexData: resultOwn, ownMoves: ownMovesDetails, ownMovesArr: ownMovesArr, dexMoveData: dexMoveData, typeInfo: typeInfo, ownAbilIndex: ownKnownAbilIndex});
                  })
                })
              })
            })
          })
        })
      })
    } else {
      res.render('404');
    }
  })
  .catch((err) => {
    console.log('err: ', err);
  })
})

// add move to moveset
router.post('/pokemon/add-to-moveset', loggedIn, (req, res) => {
  db.moves_owns.findAll({ // find all moves known by poke
    where: {
      ownId: req.body.ownId
    }
  })
  .then((presentMoveRels) => {
    knownMoveIdArr = [];
    presentMoveRels.forEach((moveRel) => {
      knownMoveIdArr.push(moveRel.moveId);
    });
    db.move.findOne({
      where: {
        id: req.body.moveId
      }
    })
    .then((pressedMove) => {
      if (knownMoveIdArr.includes(Number(req.body.moveId))) {
        req.flash('error', `${pressedMove.name} already in moveset.`);
        res.redirect(`/profile/pokemon/${req.body.ownId}`);
      } else if (presentMoveRels.length > 3) {
        req.flash('error', `Moveset full; remove one before adding ${pressedMove.name}.`);
        res.redirect(`/profile/pokemon/${req.body.ownId}`);
      } else {
        db.moves_owns.findOrCreate({
          where: {
            ownId: req.body.ownId,
            moveId: req.body.moveId
          }
        })
        .then(() => { // send back to pokemon's prof page, location: scroll position of said move
          res.redirect(`/profile/pokemon/${req.body.ownId}#move-${req.body.moveId}`);
        })
      }
    })
  })
})

// change nickname/role desc for own model id: req.body.ownId
router.put('/pokemon/change-nickname-role', loggedIn, (req, res) => {
  db.own.update({
    nickname: req.body.nickname,
    profilename: req.body.profilename
  },{
    where: {
      id: req.body.ownId
    }
  })
  .then((updatedRecord) => {
    res.redirect(`/profile/pokemon/${req.body.ownId}`)
  })
})

// change which ability is applied for own model id: req.body.ownId
router.post('/pokemon/change-ability', loggedIn, (req, res) => {
  db.own.update({
    abilityId: req.body.abilityId
  },{
    where: {id: req.body.ownId}
  })
  .then((changedRec) => {
    res.redirect(`/profile/pokemon/${req.body.ownId}`)
  })
})

// remove a move from own model id: req.body.ownId
router.delete('/pokemon/remove-from-moveset', loggedIn, (req, res) => {
  db.moves_owns.destroy({
    where: {
      moveId: req.body.moveId,
      ownId: req.body.ownId
    }
  })
  .then(() => {
    res.redirect(`/profile/pokemon/${req.body.ownId}`);
  })
})

/* start of party-related routes */
router.post('/parties/add-pokemon/confirm', loggedIn, (req, res) => {
  db.owns_parties.findOrCreate({
    where: {
      ownId: req.body.ownId,
      partyId: req.body.partyId
    }
  })
  .then((newRecord) => {
    res.redirect(`/profile/parties/${req.body.partyId}`)
  })
})

router.get('/parties/', loggedIn, (req, res) => {
  db.party.findAll({
    where: {
      userId: req.user.dataValues.id
    }
  })
  .then(playerParties => {
    let partyIds = [];
    playerParties.forEach(party => {
      if (!partyIds.includes(party.id)) {
        partyIds.push(party.id)
      }
    })
    console.log(partyIds);
    db.owns_parties.findAll({
      where: {
        partyId: {[Op.in]: partyIds}
      }
    })
    .then(ownIdRecords => {
      let ownIds = [];
      ownIdRecords.forEach(record => {
        if (!ownIds.includes(record.ownId)) {
          ownIds.push(record.ownId)
        }
      })
      db.own.findAll({
        where: {
          id: {[Op.in]: ownIds}
        }
      })
      .then(owns => {
        db.moves_owns.findAll({
          where: {
            ownId: {[Op.in]: ownIds}
          }
        })
        .then(moveIdRecords => {
          let moveIdArr = [];
          moveIdRecords.forEach(record => {
            if (!moveIdArr.includes(record.moveId)) {
              moveIdArr.push(record.moveId)
            }
          })
          db.move.findAll({
            where: {
              id: {[Op.in]: moveIdArr}
            }
          })
          .then(moves => {
            let movesObj = {};
            moves.forEach(move => {
              movesObj[move.id] = {
                name: move.name,
                desc: move.desc,
                type: move.typeId,
                power: move.power,
                category: move.category,
                pp: move.pp,
                accuracy: move.accuracy
              }
            })
            ownsObj = {};
            owns.forEach(ownPoke => {
              ownsObj[ownPoke.id] = {
                dex: ownPoke.dexId,
                nickname: ownPoke.nickname,
                profName: ownPoke.profilename,
                moves: []
              }
            })
            partiesObj = {};
            playerParties.forEach(party => {
              partiesObj[party.id] = {
                name: party.name,
                desc: party.desc,
                public: party.public,
                pokemon: []
              }
            })
            console.log(ownsObj);
            moveIdRecords.forEach(moveIdRec => {
              console.log(moveIdRec.ownId);
              ownsObj[moveIdRec.ownId].moves.push(movesObj[moveIdRec.moveId])
            })
            ownIdRecords.forEach(ownIdRec => {
              if (partiesObj[ownIdRec.partyId].pokemon.length < 6) {
                partiesObj[ownIdRec.partyId].pokemon.push(ownsObj[ownIdRec.ownId])
              }
            })
            res.render('profile/partylist', {
              moves: movesObj,
              moves_owns: moveIdRecords,
              owns: ownsObj,
              owns_parties: ownIdRecords,
              partyIds: partyIds,
              parties: partiesObj
            })
          })
        })
      })
    })
  })
})

router.get('/parties/new', loggedIn, (req, res) => {
  res.render('profile/partynew')
})

router.post('/parties/new', loggedIn, (req, res) => {
  let defaultPartyName = 'untitled party'
  db.party.findAll({
    where: {
      userId: req.user.dataValues.id,
      name: req.body.name
    }
  })
  .then(returnedParty => {
    if (returnedParty.length > 0) {
      res.redirect(`/profile/${1}`);
    } else {
      if (req.body.name.trim() === '') {
        req.body.name = defaultPartyName
      }
      db.party.create({
        userId: req.user.dataValues.id,
        name: req.body.name.trim(),
        desc: req.body.desc.trim(),
        public: false
      })
      .then(newParty => {
        res.redirect(`/profile/parties/${newParty.dataValues.id}`);
      })
    }
  })
})

router.get('/parties/:id', loggedIn, (req, res) => {
  db.party.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(party => {
    if (party.dataValues.userId === req.user.dataValues.id) {
      db.owns_parties.findAll({
        where:
        {
          partyId: req.params.id
        }
      })
      .then((ownsInParty) => {
        let ownIdsInParty = [];
        ownsInParty.forEach((ownInParty) => {
          ownIdsInParty.push(ownInParty.dataValues.ownId);
        });
        db.own.findAll({
          where: {
            id: {[Op.in]: ownIdsInParty}
          },
          include: [db.dex]
        })
        .then((ownResults) => {
          db.moves_owns.findAll({
            where: {
              ownId: {[Op.in]: ownIdsInParty}
            }
          })
          .then((movesInParty) => {
            let moveIds = []
            movesInParty.forEach((moveInParty) => {
              moveIds.push(moveInParty.dataValues.moveId);
            })
            db.move.findAll({
              where: {
                id: {[Op.in]: moveIds}
              }
            })
            .then((moveRecords) => {
              let movesPerPoke = {}
              movesInParty.forEach((moveOfPoke) => {
                if (!movesPerPoke[moveOfPoke.dataValues.pokeId]) {
                  movesPerPoke[moveOfPoke.dataValues.pokeId] = []
                }
              })
              res.render('profile/partyshow',
              {
                partyId: req.params.id,
                ownsInParty: ownsInParty,
                dexesInfo: ownResults,
                party: party.dataValues
              })
            })
          })
        })
      })
    } else {
      res.redirect('/profile', {
        alerts:
          {
            error: 'The indicated party belongs to another user.'
          }
        }
      )
    }
  })

})

router.post('/pokemon/add-to-party', loggedIn, (req, res) => {
  db.party.findAll({
    where: {
      userId: req.user.dataValues.id
    }
  })
  .then((foundParties) => {
    if (!foundParties[0]) {
      db.party.create({
        userId: req.user.dataValues.id,
        name: "untitled party",
        public: false
      })
      .then((createdParty) => {
        res.redirect(`/profile/parties/add-pokemon/${req.body.ownId}`);
      })
    } else {
      res.redirect(`/profile/parties/add-pokemon/${req.body.ownId}`);
    }
  })
})

router.delete('/pokemon/remove-from-party', loggedIn, (req, res) => {
  db.owns_parties.destroy({
    where: {
      ownId: req.body.ownId,
      partyId: req.body.partyId
    }
  })
  .then(() => {
    res.redirect(`/profile/parties/${req.body.partyId}`)
  })
})

// choose-which-parties-to-add-to screen
router.get('/parties/add-pokemon/:id', loggedIn, (req, res) => {
  db.own.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(foundPoke => {
    if (!foundPoke) {
      req.flash('error', 'Something went wrong with your request. Try navigating the site rather than following URLs.')
      res.redirect('/profile');
    }
    if (foundPoke.userId !== req.user.dataValues.id) {
      req.flash('error', 'Other trainers\' pokémon can\'t be added to your parties.')
      res.redirect('/profile');
    }
    db.party.findAll({
      where: {
        userId: req.user.dataValues.id
      }
    })
    .then((results) => {
      res.render('profile/partiestoaddto', {idToAdd: req.params.id, partiesData: results});
    })
  })
})

router.get('*', loggedIn, (req, res) => {
  res.render('404')
})

// Export the routes from this file
module.exports = router
