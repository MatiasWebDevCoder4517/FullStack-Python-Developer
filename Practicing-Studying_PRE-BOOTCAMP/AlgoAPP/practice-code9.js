// CHALLENGES 2 // 

const { max } = require("moment");

// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.
/*function get_array() {
    var arr = [];
    for(var i = 0; i<=255; i++){
        arr.push(i);
    }
    return arr;
}
get_array();
*/

// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
/*
function sum_even_numbers() {
    var sum = 0;
    for (var i = 0; i <= 1000; i++) {
        if ((i % 2) == 0) {
            sum += i;  
        } 
    }
    return sum;
}
sum_even_numbers();
*/

// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
/*
function sum_odd_5000() {
    var sum = 0;
    for (var i = 0; i <= 5000; i++) {
        if ((i % 2) == 0) {
            console.log('')
        }
        else {
            sum += i;
        }
    }
    return sum;
}
sum_odd_5000();
*/

// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
/*
function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
iterArr([1, 2, 3, 45, 6, 7, 73, 35, 5]);
*/

// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
/*
function findMax(arr) {
    var max = 0;
    for(var i =0; i<arr.length; i++){
        max = Math.max.apply(null, arr);
    }
    return max; 
}
findMax([4,3,5,2,55,2662,2]);
*/

// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
/*
function findAvg(arr) {
    var avg = 0;
    var sum_arr = 0;
    for (var i = 0; i < arr.length; i++) {
        sum_arr += arr[i]
    }
    avg = (sum_arr / arr.length);
    return avg;
}
findAvg([2, 5, 36, 25]);
*/

// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
/*
function oddNumbers() {
    var arr = [];
    for(var i=0; i<=50; i++){
        if((i%2)==0){
            console.log('');
        }
        else{
            arr.push(i);
        }
    }
    return arr; 
}
oddNumbers();
*/

// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).
/*
function greaterY(arr, Y) {
    var count = 0;
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > Y) {
            count += 1;
        }
        else {
            count += 0;
        }
    }
    return ('mayores que y: ' + count);
}
console.log(greaterY([1, -4, 5, 7], 1));
*/

// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. 
// (e.g. [1,5,10,-2] will become [1,25,100,4])
/*
function squareVal(arr) {
    arr = arr.map(x => x*x);
    return arr;
}
console.log(squareVal([1, -5, 10, -2]));
*/

// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. 
// (e.g. [1,5,10,-2] will become [1,5,10,0])
/*
function noNeg(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
        i++;
    }
    return arr;
}
console.log(noNeg([1, 5, 10, -2, -10, 5, 6]));
*/

// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])
/*
function maxMinAvg(arr) {
    var arrnew = [];
    var sum = 0;
    maximum = Math.max.apply(null, arr);
    minimum = Math.min.apply(null, arr);
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    arrnew.push(maximum);
    arrnew.push(minimum);
    arrnew.push(avg);
    return arrnew;
}
console.log(maxMinAvg([1, 5, 10, -2]));
*/

// CONSOLE SOLUTION //
/*
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew;
}
console.log(maxMinAvg([1, 5, 10, -2]));
*/

// Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
/*
function swap(arr) {
    var arrnew = [];
    if (arr.length <= 2) {
        console.log('The array must be 3+ values long!')
    }
    else {
        first = arr.shift();  // extracts first value of arr
        last = arr.pop();     // extracts last value of arr
        arrnew.push(last);   // adds pos 0 the last variable
        for (var i = 0; i < arr.length; i++) {       // [-2, 5, 10]
            arrnew.push(arr[i]);
        }
        arrnew.push(first);
    }
    return arrnew;
}
console.log(swap([1, 5, 10, -2]));
*/

// CONSOLE SOLUTION //
/*
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;


    return arrnew;
}
console.log(swap([1, 5, 10, -2]));
*/

// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
/*
function numToStr(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }

    return arr;
}
console.log(numToStr([-1, -3, 2]));
*/