let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double clicked me");
    });
}

function sayHello(){
    alert("Hello!");
}

function sayName(){
    alert("Ahmad");
}


// btn.onmouseenter = function(){
//     console.log("you entered a button");
// };