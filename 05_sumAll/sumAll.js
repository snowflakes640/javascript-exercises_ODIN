const sumAll = function(num1, num2){
    let sum = 0
    if (num1>0 & num2>0 & Number.isInteger(num1) & Number.isInteger(num2)){
        const greater = Math.max(num1, num2)
        const smaller = Math.min(num1, num2)

        for(let i=smaller; i<=greater; i++){
            sum += i
        }
        return sum
    } else{
       return "ERROR" 
    }
}
//console.log(sumAll("2.2", 10))

// Do not edit below this line
module.exports = sumAll;
