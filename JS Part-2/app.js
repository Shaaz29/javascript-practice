console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));


console.dir(document.querySelector("div a "));

console.dir(document.querySelectorAll("div a "));


// For inserting a new paragraph or anything use this:

let newP = document.createElement('p');

newP.innerText="Hi this is new paragraph";

let body = document.querySelector('body');

// append adds at starting 

body.appendChild(newP);



// prepends adds at ending
//  insertAdjacentElement(Where,element);

let btn = document.createElement('button');

btn.innerText="click me !";

let p = document.querySelector('p');

p.insertAdjacentElement('beforebegin',btn);