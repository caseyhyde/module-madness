var random = require('./moduleOne');
var toUSD = require('./moduleTwo');

function randomToUSD() {
  var randomNum = random(100, 1000000);
  return toUSD(randomNum);
}

function text() {
  return "Account balance: \n";
}

module.exports.randomToUSD = randomToUSD;
module.exports.text = text;
