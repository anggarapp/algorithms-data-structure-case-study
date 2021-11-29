<?php
function reverseArray($a)
{
    $reverseValue = array();

    for ($arrayCount = count($a); $arrayCount > 0; $arrayCount -= 1) {
        array_push($reverseValue, $a[$arrayCount - 1]);
    };

    // Write your code here
    return $reverseValue;
}
assert(reverseArray(array(1, 2, 3)) == array(3, 2, 1));

var_dump(reverseArray(array(1, 2, 3)));
