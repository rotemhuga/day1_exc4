//Option1
function handleClick () {
    console.log('Element Clicked');
    PlacesILove.style.color = "blue";
    contactMe.style.color = "blue";
}

function delayHandleClick () {
setTimeout(handleClick ,3000)
}

// //option2
// function handleClick (id) {
//     console.log('Element Clicked');
//     document.getElementById(id).style.color="green";
// }

// function delayHandleClick (id) {
//     setTimeout(()=> handleClick(id), 3000)
//     }

function Dark(){
    let flag = document.getElementById(`Dark-Mode`).value;
    if (flag == `off`){
        document.body.setAttribute(`class`, `Dark-css`)
        document.getElementById(`Dark-Mode`).value = `on`
    } else{
        document.body.setAttribute(`class`, `body`)
        document.getElementById(`Dark-Mode`).value = `off`
    }
}

const favoriteFood = ["couscous", "salad", "pizza", "gnocchi"];
let makeList = `<ul>`;
for (let index = 0; index < favoriteFood.length; index++) {
  const element = favoriteFood[index];
  makeList += `<li>${element}</li>`;
}
makeList += `</ul>`;
console.log(makeList);
document.getElementById("my-id").outerHTML = makeList;
