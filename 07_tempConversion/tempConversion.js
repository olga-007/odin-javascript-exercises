const convertToCelsius = function(f) {
  let c = (f - 32) * 5/9;
  return Math.round(10 * c) / 10;
};

const convertToFahrenheit = function(c) {
  let f = c * 9/5 + 32;
  return Math.round(10 * f) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
