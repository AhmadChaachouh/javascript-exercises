const palindromes = function (string) {
    let r = string.replace(/\s/g,"");
    r = r.replace(/,/g,"");
    r = r.replace(".","");
    r = r.replace("!","");
    alert(r.split("").reverse().join("").toUpperCase());
    if(r.toUpperCase() == r.split("").reverse().join("").toUpperCase()){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
