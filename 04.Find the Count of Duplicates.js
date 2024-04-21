
// 4. How to find the count of duplicates in an array? 

const names = ["a","y","y","a","p","p","a","n"];
const result = names.reduce((obj,method)=>{
    if(obj[method]===undefined){
        obj[method]=1;
        return obj;
    }
    else{
        obj[method]++;
        return obj;
    }
},{})
console.log(result);

