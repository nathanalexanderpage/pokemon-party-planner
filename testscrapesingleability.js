const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

abilityObj = {
  id: 1,
  name: "arenatrap"
}

myArr = [];


request(`https://www.serebii.net/attackdex-xy/${abilityObj.name}.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html)
    let abilityName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
    // console.log(abilityName);
    let abilityNameRegex = abilityName.match(/[A-Za-z]+([\s'-][A-Za-z]+([\s-][A-Za-z]+)?)?/g);
    let abilityType = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(1).children('a').attr('href');
    let abilityTypeRegex = abilityType.match(/\w+/g);
    let abilityCat = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(2).children('a').attr('href');
    let abilityCatRegex = abilityCat.match(/\w+/g);
    let abilityPp = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(0).text();
    let abilityPpRegex = abilityPp.match(/\w+/g);
    let abilityBasePower = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(1).text();
    let abilityBasePowerRegex = abilityBasePower.match(/\w+/g);
    let abilityAccuracy = $('.dextable').children('tbody').children('tr').eq(3).children('td').eq(2).text();
    let abilityAccuracyRegex = abilityAccuracy.match(/\w+/g);
    let abilityDesc = $('.dextable').eq(0).children('tbody').children('tr').eq(5).text();
    let abilityDescRegex = abilityDesc.match(/(\w+[-'!,.\?\s])+/g).join(' ');
    myArr.push(abilityDescRegex);
    console.log(abilityDescRegex);

    let howManyLearn = $('.dextable').eq(2).children('tbody').children('tr').length - 2;

    // let pokesWhoLearn = [];
    // for (var i = 2; i < howManyLearn + 2; i++) {
    //   let pokeWhoLearns = $('.dextable').eq(2).children('tbody').children('tr').eq(i).children('td').eq(0).text();
    //   pokesWhoLearn.push(Number(pokeWhoLearns.slice(1,4)));
    // }


    let abilityData = {
      id: abilityObj.id,
      name: 0,
      desc: 0,
      whoLearns: 0
    }
    // console.log(abilityData);
  }
})
