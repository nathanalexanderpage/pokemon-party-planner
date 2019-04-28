const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

let abilitiesArr = [];
let abilityUrlArr = [];
let movesObjList = [];


request(`https://www.serebii.net/abilitydex/arenatrap.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html);

    for (var j = 0; j < $('select').length; j++) {
      for (var i = 1; i < $('select').eq(j).children('option').length; i++) {

        // properly capitalized name
        let moveName = $('select').eq(j).children('option').eq(i).text().toLowerCase();
        abilitiesArr.push(moveName);

        // mutations to find URL-appropriate string
        let moveNameR = moveName.match(/(\w+['-]?)/g);
        let resultLowerCommas = moveNameR.join();
        let moveNameUrl = resultLowerCommas.replace(/,/g, '');
        // console.log(`moveNameUrl = ${moveNameUrl}`);
        abilityUrlArr.push(moveNameUrl);

      }
    }
    let moveName = $('select').eq(0).children('option').eq(1).text().toLowerCase();
    console.log(moveName);

    // console.log(`abilitiesArr = ${abilitiesArr}`);


    // abilitiesArr.forEach((move, i) => {
    //   let newMoveObj = {
    //     id: i + 1,
    //     name: move,
    //     urlName: abilityUrlArr[i]
    //   }
    //   movesObjList.push(newMoveObj);
    // });
    //
    // console.log(movesObjList);
  }

});
