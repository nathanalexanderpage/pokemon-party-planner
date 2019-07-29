const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

let movesObjList = [
  { id: 1, name: 'Absorb' }
  // ,
  // { id: 2, name: 'Acid' },
  // { id: 3, name: 'Acid Armor' },
  // { id: 4, name: 'Acid Spray' },
  // { id: 5, name: 'Acrobatics' },
  // { id: 6, name: 'Acupressure' },
  // { id: 7, name: 'Aerial Ace' },
  // { id: 8, name: 'Aeroblast' },
  // { id: 9, name: 'After You' },
  // { id: 10, name: 'Agility' },
  // { id: 11, name: 'Air Cutter' },
  // { id: 12, name: 'Air Slash' },
  // { id: 13, name: 'Ally Switch' },
  // { id: 14, name: 'Amnesia' },
  // { id: 15, name: 'Ancient Power' },
  // { id: 16, name: 'Aqua Jet' },
  // { id: 17, name: 'Aqua Ring' },
  // { id: 18, name: 'Aqua Tail' },
  // { id: 19, name: 'Arm Thrust' },
  // { id: 20, name: 'Aromatherapy' },
  // { id: 21, name: 'Aromatic Mist' },
  // { id: 22, name: 'Assist' },
  // { id: 23, name: 'Assurance' },
  // { id: 24, name: 'Astonish' },
  // { id: 25, name: 'Attack Order' },
  // { id: 26, name: 'Attract' },
  // { id: 27, name: 'Aura Sphere' },
  // { id: 28, name: 'Aurora Beam' },
  // { id: 29, name: 'Autotomize' },
  // { id: 30, name: 'Avalanche' },
  // { id: 31, name: 'Baby-Doll Eyes' },
  // { id: 32, name: 'Barrage' },
  // { id: 33, name: 'Barrier' },
  // { id: 34, name: 'Baton Pass' },
  // { id: 35, name: 'Beat Up' },
  // { id: 36, name: 'Belch' },
  // { id: 37, name: 'Belly Drum' },
  // { id: 38, name: 'Bestow' },
  // { id: 39, name: 'Bide' },
  // { id: 40, name: 'Bind' },
  // { id: 41, name: 'Bite' },
  // { id: 42, name: 'Blast Burn' },
  // { id: 43, name: 'Blaze Kick' },
  // { id: 44, name: 'Blizzard' },
  // { id: 45, name: 'Block' },
  // { id: 46, name: 'Blue Flare' },
  // { id: 47, name: 'Body Slam' },
  // { id: 48, name: 'Bolt Strike' },
  // { id: 49, name: 'Bone Club' },
  // { id: 50, name: 'Bone Rush' },
  // { id: 51, name: 'Bonemerang' },
  // { id: 52, name: 'Boomburst' },
  // { id: 53, name: 'Bounce' },
  // { id: 54, name: 'Brave Bird' },
  // { id: 55, name: 'Brick Break' },
  // { id: 56, name: 'Brine' },
  // { id: 57, name: 'Bubble' },
  // { id: 58, name: 'Bubble Beam' },
  // { id: 59, name: 'Bug Bite' },
  // { id: 60, name: 'Bug Buzz' },
  // { id: 61, name: 'Bulk Up' },
  // { id: 62, name: 'Bulldoze' },
  // { id: 63, name: 'Bullet Punch' },
  // { id: 64, name: 'Bullet Seed' },
  // { id: 65, name: 'Calm Mind' },
  // { id: 66, name: 'Camouflage' },
  // { id: 67, name: 'Captivate' },
  // { id: 68, name: 'Celebrate' },
  // { id: 69, name: 'Charge' },
  // { id: 70, name: 'Charge Beam' },
  // { id: 71, name: 'Charm' },
  // { id: 72, name: 'Chatter' },
  // { id: 73, name: 'Chip Away' },
  // { id: 74, name: 'Circle Throw' },
  // { id: 75, name: 'Clamp' },
  // { id: 76, name: 'Clear Smog' },
  // { id: 77, name: 'Close Combat' },
  // { id: 78, name: 'Coil' },
  // { id: 79, name: 'Comet Punch' },
  // { id: 80, name: 'Confide' },
  // { id: 81, name: 'Confuse Ray' },
  // { id: 82, name: 'Confusion' },
  // { id: 83, name: 'Constrict' },
  // { id: 84, name: 'Conversion' },
  // { id: 85, name: 'Conversion 2' },
  // { id: 86, name: 'Copycat' },
  // { id: 87, name: 'Cosmic Power' },
  // { id: 88, name: 'Cotton Guard' },
  // { id: 89, name: 'Cotton Spore' },
  // { id: 90, name: 'Counter' },
  // { id: 91, name: 'Covet' },
  // { id: 92, name: 'Crabhammer' },
  // { id: 93, name: 'Crafty Shield' },
  // { id: 94, name: 'Cross Chop' },
  // { id: 95, name: 'Cross Poison' },
  // { id: 96, name: 'Crunch' },
  // { id: 97, name: 'Crush Claw' },
  // { id: 98, name: 'Crush Grip' },
  // { id: 99, name: 'Curse' },
  // { id: 100, name: 'Cut' },
]

async.map(movesObjList, asyncfunc, (err, results) => {
  if (!err) {
    console.log(results);
  } else {
    console.log('errorrrr', err);
  }
});


function asyncfunc(moveObj, callback) {
  request(`https://www.serebii.net/attackdex-xy/${moveObj.name}.shtml`, (err, cheerioResp, html) => {
    if (!err && cheerioResp.statusCode == 200) {
      const $ = cheerio.load(html)
      let moveName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
      console.log(moveName);
      let moveNameRegex = moveName.match(/\w+([\s'-]\w+([\s-]\w+)?)?/g);
      let moveType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).children('a').attr('href');
      let moveTypeRegex = moveType.match(/\w+/g);
      let moveCat = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(2).children('a').attr('href');
      let moveCatRegex = moveCat.match(/\w+/g);
      let movePp = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(0).text();
      let movePpRegex = movePp.match(/\w+/g);
      let moveBasePower = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(1).text();
      let moveBasePowerRegex = moveBasePower.match(/\w+/g);
      let moveAccuracy = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(2).text();
      let moveAccuracyRegex = moveAccuracy.match(/\w+/g);
      let moveDesc = $('.dextable').text();
      let howManyLearn = $('.dextable').eq(2).children('tbody').children('tr').length - 2;

      let pokesWhoLearn = [];
      for (var i = 2; i < howManyLearn + 2; i++) {
        let pokeWhoLearns = $('.dextable').eq(2).children('tbody').children('tr').eq(i).children('td').eq(0).text();
        pokesWhoLearn.push(Number(pokeWhoLearns.slice(1,4)));
      }

      let howManyLearnBreeding = $('.dextable').eq(3).children('tbody').children('tr').length - 2;

      let pokesWhoLearnBreeding = [];
      for (var i = 2; i < howManyLearnBreeding + 2; i++) {
        let pokeWhoLearnsBreeding = $('.dextable').eq(3).children('tbody').children('tr').eq(i).children('td').eq(0).text();
        pokesWhoLearnBreeding.push(Number(pokeWhoLearnsBreeding.slice(1,4)));
      }

      let whoLearnsArr = pokesWhoLearn;
      pokesWhoLearnBreeding.forEach((poke, i) => {
        whoLearnsArr.indexOf(poke) ? whoLearnsArr.push(poke) : console.log("already present");
      })
      whoLearnsArr = whoLearnsArr.sort((a, b) => a - b);

      let moveData = {
        id: moveObj.id,
        name: moveNameRegex[0].toLowerCase(),
        type: moveTypeRegex[2],
        category: moveCatRegex[2],
        pp: Number(movePpRegex[0]),
        basePower: Number(moveBasePowerRegex[0]),
        accuracy: Number(moveAccuracyRegex[0]),
        whoLearns: whoLearnsArr
      }
      callback(null, moveData);
    } else {
      callback(err, null);
    }
  })
}
