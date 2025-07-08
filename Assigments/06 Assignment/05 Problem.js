// Problem 5: Loop Through Colors
// Task: Create an array colors = ["Red", "Green", "Blue", "Yellow"]

// Use a for loop to print each color.
// Then, use a for-of loop to print the same.


let colors = ["Red", "Green", "Blue", "Yellow"];

for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);
}

for (const element of colors) {
    console.log(element);
}