const sumAll = function (initial, final) {
  if (!Number.isInteger(initial) || !Number.isInteger(final)) {
    return "ERROR";
  }
  else if (initial < 0 || final <0){
    return "ERROR";
  }
  else if (initial > final) {
    let sum = final;
    for (i = final; i < initial; i++) {
      final++;
      sum += final;
    }
    return sum;
  } else {
    let sum = initial;
    for (let i = initial; i < final; i++) {
      initial++;
      sum += initial;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
