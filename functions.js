function printName(name) {
    console.log("Name: " + name);
}

printName("Ahmad");


// Ques: To find average of 3 numbers by creating a function.

function average(a,b,c){
    console.log((a+b+c)/3);
}

average(10, 20, 30);



// Ques: To print the multiplication table of a number by creating a function.

function multitable(num){
    for(let i=num; i<=num*10; i=i+num){
        console.log(i);
    }
}

multitable(5);


// Ques: To calculate the sum of numbers from 1 to n by creating a function.
function sum(n){
    let total=0;
    for (let i=1;i<=n; i++){
        total=total+i; 
}
    return total;
}


// Function Scope:

let greet = "Hello"; // global scope

function changeGreet() {
    let greet = "How are you?"; // function scope
    console.log(greet); 

    function innerGreet() {
        console.log(greet); // lexical scope 
}

innerGreet();
}
console.log(greet); // global scope
changeGreet();



// Function Expressions:

let sum = function(a, b) {
    return a + b;
}