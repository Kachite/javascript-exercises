const convertToCelsius = function (x) {
  let rounded = Math.round(((x - 32) * (5 / 9)) * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (x) {
  let rounded = Math.round((x * (9 / 5) + 32) * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
