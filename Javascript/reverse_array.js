//reverse array order

function reverseArray(arr) {
    arrayResult = [];
    arr.forEach(number => {
        arrayResult.unshift(number);
    });
    return arrayResult;
}

console.log(reverseArray([1, 2, 3]))