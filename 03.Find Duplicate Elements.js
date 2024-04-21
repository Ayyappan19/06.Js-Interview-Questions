
// 03.How to find duplicate elements in a given array?

const number = [1,2,1,3,4,3,5,6,5];

// 01.Remove the Duplicate Number :
const result = number.filter((num,index,value)=>value.indexOf(num)===index);
console.log(result);


// 02.Show the Duplicate number :
const result1 = number.filter((num1,index,check)=>check.indexOf(num1)!=index);
console.log(result1);

