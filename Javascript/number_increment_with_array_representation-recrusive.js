// number increment with array representation

function incrementArray(numberArray, arrayLength = null) {
    lastIndex = numberArray.length - 1;
    if (numberArray[lastIndex] === 9) {
        numberArray[lastIndex] = 0;
        numberArray[lastIndex - 1] += 1;
    }
    else {
        numberArray[lastIndex] += 1;
    }

    return numberArray;
}
console.log(incrementArray([1]))
console.log(incrementArray([1, 2]))
console.log(incrementArray([9, 3, 9]))
console.log(incrementArray([9, 9, 9]))