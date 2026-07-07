// Use of the forEach method to iterate over the array and log each number to  console.

let arr = [1, 2, 3, 4, 5];

arr.forEach(function(num){
    console.log(num);
})



// Use of the map method to create a new array with each number doubled.

let num=[1, 2, 3, 4, 5];

let double=num.map((el)=>{
    return el*2;
});


// Use of the filter method to create a new array with only even numbers.

let num=[1, 2, 3, 4, 5];

let ans = num.filter((el)=>{
    return el%2==0;
});



// Use of reduce method to calculate the sum of all numbers in the array.

let nums=[1, 2, 3, 4, 5];

let finalSum=nums.reduce((acc,el)=>{
    return acc+el;
    console.log(finalSum);
});



// spread uses:


let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let nums=[...odd,...even];



// Destructuring Concept:

let names = ["tony","bruce","peter","steve","abc","xyz","pyq"];

// let winner = names[0];
// let runnerup = names[1];

let [winner , runnerup , ...others] = names;

