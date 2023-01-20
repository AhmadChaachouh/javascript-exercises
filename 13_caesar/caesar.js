const caesar = function(string, b) {
    if(b > 26 || b < -26){b = b%26;}
    arr = string.split("");
    for(i=0 ; i<arr.length; i++){
        if(string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91){
            if(string.charCodeAt(i) + b < 65){
                arr[i] = String.fromCharCode(string.charCodeAt(i) + b + 26);
            }else if(string.charCodeAt(i) + b > 90){
                arr[i] = String.fromCharCode(string.charCodeAt(i) + b - 26);
            }else{
                arr[i] = String.fromCharCode(string.charCodeAt(i) + b);
            }
        }else if(string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123){
            if(string.charCodeAt(i) + b < 97){
                arr[i] = String.fromCharCode(string.charCodeAt(i) + b + 26);
            }else if(string.charCodeAt(i) + b > 122){
                arr[i] = String.fromCharCode(string.charCodeAt(i) + b - 26);
            }else{
                arr[i] = String.fromCharCode(string.charCodeAt(i) + b);
            }
        }else{
            arr[i] = string[i];
        }
    }    
    let str = arr.join("");
    return str;
};

// Do not edit below this line
module.exports = caesar;


