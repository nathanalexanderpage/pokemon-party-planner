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
  console.log(req);
  db.own.findAll({
    where: {
      userId: req.user.id
    },
    order: [
      ['id', 'DESC']
    ]
  })
  .then((results) => {
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
        db.owns_parties.findAll({
          where: {
            partyId: parties[0].id
          },
          limit: 6
        })
        .then(featuredParty => {
          console.log(featuredParty);
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
            // console.log(dexResults);
            // res.send(results)
            console.log(featuredPartyPokes);
            res.render('profile/index', {
              results: results,
              dexResults: dexResults,
              parties: parties,
              featuredPartyPokes: featuredPartyPokes,
              recents: recents
            })
          })
        })
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
  console.log('req.user.dataValues.id');
  console.log(req.user.dataValues.id);
  console.log('req.params.id');
  console.log(req.params.id);
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
  console.log('req.body things:');
  console.log(req.body);
  let creationAttr = {};
  if (req.body.dexId) {
    creationAttr.dexId = req.body.dexId
  }
  if (!creationAttr.dexId) {
    res.redirect('/profile', {alert: 'Error occurred in creation of new pokémon'})
  }
  console.log('req.body.name');
  console.log(req.body.name);
  if (!req.body.name || req.body.name.strip() !== '') {
    console.log('INSIDE DEFAULT NAME SPACE');
    creationAttr.nickname = req.body.dexName
  } else {
    creationAttr.nickname = req.body.name
  }
  if (req.body.profilename) {
    creationAttr.profilename = req.body.profilename
  }
  if (req.body.abilityId) {
    creationAttr.abilityId = req.body.abilityId
  }
  creationAttr.userId = req.user.dataValues.id
  db.own.create(creationAttr)
  .then(createdPoke => {
    res.redirect(`/profile/pokemon/${createdPoke.id}`)
  })
})


// GET /profile/pokemon/:id
router.get('/pokemon/:id', loggedIn, (req, res) => {
  // console.log(req.params);
  db.own.findOne({
    where: {
      id: req.params.id
    },
    include: [db.dex]
  })
  .then((resultOwn) => {
    // console.log(req.params.dex);
    console.log(resultOwn);

    if (resultOwn.dataValues.userId === req.user.id) { // make sure user only can look at their own pokes
      db.dexes_moves.findAll({
        where: {
          dexId: resultOwn.dataValues.dexId
        }
      })
      .then((resultDexMoves) => { // keys: dexId, moveId
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
                    console.log(potAbilArr);
                    // res.send({abilitiesData: dexAbilArr, dexData: resultOwn, ownMoves: ownMovesDetails, ownMovesArr: ownMovesArr, dexMoveData: dexMoveData, typeInfo: typeInfo, ownAbilIndex: ownKnownAbilIndex});
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
    console.log(updatedRecord);
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
  // res.send(req.body);
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
  console.log(req.body);
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
    console.log('STAGE 1 COMPLETE');
    // console.log(playerParties);
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
      console.log('STAGE 2 COMPLETE');
      // console.log(ownIdRecords);
      let ownIds = [];
      ownIdRecords.forEach(record => {
        if (!ownIds.includes(record.ownId)) {
          ownIds.push(record.ownId)
        }
      })
      console.log('ownIds');
      console.log(ownIds);
      db.own.findAll({
        where: {
          id: {[Op.in]: ownIds}
        }
      })
      .then(owns => {
        console.log('STAGE 3 COMPLETE');
        // console.log(owns);
        db.moves_owns.findAll({
          where: {
            ownId: {[Op.in]: ownIds}
          }
        })
        .then(moveIdRecords => {
          console.log('STAGE 4 COMPLETE');
          // console.log(moveIdRecords);
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
            console.log('STAGE 5 COMPLETE');
            // console.log(moves);
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
            console.log(19191919919191991991919191);
            console.log('partiesObj');
            console.log(partiesObj);
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
      console.log('returnedParty ID:');
      console.log(returnedParty.id);
      console.log('returnedParty:');
      console.log(returnedParty);
      res.redirect(`/profile/${1}`);
    } else {
      console.log('no duplicate');
      if (req.body.name.trim() === '') {
        req.body.name = defaultPartyName
      }
      db.party.create({
        userId: req.user.dataValues.id,
        name: req.body.name,
        desc: req.body.desc,
        public: false
      })
      .then(newParty => {
        console.log(newParty);
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
        console.log(ownsInParty);
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
          console.log(ownResults);
          db.moves_owns.findAll({
            where: {
              ownId: {[Op.in]: ownIdsInParty}
            }
          })
          .then((movesInParty) => {
            console.log(movesInParty);
            let moveIds = []
            movesInParty.forEach((moveInParty) => {
              moveIds.push(moveInParty.dataValues.moveId);
            })
            console.log(moveIds);
            db.move.findAll({
              where: {
                id: {[Op.in]: moveIds}
              }
            })
            .then((moveRecords) => {

              // console.log(moveRecords);
              let movesPerPoke = {}
              movesInParty.forEach((moveOfPoke) => {
                if (!movesPerPoke[moveOfPoke.dataValues.pokeId]) {
                  movesPerPoke[moveOfPoke.dataValues.pokeId] = []
                }
                // movesPerPoke[moveOfPoke.dataValues.pokeId].push(moveRecords)
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
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
  console.log(req.user.dataValues);
  db.party.findAll({
    where: {
      userId: req.user.dataValues.id
    }
  })
  .then((foundParties) => {
    if (!foundParties[0]) {
      console.log("no parties found route");
      db.party.create({
        userId: req.user.dataValues.id,
        name: "untitled party",
        public: false
      })
      .then((createdParty) => {
        res.redirect(`/profile/parties/add-pokemon/${req.body.ownId}`);
      })
    } else {
      console.log("parties found route");
      console.log(req.body.ownId);
      res.redirect(`/profile/parties/add-pokemon/${req.body.ownId}`);
    }
  })
})

router.delete('/pokemon/remove-from-party', loggedIn, (req, res) => {
  console.log(0101010101010101010101010101010101010101001010101010100110010010100100110101010100101010001010101001010);
  console.log(req.body.ownId, req.body.partyId);
  db.owns_parties.destroy({
    where: {
      ownId: req.body.ownId,
      partyId: req.body.partyId
    }
  })
  .then(() => {
    // console.log(req.headers);
    // console.log(req.headers.referer.substring(req.headers.origin.length,req.headers.referer.length));
    res.redirect(`/profile/parties/${req.body.partyId}`)
  })
})

// choose-which-parties-to-add-to screen
router.get('/parties/add-pokemon/:id', loggedIn, (req, res) => {
  db.party.findAll({
    where: {
      userId: req.user.dataValues.id
    }
  })
  .then((results) => {
    console.log(req.params.id);
    res.render('profile/partiestoaddto', {idToAdd: req.params.id, partiesData: results});
  })
})

// Export the routes from this file
module.exports = router
