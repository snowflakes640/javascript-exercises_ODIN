const convertToCelsius = function(F) {
  C = 5*(F-32)/9
  if(Number.isInteger(C)){
    return C
  } else{
    return parseFloat(Number(C).toFixed(1))
  }
};

const convertToFahrenheit = function(C) {
  F = C*9/5 + 32
  if(Number.isInteger(F)){
    return F
  } else{
    return parseFloat(Number(F).toFixed(1))
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
