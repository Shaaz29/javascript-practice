// Use of the forEach method to iterate over the array and log each number to the console.

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(num){
//     console.log(num);
// })



// Use of the map method to create a new array with each number doubled.

// let num=[1, 2, 3, 4, 5];

// let double=num.map((el)=>{
//     return el*2;
// });



let num=[1, 2, 3, 4, 5];

let ans = num.filter((el)=>{
    return el%2==0;
});