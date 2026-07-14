function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();





// Callbacks nesting leads to - Callback Hell (Actual Problem) :

h1 = document.querySelector("h1");

function changeColor(color,delay , nextColorChange){
    setTimeout(()=> {
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay); 
}

changeColor("red",1000 , () => {
    changeColor("orange",1000, () => {
        changeColor("green",1000,() => {
            changeColor("blue",1000);
        });
    });
});



// Second Example of Callbacks nesting leads to - Callback Hell (Actual Problem) :

function savetoDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        success();
    }else{
      failure();   
}
}

savetoDb(
    "ahmad shaaz",
    () => {
        console.log("your data was saved:");
        savetoDb(
            "hello world",
            () => {
                console.log("success2: data2 saved");
            },
            () => {
                console.log("failure2: weak connection");
            }
        );
    },
    () =>{
        console.log("weak connection.  data not saved");
    }
);



// Above problem can be solved by Promises: The Promise object
// represents the eventual  completion (or failure) of an
// asynchronous operation and its resulting value .

function savetoDb(data){
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}

savetoDb("ahmad shaaz")
.then(() => {
    console.log("promise was resolved");
})
.catch(() => {
    console.log("promise was rejected");
});