// let url = "https://catfact.ninja/fact";

// fetch(url)

//     .then((response) => {
//     console.log(response);
//     return response.json();
// })
// .then((data) => {
//      console.log(data.fact);
//     })
// .catch((err) => {
//     console.log("ERROR -",err);
// });




// Using Fetch with async and await:


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch(err){
//         console.log("error - ",err);
//     } 
// }






// Same code using Axios:

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(err){
//         console.log("error - ",err);
//         return "No fact Found";
//     } 
// }








let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log("error :",err);
        return [];
    }
}

