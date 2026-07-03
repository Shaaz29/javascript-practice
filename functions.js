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