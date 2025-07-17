let employees = [
    {name: "Ahmed", salary: 3000},
    {name: "Hisham", salary: 3500},
    {name: "Ali", salary: 4000}
]

// Increase each salary by ₹2000

let updated = employees.map((emp) => ({
    name: emp.name,
    salary: emp.salary + 2000,
}));

console.log("Updated Salaries: ", updated);