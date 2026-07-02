// const post={
//     username:"@ahmadshaaz",
//     content:"This is my first post",
//     likes: 0,
//     reposts:5,
//     tags:["#firstpost","#javascript","#coding"]
// };



// objects of objects:

// const classInfo = {
//     ahmad:{
//         grade:"A+",
//         city:"Delhi",
//     },
//     shaaz:{
//         grade:"B+",
//         city:"Azamgarh",
//     },
//     mohd:{
//         grade:"A",
//         city:"Aligarh",
//     }
// };



// Random Number from 1 to 10:

// let random=Math.floor(Math.random()*10)+1;
// console.log(random);




// Assignment ques: guessing a number with a random number from 1 to max number entered by user. User can quit the game by typing "quit"

const max= prompt("enter the maximum number");

const random=Math.floor(Math.random()*max)+1;

let guess= prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congrats!! random number was ",random);
        break;
    }else if(guess < random){
        guess= prompt("hint: your guess is too low! please try again");
    }
    else{
        guess= prompt("hint: your guess is too high! please try again");
    }
}
    





