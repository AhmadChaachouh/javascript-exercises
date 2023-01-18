const sumAll = function(a,b) {
    if(typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR";
    }
    if(a < 0 || b < 0){
        return "ERROR";
    }
    if(a > b){
        let tmp = 0;
        tmp = b;
        b = a;
        a = tmp;
    }
    let s = 0;
    for (i = a; i <= b; i++){
        s = s + i;
    }
    return s;
};

// Do not edit below this line
module.exports = sumAll;
