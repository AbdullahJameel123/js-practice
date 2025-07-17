let students = [
   { name: "Ali", age: 18, marks: 85 },
  { name: "Zara", age: 19, marks: 92 },
  { name: "John", age: 17, marks: 78 },
];

for (let student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}

students.forEach(student => {
  console.log(`${student.name} is ${student.age} years old.`);
});

let toppers = students.filter((s) => s.marks > 80)
console.log(toppers);

let names = students.map((s) => s.name);
console.log(names);

let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log(`Total marks of all students: ${totalMarks}`);