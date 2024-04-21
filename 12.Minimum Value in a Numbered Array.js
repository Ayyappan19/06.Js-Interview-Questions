// 12. Find minimum value in a numbered array? 

const number = [1,2,3,4,5];
console.log(number);

function miniValue(arr){
    return arr.reduce(function(prev,curr){
        return prev<curr ? prev:curr;
    })
}
console.log(miniValue(number));

