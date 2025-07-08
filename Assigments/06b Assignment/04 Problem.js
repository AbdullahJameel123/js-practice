numbers = [2, 4, 7, 9, 11];
for (const num of numbers) {
    if (num === 2 || num !== 0) {
        console.log(`${num} is prime`);
    }else {
        console.log(`${num} is not prime`);
        
    }
}