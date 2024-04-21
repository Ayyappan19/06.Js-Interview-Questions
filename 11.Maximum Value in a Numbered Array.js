// 11. Find maximum value in a numbered array?

const number = [1,2,3,4,5];
console.log(number);

function findMax(arr){
      return arr.reduce(function(pre,cur){
        return pre<cur ? pre:cur;
      })
}
console.log(findMax(number));
