// 14. How can you uppercase the first character in a string array? 

const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
console.log(days);

// Method one
for(let day of days){
    day = day.charAt(0).toUpperCase() + day.substring(1);
    console.log(day);
}

// Method Two
let updated = [];
for(let day of days){
    day = day.charAt(0).toUpperCase() + day.substring(1);
    updated.push(day);
}
console.log(updated);

