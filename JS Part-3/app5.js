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