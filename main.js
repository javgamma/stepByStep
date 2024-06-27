import { items } from "./data.js";
const body = document.querySelector("body");

const div = document.querySelector(".div");

const carrito = [];


const buttonShow = document.querySelector("#button")





buttonShow.addEventListener("click", () => {
if(divWithAbsolute.style.display === "none"){
    divWithAbsolute.style.display = "block";
}else{divWithAbsolute.style.display = "none"}
})


const divContainer = document.createElement('div');
divContainer.classList.add('productCard');
const divImg = document.createElement('div');
const img = document.createElement('img')
const divDescription = document.createElement('div'); 
const pProductName = document.createElement('p');
const pPriceProduct = document.createElement('p');
const buttonCard = document.createElement('button');

body.style.flexDirection = 'column'
body.appendChild(divContainer);
divContainer.appendChild(divImg)
divImg.appendChild(img)
divContainer.appendChild(divDescription);
divDescription.appendChild(pProductName);
divDescription.appendChild(pPriceProduct);
divContainer.appendChild(buttonCard)

divContainer.style.width = "150px";
divContainer.style.height = "300px"; 
divContainer.style.backgroundColor = "white";
divContainer.style.borderRadius = "16px";
divContainer.style.marginTop = "15px";
divContainer.style.display = "flex";
divContainer.style.flexDirection = 'column';
divContainer.style.alignItems= 'center';
divContainer.style.padding = '10px'; 
// divContainer.style.justifyContent = 'space-between';
divContainer.style.boxSizing = 'border-box';
divContainer.style.gap= '12px';



divImg.style.borderRadius ='8px'
divImg.style.border ='1px solid red'
divImg.style.width = '90%'
divImg.style.height = '90px'
divImg.style.overflow ='hidden'
divImg.style.boxSizing = 'border-box';
img.src = "https://7televalencia.com/wp-content/uploads/2022/10/taquito.png";
img.style.width = "100%";
img.style.height = "90px";
img.style.objectFit ='cover';

divDescription.style.display= 'flex';
divDescription.style.flexDirection= 'column';
divDescription.style.alignItems= 'center';
divDescription.style.gap= '12px';
divDescription.style.flexGrow = '1'
divDescription.style.flexShrink = '1'

pProductName.innerHTML = "Tacos";
pProductName.style.fontSize = '16px';
pProductName.style.padding = '0';
pProductName.style.margin = '0';
pPriceProduct.style.padding = '0';
pPriceProduct.style.margin = '0';
pPriceProduct.innerHTML = "15€"
pPriceProduct.style.fontSize = '12px';



buttonCard.style.width = '40px'
buttonCard.style.fontSize = '12px'
buttonCard.style.height = '20px'
buttonCard.innerText = 'info'



//Dentro de html
//DIV
//APPEND CHILD CARTA AUTOMATICA

//CONSOLOG LA INFORMACION DE CARTA PRINCIPAL





const containerBodyFood= document.createElement('div');
containerBodyFood.classList.add('containerMenuFood')
containerBodyFood.style.display = 'flex';
containerBodyFood.style.flexWrap = 'wrap';
containerBodyFood.style.justifyContent = 'center';
containerBodyFood.style.gap = '15px'
body.appendChild(containerBodyFood);


for (const item of items) {
const divContainer = document.createElement('div');
divContainer.classList.add('productCard');
const divImg = document.createElement('div');

const img = document.createElement('img')
img.setAttribute('src',item.img);

const divDescription = document.createElement('div');
divDescription.classList.add('productInfo');
const pProductName = document.createElement('p');
pProductName.innerHTML = item.product_Name;
const pPriceProduct = document.createElement('p');
pPriceProduct.innerHTML = item.price + ' €';

const buttonCard = document.createElement('button');
buttonCard.innerHTML ='info';   

body.appendChild(divContainer);
divContainer.appendChild(divImg)
divImg.appendChild(img)
divContainer.appendChild(divDescription);
divDescription.appendChild(pProductName);
divDescription.appendChild(pPriceProduct);
divContainer.appendChild(buttonCard)

//Styles
divContainer.style.width = "150px";
divContainer.style.height = "300px"; 
divContainer.style.backgroundColor = "white";
divContainer.style.borderRadius = "16px";
divContainer.style.marginTop = "15px";
divContainer.style.display = "flex";
divContainer.style.flexDirection = 'column';
divContainer.style.alignItems= 'center';
divContainer.style.padding = '10px'; 
// divContainer.style.justifyContent = 'space-between';
divContainer.style.boxSizing = 'border-box';
divContainer.style.gap= '12px';
divContainer.style.fontFamily = 'Poppins'



divImg.style.borderRadius ='10px 10px 0px 0px'
// divImg.style.border ='1px solid red'
divImg.style.width = '90%'
divImg.style.height = '90px'
divImg.style.overflow ='hidden'
divImg.style.boxSizing = 'border-box';
// img.src = "https://7televalencia.com/wp-content/uploads/2022/10/taquito.png";
img.style.width = "100%";
img.style.height = "90px";
img.style.objectFit ='cover';

divDescription.style.display= 'flex';
divDescription.style.flexDirection= 'column';
divDescription.style.alignItems= 'center';
divDescription.style.gap= '12px';
divDescription.style.flexGrow = '1'
divDescription.style.flexShrink = '1'

// pProductName.innerHTML = "Tacos";
pProductName.style.fontSize = '16px';
pProductName.style.padding = '0';
pProductName.style.margin = '0';
pPriceProduct.style.padding = '0';
pPriceProduct.style.margin = '0';
// pPriceProduct.innerHTML = "15€"
pPriceProduct.style.fontSize = '12px';



buttonCard.style.width = '40px'
buttonCard.style.fontSize = '12px'
buttonCard.style.height = '20px'
buttonCard.innerText = 'info'

containerBodyFood.appendChild(divContainer);

buttonCard.addEventListener('click',() => {
const nuevaOrden = {img:item.img,name: item.product_Name,
price: item.price,
}

carrito.push(nuevaOrden);
})

for (item of carrito){
div.appendChild(display)
const display = document.createElement('div')
display.width = '150px';
display.height = '40px';
const imgCarrito = document.createElement('img');
imgCarrito.setAttribute('src',item.img);
const titutloOrden = document.createElement('p');
titutloOrden.innerHTML = item.product_Name;
display.appendChild(imgCarrito);
display,appendChild(titutloOrden);
}
}

console.log(carrito);

/* lograr hacer un nuevo array de objetos, cada vez que se de click, en vez log, que eso se añada en un array y eso se debe mostrar en el div que oculta. */