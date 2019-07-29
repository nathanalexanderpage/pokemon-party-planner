const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

abilityObj = {
  id: 1,
  name: "arenatrap"
}

myArr = [];


request(`https://www.serebii.net/abilitydex/${abilityObj.name}.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html)
    let abilityName = $('.dextable').children('tbody').children('tr').eq(1).children('td').eq(0).text();
    let desc = $('.dextable').eq(1).children('tbody').children('tr').eq(3).text();
    let descRegex = desc.match(/([é\w]+[-'!,.\?\s])+/g).join(' ');

    let pokeWhoHas = Number($('[name=pkmn]').parent().eq(0).next().eq(0).children('table').eq(0).children('tbody').children('tr').eq(2).children('td').eq(0).text().match(/\S+/g)[0].slice(1,4));

    let pokesWhoHave = [];
    let howManyHave = $('[name=pkmn]').eq(0).parent().next().children('table').children('tbody').children('tr').length;
    console.log(howManyHave);

    for (var i = 2; i < howManyHave; i++) {
      let pokeWhoHas = Number($('[name=pkmn]').parent().eq(0).next().eq(0).children('table').eq(0).children('tbody').children('tr').eq(i).children('td').eq(0).text().match(/\S+/g)[0].slice(1,4));
      pokesWhoHave.push(pokeWhoHas);
    }


    let abilityData = {
      id: abilityObj.id,
      name: abilityName,
      desc: descRegex,
      whoLearns: pokesWhoHave
    }
    console.log(abilityData);
  }
})
