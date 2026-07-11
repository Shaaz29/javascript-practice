let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);


// For Keyboard Event :

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("key =",event.key);
    console.log("code =",event.code);
    console.log("key was pressed");
});


// For Form Event Listener:

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("form submitted");
});



// Extracting data from form:

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});


// For change Event:


let user = document.querySelector("#user");

user.addEventListener("change",function(event){
    event.preventDefault();
    console.log("input changed");
    console.log("final value = ",this.value);
});


// For input event :

user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input changed");
    console.log("final value = ",this.value);
});