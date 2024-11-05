const reverseString = function(phrase) {
    phraseArr = phrase.split("")
    const len =  phrase.length
    let reversed = ""

    for(i=len-1; i>=0; i--){
        reversed += phraseArr[i]
    }
    return reversed

};

//console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
