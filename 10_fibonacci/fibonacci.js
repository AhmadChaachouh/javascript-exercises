const fibonacci = function(n) {
    if(n < 0){return "OOPS";}
    else{let previous = 0;
    let current = 1;
    let tmp = 0
    for(i=1 ; i<parseInt(n) ; i++){
        tmp = current
        current = current + previous;
        previous = tmp;
    }
    return current;}
};

// Do not edit below this line
module.exports = fibonacci;
