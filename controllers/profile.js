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
    console.log(results);
    let dexNoArr = [];
    results.forEach(result => {
      if (!dexNoArr.includes(result.dataValues.dexId)) {
        dexNoArr.push(result.dataValues.dexId)
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
              featuredPartyPokes: featuredPartyPokes
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

router.get('/pokemon/dex/:id', loggedIn, (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
  console.log(req.user.dataValues.id);
  db.own.findAll({
    where: {
      userId: req.user.dataValues.id,
      dexId: req.params.id
    }
  })
  .then((allOwnsMatches) => {
    console.log(allOwnsMatches);
    res.render('profile/pokedisambig', {ownsData: allOwnsMatches});
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

router.get('/parties/:id', loggedIn, (req, res) => {
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
            dexesInfo: ownResults
          })
        })
      })
    })
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
