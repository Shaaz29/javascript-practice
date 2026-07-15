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


let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch(err){
        console.log("error - ",err);
    } 
}