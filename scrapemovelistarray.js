const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

let moveArr = [];

request(`https://www.serebii.net/attackdex-xy/absorb.shtml`, (err, cheerioResp, html) => {
  if (!err && cheerioResp.statusCode == 200) {
    const $ = cheerio.load(html)

    let moveName = $('select').eq(0).children('option').eq(1).text();



    for (var j = 0; j < $('select').length; j++) {
      for (var i = 1; i < $('select').eq(0).children('option').length; i++) {
        let moveName = $('select').eq(j).children('option').eq(i).text();
        moveArr.push(moveName)
      }
    }
    let dropbox1length = $('select').length
    //.eq(0).children('option').length

    console.log(moveArr);
  }
});
