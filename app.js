// console.log("Hello World!");
// console.log("Ahmad Shaaz");

// let size=`L`;
// if(size==`XL`){
//     console.log("price is Rs. 250");
// }
// else if(size==`L`){
//     console.log("price is Rs. 200");
// }
// else if(size==`M`){
//     console.log("price is Rs. 100");
// }
// else if(size==`S`){
//     console.log("price is Rs. 50");
// }

// Assignment : use switch case

// let day = 3;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2: 
//         console.log("Tuesday");
//         break;
//     case 3: 
//         console.log("Wednesday");
//         break;
//     case 4: 
//         console.log("Thursday");
//         break;
//     case 5: 
//         console.log("Friday");
//         break;
//     case 6: 
//         console.log("Saturday");
//         break;
//     case 7: 
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong Day!");
// }



// for (let i=1; i<=15; i++ ){
//     if(i%2!==0){
//         console.log(i);
//     }
// }


// Assignment : check whether a guess by user of favorite movie name is correct or not

// const favmovie="avatar";
// let guess = prompt("Guess my favorite movie name");

// while(guess!=favmovie){
//     if(guess=="quit"){
//         console.log("You have quit the game");
//         break;
//     }
//     guess = prompt("Wrong Guess! Try Again");
// }
// if(guess==favmovie){
//     console.log("Congrats! You guessed it right");
// }


// Nested Arrays loop:

let heroes=[
    ["batman", "superman", "spiderman"],
    ["ironman", "thor", "hulk"]
]
for(let i=0; i<heroes.length; i++){
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}