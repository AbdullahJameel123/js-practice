// 🧩 Problem 1: Books by Author
let arr = [
    {
        title: "Sahih Bukhari",
        author: "Imam Al-Bukhari",
        price: 20
    },
    
    {
        title: "Sahih Muslim",
        author: "Imam Muslim",
        price: 30
    },
    
    {
        title: "Tafsir Ibn Kathir",
        author: "Hafiz Ibn Kathir",
        price: 50
    }
    
]

arr.forEach(book => {
    if (book.author == "Imam Al-Bukhari") {
        console.log(`${book.title} by ${book.author} for ${book.price}`);
        
    }
});

let total = 0 
for (let i = 0; i < arr.length; i++) {
    total += arr[i].price
}

console.log(total);


// 🧩 Problem 2: Student Scores
let students = [
    
    {
        name: "Abdullah",
        marks: 85
    },

    {
        name: "Mohammed",
        marks: 35
    },

    {
        name: "Nooh",
        marks: 99
    },

    {
        name: "Moosa",
        marks: 78
    },

    {
        name: "Easa",
        marks: 96
    }
]

let toppers = students.filter(student => student.marks > 75)

let passedStudents = toppers.map((n) => n.name)



