// Question 1: Create a program that generates a random number representing a dice roll.
//  [The number should be between 1 and 6].

let diceRoll=Math.floor(Math.random()*6)+1;
console.log(diceRoll);


// Question 2: Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name. 

const car={
    name: "Maruti Suzuki",
    model: "Maruti Suzuki Dzire",
    color: "White",
};
console.log(car.name);




// Question 3: Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “NewYork”.
// Add a new property country and set it to the United States.

const person={
    name: "Ahmad Shaaz",
    age: 21,
    city: "New Jersey",
};

person.city="New York";
person.country="United States";
console.log(person);
