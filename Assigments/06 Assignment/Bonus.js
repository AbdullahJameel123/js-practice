// Bonus Problem: Score Tracker
// Task: Create an array of test scores:

// let scores = [78, 92, 85, 60, 95];
// Use forEach() to print whether each score is Pass or Fail (pass mark is 70).

let scores = [78, 92, 85, 60, 95];

scores.forEach(score =>  {
    if (score >= 70) {
        console.log("Pass");
        
    } else {
        console.log("Fail");
        
    }
});