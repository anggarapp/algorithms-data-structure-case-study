// number increment with array representation

function incrementArray(numberArray, arrayLength = null) {
    lastIndex = (arrayLength === null) ? numberArray.length - 1 : arrayLength - 1;

    if (numberArray[lastIndex] === 9) {
        numberArray[lastIndex] = 0;
        incrementArray(numberArray, lastIndex);
    }
    else {
        numberArray[lastIndex] += 1;
    }

    return numberArray;
}
console.log(incrementArray([1]))
console.log(incrementArray([1, 2]))
console.log(incrementArray([9, 3, 9]))
console.log(incrementArray([1, 9, 9]))