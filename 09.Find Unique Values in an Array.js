// 9. How to find unique values in an array? 

const unique = [1,2,1,3,4,3,5,6,5];
const result = unique.filter((unique,index,val)=>val.indexOf(unique)==index);
console.log(result);

