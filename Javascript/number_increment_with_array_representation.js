// number increment with array representation
var assert = require('assert');
function incrementArray(numberArray) {
    lastIndex = numberArray.length - 1;
    numberArray[lastIndex] += 1;
    incr = 0
    while (incr <= lastIndex) {
        if (numberArray[lastIndex - incr] === 10) {
            numberArray[lastIndex - incr] = 0;
            if (numberArray[lastIndex - 1 - incr] >= 0) {
                numberArray[lastIndex - 1 - incr] += 1;
            }
            else {
                return [1, ...numberArray];
            }
            incr += 1;
        }
        else {
            break;
        }
    }

    return numberArray;
}

console.log(incrementArray([1]))
console.log(incrementArray([1, 2]))
console.log(incrementArray([9, 3, 9]))
console.log(incrementArray([9, 9, 9]))

assert.deepStrictEqual(incrementArray([1]), [2], 'Single element array test');
assert.deepStrictEqual(incrementArray([1, 2]), [1, 3], 'Multiple element array test');
assert.deepStrictEqual(incrementArray([1, 2, 9]), [1, 3, 0], 'Carry adder test');
assert.deepStrictEqual(incrementArray([1, 9, 9]), [2, 0, 0], 'Multiple carry adder test');