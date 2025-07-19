function studentMarks(arr) {
    let passedStudents = arr.filter(n => n > 40)
    let updatedStudents = passedStudents.map(n => n + 5)
    return updatedStudents
    
}

const marks = [35, 42, 56, 39, 71, 90, 28];
let f = marks.filter(n => n <= 40)
let p = marks.filter(n => n > 40)
let a = marks.map(n => n + 5)
console.log(studentMarks(marks));
