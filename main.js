const body = document.querySelector("body");

const div = document.querySelector(".div");

const buttonShow = document.querySelector("#button")





buttonShow.addEventListener("click", () => {
if(divWithAbsolute.style.display === "none"){
    divWithAbsolute.style.display = "block";
}else{divWithAbsolute.style.display = "none"}
})


const divContainer = document.createElement('div');
const divImg = document.createElement('div');
const img = document.createElement('img')
const divDescription = document.createElement('div'); 
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const buttonCard = document.createElement('button');

body.style.flexDirection = 'column'
body.appendChild(divContainer);
divContainer.appendChild(divImg)
divImg.appendChild(img)
divContainer.appendChild(divDescription);
divDescription.appendChild(h2);
divDescription.appendChild(h3);
divContainer.appendChild(buttonCard)

divContainer.style.width = "150px";
divContainer.style.height = "300px"; 
divContainer.style.backgroundColor = "white";
divContainer.style.borderRadius = "16px";

h2.innerHTML = "Tacos";
h3.innerHTML = "15€"

img.src = "https://7televalencia.com/wp-content/uploads/2022/10/taquito.png";
img.style.width = "110px"
img.style.height = "90px"


//Dentro de html
//DIV
//APPEND CHILD CARTA AUTOMATICA

//CONSOLOG LA INFORMACION DE CARTA PRINCIPAL
