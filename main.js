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

const imageArr = [
{   name:"Palacio Real de Madrid",
    img:"assets/image1_placio.jpg",
    description:"is the official residence of the Spanish royal family at the city of Madrid",
    built: "April 7, 1735"
},
{
    name: "Eiffel Tower",
    img: "assets/image2_eiffel-tower.jpg",
    description: "is a wrought-iron lattice tower on the Champ de Mars in Paris, France",
    built: "31 March 1889"
},
{
    name: "Statue of Liberty",
    img: "assets/image_3_state-of-liberty.jpg",
    description: "was a gift from France as a symbol of American freedom",
    built: "October 28, 1886"
}
]

function renderImegList(items) {
    let makeList = ``;
    // //   makeList += `<div>`
    for (let i = 0; i < items.length; i++) {
        makeList += `<img src='${items[i].img}'><p>${items[i].name},
                    ${items[i].description},
                    ${items[i].built}</p></br>`;
    // //   makeList += `</div>`
    }
    console.log(makeList);
     return makeList;
  }
  document.getElementById('images_description').innerHTML = renderImegList(imageArr);