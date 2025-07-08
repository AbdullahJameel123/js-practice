// Problem 1: Factorial of Numbers
// Create an array containing 5 numbers. Use a loop to print factorial of all the 5 numbers. Use a function to calculate factorial.
// Sample Input:
// numbers = [3, 4, 5, 6, 7]
// Sample Output:
// Factorial of 3 is 6
// Factorial of 4 is 24
// Factorial of 5 is 120
// Factorial of 6 is 720
// Factorial of 7 is 5040

function factorial(n){
    let result = 1
    for (let i = 1; i <= n; i++) {
      result *= i
    }
    return result
    
}

numbers = [3, 4, 5, 6, 7];

for (const num of numbers) {
    console.log(`Factorial of ${num} is ${factorial(num)}`);
    
}