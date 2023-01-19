const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let s = 0;
	for(i = 0; i < arr.length; i++){
    s = s + arr[i];
  }
  return s;
};

const multiply = function(arr) {
  let s = 1;
	for(i = 0; i < arr.length; i++){
    s = s*arr[i];
  }
  return s;
};

const power = function(a,b) {
  let p = 1;  
  for(i = 0; i < b; i++){
    p = p*a;
  }
  return p;
};

const factorial = function(a) {
	let f = 1;
  if(a == 0){
    return 1;
  }else{
    for(i = a ; i > 0; i--){
      f = f*i;
    }
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
