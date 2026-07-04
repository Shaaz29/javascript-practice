// Question 1 : Write a JavaScript function that returns array elements larger than a number.



// Question 2: Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh", 
// ans = "abcdefgh"




// Question 3: Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example: country = ["Australia", "Germany", "United States of America"], 
// output = "United States of America"


// Question 4: Write a JavaScript function to count the number of vowels in a String argument.



// Question 5: Write a JavaScript function to generate a random number within a range (start, end).

let start = 100;
let end= 200;

function generateRandom(start,end){
    let diff= end-start;
    return Math.floor(Math.random()*diff)+start;
}