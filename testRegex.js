let moveName = "Forest's Curse";

let result = moveName.match(/\w+([\s'-]\w+([\s-]\w+)?)?/g);
let moveNameR = moveName.match(/(\w+['-]?)/g);
let resultwant1 = moveNameR.join().toLowerCase();
let moveNameUrl = resultwant1.replace(/,/g, '');

console.log(moveNameUrl);

// var str = "Is this all there is?";
// var patt1 = /\s/g;
// var result = str.match(patt1);
//
// console.log(result);
