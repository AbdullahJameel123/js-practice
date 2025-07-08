// Problem 3: Print Numbers Greater Than 5
// Create an array containing 5 numbers. Use a loop to print the numbers that are greater than 5.
// Sample Input:
// numbers = [3, 6, 8, 2, 9]
// Sample Output:
// 6
// 8
// 9

numbers = [3, 6, 8, 2, 9];

numbers.forEach(number => {
    if (number > 5) {
        console.log(number);
        
    }
});