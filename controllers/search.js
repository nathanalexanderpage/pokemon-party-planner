// Require needed modules
let express = require('express')
var request = require('request')

// Declare express router
let router = express.Router()

// Reference models
let db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

// Include custom middleware to ensure users logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

// Declare routes
router.get('/', (req, res) => {
  db.gen.findAll()
  .then((gensObj) => {
    db.type.findAll()
    .then((typesObj) => {
      // 6, 7, 11, 13-17
      db.dexes_types.findAll({
        order: [
          ['typeId', 'ASC']
        ]
      })
      .then((allTypes) => {
        let typesSearchableArr = []
        allTypes.forEach(type => {
          if (!typesSearchableArr[0] || typesSearchableArr[typesSearchableArr.length - 1] !== type.dataValues.typeId) {
            typesSearchableArr.push(type.dataValues.typeId)
          }
        })
        console.log('typesSearchableArr');
        console.log(typesSearchableArr);
        for (var i = 1; i <= 18; i++) {
          // console.log(typesSearchableArr.indexOf(i));
          console.log(!(typesSearchableArr.indexOf(i) !== -1)? 'disabled' : i);
        }
        res.render(
          'search/index.ejs',
          {
            type: typesObj,
            gen: gensObj,
            searchTypes: typesSearchableArr
          }
        )
      })
    })
  })
})

router.get('/pokemon', (req, res) => {
  if (typeof req.query.gen === 'string') {
    genArr = [];
    genArr.push(req.query.gen);
    req.query.gen = genArr;
  }
  if (!Array.isArray(req.query.type)) {
    req.query.type = [req.query.type];
  }
  console.log('--------------------');
  console.log('-----REQ.QUERY:-----');
  console.log('--------------------');
  console.log(req.query);
  // res.send(req.query.gen.length)

  // sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})
  db.dexes_types.findAll({
    where: {
      typeId: {[Op.in]: req.query.type},
    },
    order: [
      ['dexId', 'ASC']
    ]
  })
  .then((results) => {
    let dexIdArr = [];
    results.forEach(result => {
      if (!dexIdArr[0] || dexIdArr[dexIdArr.length - 1] !== result.dataValues.dexId) {
        dexIdArr.push(result.dataValues.dexId)
      }
    })
    console.log(dexIdArr);
    db.dex.findAll({
      include: [{
        model: db.type,
        attributes: ['id', 'name']
      }],
      where: {
        id: {[Op.in]: dexIdArr},
        genId: {[Op.in]: req.query.gen}
      },
      order: [
        ['id', 'ASC']
      ]
    })
    .then((results) => {
      // console.log(results);
      res.render('search/pokemon', { results: results })
    })
  })

})

router.post('/add-pokemon', (req, res) => {
  if (req.user === undefined) {
    res.redirect('/auth/login')
  } else {
    console.log(req.user.dataValues);
    db.own.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        dexId: req.body.dex
      }
    })
    .then((record) => {
      if (!record[1]) {
        res.redirect(`/profile/pokemon/dex/${record[0].dataValues.dexId}`)
      } else {
        db.own.update({
          nickname: req.body.dexName
        },{
          where: {
            userId: req.user.dataValues.id,
            dexId: req.body.dex
          }
        })
        .then(() => {
          let origSearchParams = req.headers.referer.substring(req.headers.referer.indexOf('?'), req.headers.referer.length)
          res.redirect(`/search/pokemon${origSearchParams}#result-${req.body.dex}`)
        })
      }
    })
  }
})

// Export routes from this file
module.exports = router
