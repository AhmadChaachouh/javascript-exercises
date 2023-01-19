const convertToCelsius = function(fah) {
  let c = (fah -32)/1.8;
  if(c == Math.floor(c)){
    return c;
  }else{
  return parseFloat(c.toFixed(1));
  }
};

const convertToFahrenheit = function(c) {
  let f = 1.8*c +32;
  if(f == Math.floor(f)){
    return f;
  }else{
  return parseFloat(f.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
