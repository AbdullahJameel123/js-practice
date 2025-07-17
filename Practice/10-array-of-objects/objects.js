let students = [
  { name: "Ali", age: "18", marks: 85 },
  { name: "Usman", age: "21", marks: 70 },
  { name: "Javed", age: "20", marks: 65 },
  { name: "Harry", age: "19", marks: 92 },
];

for (const student of students) {
  console.log(`Name: ${student.name}, Age: ${student.age} Years old.`);
}

students.forEach((student) => {
    console.log(`${student.name} scored ${student.marks} marks.`);
}); 

let names = students.map((student) => student.name);
console.log(names);

let toppers = students.filter((student) => student.marks > 80);
console.log(toppers);

let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
console.log(`Total Marks: ${totalMarks}`);

