let users = [
  { name: "Aisha", age: 22 },
  { name: "Zaid", age: 19 },
  { name: "Kiran", age: 25 },
];


// What is the output of console.log(users[1].name)?
console.log(users[1].name); // Output: Zaid

// What will this loop print?

users.forEach((u) => {
  console.log(u.name + " is " + u.age + " years old");
});
// the output will be: 
// Aisha is 22 years old
// Zaid is 19 years old
//  Kiran is 25 years old