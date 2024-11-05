const repeatString = function(phrase, times) {
    let result = ""
    if(times<0){
        return "ERROR"
    }else{
        for(let i=0; i<times; i++){
            result += phrase
        }
        return result
    }
};

//console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
