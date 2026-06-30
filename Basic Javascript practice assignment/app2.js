// Assignment ques 1:

let n = 45;
if(n%10===0){
    console.log("Good");
}
else{
    console.log("Bad");
}



// Assignment ques 2:

let quarter=3;

switch(quarter){
    case 1:
        console.log("January , February, March");
        break;
     case 2:
        console.log("April , May, June");
        break;
     case 3:
        console.log("July , August, September");
        break;
     case 4:
        console.log("October , November, December");
        break;   
}


// Assignment ques 3:

let str="Ahmad Shaaz";
 if(((str[0]==="a") ||(str[0]==="A"))&&(str.length>5)){
    console.log("Golden String");
 }
 else{
    console.log("Not Golden String");
 }


// Assignment ques 4:

let n = 103;
let m = 202;

l = n%10;
k = m%10;

if(l==k){
    console.log("Both Numbers have same last digit");
}
else{
    console.log("Both Numbers do not have  same last digit");
}



// Assignment ques 5:

let a =15;
let b =10;
let c =5;

if(a>b && a>c){
    console.log("a is largest number");
}
else if(b>a && b>c){
    console.log("b is largest number");
}
else{
    console.log("c is largest number");
}


// Assignment ques 6:

let name = prompt("Enter Name");
let age  =  prompt("Enter age");
alert(name+" is "+age+" years old");