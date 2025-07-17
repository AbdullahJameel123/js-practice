let students = [
  { name: "Ali", marks: 85 },
  { name: "Mohammed", marks: 92 },
  { name: "Yahya", marks: 78 }
];

let total = students.reduce((sum, student) => sum + student.marks, 0);
let average = total / students.length;

console.log(`Average marks: ${average}`);
