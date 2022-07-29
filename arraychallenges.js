//1. Always Hungry
//Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not
//present in the array console log "I'm hungry" once.

function hungryTummy(arr) {
    var foodCount = 0
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("I'm hungry")
    }
}
hungryTummy([3.14, "food", "food", true, "food"]);
hungryTummy([4, 1, 5, 7, 2]);

//2. High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

var arr = [-2, 3, 5, 6, 8, 9, 10]
var num = arr.length
let highPass = (arr, cutoff) => {
    return arr.map(v => v > num ? v : "").filter(Boolean)
}
console.log(highPass([-2, 3, 5, 6, 8, 9, 10]))

function highPass(arr, cutoff) {
    
    var filteredArr = [-2, 3, 5, 6, 8, 9, 10];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > cutoff) {}
    }
    return filteredArr;{
    }
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//3. Better than average
//Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++);{
        sum+=arr[i];
    }
    var avg = sum / arr.length;
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++
        }
    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


//4. Array Reverse
//Write a function that will reverse the values an array and return them.

function reverse(arr) {
    for (i=arr.length; i > 0; i--)
    arr.shift(arr.push(i))
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

//5. Fibonacci Array
//Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a
//given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together.
//So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (n=(prev+curr));
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



