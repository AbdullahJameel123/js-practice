names = ["Alice", "Bob", "Charlie", "David", "Eve"];

for (let i = 0; i < names.length; i++) {
    names[i] = names[names.length -1 -i]
    console.log(names[i]);

    
}