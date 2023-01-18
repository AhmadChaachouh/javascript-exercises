const reverseString = function(string) {
    let r = "";
    for(i = string.length - 1; i >= 0; i--){
        r = r.concat(string[i]);
    }
    return r;
};

// Do not edit below this line
module.exports = reverseString;
