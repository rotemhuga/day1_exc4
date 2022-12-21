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