// Problem 01:
// You are given an array of numbers. Use the map() method to create a new array called modifiedNumbers, where:

// Each even number is multiplied by 2.
// Each odd number is incremented by 1.
// Sample Input:

// const numbers = [4, 7, 12, 15, 9];

// Expected Output:

// [8, 8, 24, 16, 10]

// Instructions:

// Use the map() function to iterate over the numbers array.
// Inside the callback function, check if the current number is even or odd.
// If the number is even, multiply it by 2.
// If the number is odd, increment it by 1.
// Store the resulting array in modifiedNumbers.
// Print modifiedNumbers to the console.


const numbers = [4, 7, 12, 15, 9];
let modifiedNumbers = numbers.map((n) => {
    if(n % 2 === 0) return n*2
    if(n % 2 !== 0) return n+1
} )


console.log(modifiedNumbers);
