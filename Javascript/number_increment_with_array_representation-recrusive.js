// number increment with array representation

function incrementArray(numberArray, arrayLength = null) {
    lastIndex = (arrayLength === null) ? numberArray.length - 1 : arrayLength - 1;
    resultArray = numberArray
    if (numberArray[lastIndex] === 9) {
        numberArray[lastIndex] = 0;
        if (lastIndex <= 0) {
            numberArray.unshift(1);
        }
        else {
            incrementArray(numberArray, lastIndex);
        }
    }
    else {
        numberArray[lastIndex] += 1;
    }
    return numberArray;
}
console.log(incrementArray([1]))
console.log(incrementArray([1, 2]))
console.log(incrementArray([3, 9]))
console.log(incrementArray([1, 9, 9]))
console.log(incrementArray([9, 9, 9]))