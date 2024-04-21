
// 7. How to Sort a Number Array? 


// Increase :
const firstNumber = [1,3,5,2,4,6];
const result = firstNumber.sort((a,b)=>{
    return a-b ;
});
console.log(result);


// Decrease :
const secondNumber = [2,4,6,5,3,1];
const result1 = secondNumber.sort((c,d)=>{
    return d-c ;
})
console.log(result1);
