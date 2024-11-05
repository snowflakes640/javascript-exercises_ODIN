const removeFromArray = function(...args){
    myArray = args[0]
    args.splice(0, 1)
    toRemove = args

    for( let i=0; i<args.length; i++){
    removed = myArray.filter((value) => value !== args[i])
    myArray = removed
    }
    return removed
};
//console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
