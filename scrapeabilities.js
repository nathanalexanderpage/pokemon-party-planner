const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
const db = require('./models')
// import mapSeries from 'async/mapSeries';
// import doLimit from './internal/doLimit';


let abilityArr = [];
let abilityUrlArr = [];
let abilityObjList = [];




function generateMovesObjList() {
  return new Promise(resolve => {


    request(`https://www.serebii.net/abilitydex/arenatrap.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html);

        for (var j = 0; j < $('select').length; j++) {
          for (var i = 1; i < $('select').eq(j).children('option').length; i++) {

            // properly capitalized name
            let abilityName = $('select').eq(j).children('option').eq(i).text().toLowerCase();
            abilityArr.push(abilityName);

            // mutations to find URL-appropriate string
            let abilityNameR = abilityName.match(/([A-Za-z]+['-]?)/g);
            let resultLowerCommas = abilityNameR.join();
            let abilityNameUrl = resultLowerCommas.replace(/,/g, '');
            // console.log(`abilityNameUrl = ${abilityNameUrl}`);
            abilityUrlArr.push(abilityNameUrl);

          }
        }


        // console.log(`abilityArr = ${abilityArr}`);


        abilityArr.forEach((ability, i) => {
          let newAbilityObj = {
            id: i + 1,
            name: ability,
            urlName: abilityUrlArr[i]
          }
          abilityObjList.push(newAbilityObj);
        });

        resolve(abilityObjList);

      }
    });

  });
}

async function asyncMapRequests() {
  console.log('calling asyncMapRequests');
  var result = await generateMovesObjList();
  // expected output: whatever's inside the parentheses of promisified function
  console.log(result);
  console.log('calling full generator');



  async.mapSeries(abilityObjList, asyncfunc, (err, results) => {
    results.forEach((abilityEach) => {
      db.ability.findOrCreate({
        where: {
          id: abilityEach.id,
          name: abilityEach.name,
          desc: abilityEach.desc
        }
      })
      .then((insertedAbility, wasCreated) => {
        console.log(insertedAbility[0].dataValues.id);
        abilityEach.whoHas.forEach((dexIdNo) => {
          console.log(`rls abilityId ${abilityEach.id}, dexId ${dexIdNo}`);
          if (dexIdNo < 722) {
            db.abilities_dexes.findOrCreate({
              where: {
                abilityId: abilityEach.id,
                dexId: dexIdNo
              }
            })
          }
        })
      })
      .catch(function(error) {
        console.log("error at db.ability.findOrCreate: ", error);
      });
    })
  });


  function asyncfunc(abilityObj, callback) {
    request(`https://www.serebii.net/abilitydex/${abilityObj.urlName}.shtml`, (err, cheerioResp, html) => {
      if (!err && cheerioResp.statusCode == 200) {
        const $ = cheerio.load(html);
        // console.log(abilityObj.name);
        let desc = $('.dextable').eq(1).children('tbody').children('tr').eq(3).text();
        let descRegex = desc.match(/([é\w]+[-'!,.\?\s])+/g).join(' ');

        let pokeWhoHas = Number($('[name=pkmn]').parent().next().children('table').children('tbody').children('tr').eq(2).children('td').eq(0).text().match(/\S+/g)[0].slice(1,4));

        let pokesWhoHave = [];
        let howManyHave = $('[name=pkmn]').eq(0).parent().next().children('table').children('tbody').children('tr').length - 2;
        for (var i = 2; i < howManyHave + 2; i++) {
          let pokeWhoHas = Number($('[name=pkmn]').parent().eq(0).next().eq(0).children('table').eq(0).children('tbody').children('tr').eq(i).children('td').eq(0).text().match(/\S+/g)[0].slice(1,4));
          pokesWhoHave.push(pokeWhoHas);
        }


        let abilityData = {
          id: abilityObj.id,
          name: abilityObj.name,
          desc: descRegex,
          howManyHave: howManyHave,
          whoHas: pokesWhoHave
        }
        console.log(abilityData);
        callback(null, abilityData);
      } else {
        callback('err', null);
      }
    })
  }



}

asyncMapRequests();
// export default doLimit(mapLimit, 1);
