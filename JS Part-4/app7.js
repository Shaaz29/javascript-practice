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





// // Callbacks nesting leads to - Callback Hell (Actual Problem) :

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



// // Second Example of Callbacks nesting leads to - Callback Hell (Actual Problem) :

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
.then((result) => {
    console.log("data1 saved.");
    console.log(result);
    savetoDb("Hello World");
    return savetoDb("Hello World");
})
.then((result) => {
        console.log("data2 saved.");
        console.log(result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log(error);
});







// Async Function:

async function greet(){
    throw "404 page not found";
    return "hello";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : " , result);
})

.catch((err) => {
    console.log("promise was rejected with err" , err);
});

let demo = async() => {
    return 5;
};



// await keyword use for asynchronus behaviour:


function getNum(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}





// solved the above heading color change problem with promise ,async and await keyword concept:


h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
        h1.style.color=color;
        resolve("color changed");
        },delay);
    });    
}

async function demo() {
    await changeColor("red",1000);
      await changeColor("orange",1000);
       await changeColor("blue",1000);
        await changeColor("green",1000);
         await changeColor("yellow",1000); 
}





// Handling Rejections with await :

h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
        let num = Math.floor(Math.random()*5)+1;
        if (num>3){
            reject("promise rejected");
        }

        h1.style.color=color;
        console.log(`color changed to ${color}!`);
        resolve("color changed");
        },delay);
    });    
}

async function demo() {
    try{
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000); 
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
    console.log("new number is", a+3);
}