function toUSD(number) {
  return number.toLocaleString('en', {style: 'currency', currency: 'USD'});
}

module.exports = toUSD;
