const repeatString = function(text, num) {
    let t = "";
    if(num < 0){
        return "ERROR";
    }else{
       for(i = 0; i < num; i++){
            t = t.concat(text);
        }
    }
    return t;
};

// Do not edit below this line
module.exports = repeatString;
