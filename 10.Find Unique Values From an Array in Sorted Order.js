// 10. How to find unique values from an Array in sorted order?

const unique= [1,3,5,2,4,6,1,3,5];

const result = unique.filter((uni,index,val)=>val.indexOf(uni)==index)
.sort((a,b)=>{
    return a-b;
    
});
console.log(result);

