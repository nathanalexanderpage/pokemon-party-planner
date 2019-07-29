const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

let abilitiesArr = [];
let abilitiesUrlArr = [];
let abilitiesObjList = [];


request(`https://www.serebii.net/abilitydex/arenatrap.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html);

    for (var j = 0; j < $('select').length; j++) {
      for (var i = 1; i < $('select').eq(j).children('option').length; i++) {

        // properly capitalized name
        let abilityName = $('select').eq(j).children('option').eq(i).text().toLowerCase();
        abilitiesArr.push(abilityName);

        // mutations to find URL-appropriate string
        let abilityNameR = abilityName.match(/([A-Za-z]+['-]?)/g);
        let resultLowerCommas = abilityNameR.join();
        let abilityNameUrl = resultLowerCommas.replace(/,/g, '');
        abilitiesUrlArr.push(abilityNameUrl);

      }
    }


    abilitiesArr.forEach((move, i) => {
      let newMoveObj = {
        id: i + 1,
        name: move,
        urlName: abilitiesUrlArr[i]
      }
      abilitiesObjList.push(newMoveObj);
    });

    console.log(abilitiesObjList);
  }

});
