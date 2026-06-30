let months=["january" , "july" , "march" , "august"];

months.shift();
months.shift();

months.unshift("june");
months.unshift("july");


// Returns index of someting
months.indexOf("march");  


// For merging 2 arrays use concatenate

let primary=["red", "green", "yellow"];
let secondary=["black", "blue", "violet"];
primary.concat(secondary);

// For reverse of array 

primary.reverse();


// slice: copies a portion of array 

primary.slice("2");

// splice: removes/replaces/add elements in places
//         ( start / deletecount , item0...itemN)

primary.splice(0 , 1 , "white", "grey");

// for sorting of array , note: only applicable for strings and chars in array 
primary.sort();