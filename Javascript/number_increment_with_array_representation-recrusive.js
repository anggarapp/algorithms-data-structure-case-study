// number increment with array representation

function incrementArray(numberArray, arrayLength = null) {
    numberArray[0] += 1;
    return numberArray;
}
console.log(incrementArray([1]))
console.log(incrementArray([1, 2]))
console.log(incrementArray([9, 3, 9]))
console.log(incrementArray([9, 9, 9]))