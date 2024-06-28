// import {products} from "./data.js";
// const body = document.querySelector("body");
// const divModal = document.querySelector(".div");
// const buttonShow = document.querySelector("#button")




// buttonShow.addEventListener("click", () => {
// if(divWithAbsolute.style.display === "none"){
//     divWithAbsolute.style.display = "block";
// }else{divWithAbsolute.style.display = "none"}
// })


// const divContainer = document.createElement('div');
// divContainer.className= 'divContainer';
// const divImg = document.createElement('div');
// divImg.className = "divContainerImg";
// const img = document.createElement('img');
// img.className = 'imgbyCard';
// const divDescription = document.createElement('div');
// divDescription.className = 'divDescription'
// const pProductName = document.createElement('p');
// pProductName.className = 'h3Name';
// const pPriceProduct = document.createElement('p');
// pPriceProduct.className = 'h3Price'
// const buttonCard = document.createElement('button');
// buttonCard.className = 'buttonCard';
// buttonCard.innerText = 'info'


// body.append(divContainer);
// divContainer.append(divImg);
// divImg.append(img)
// divContainer.append(divDescription);
// divDescription.append(pProductName);
// divDescription.append(pPriceProduct);
// divContainer.append(buttonCard)





// //Dentro de html
// //DIV
// //APPEND CHILD CARTA AUTOMATICA

// //CONSOLOG LA INFORMACION DE CARTA PRINCIPAL





// // const carrito = [];

// products.forEach((product) => {
//     const content = document.createElement('div');
//     content.innerHTML = `
//         <img src="${product.img}">
//         <h3>${product.product_Name}</h3>
//         <p>${product.price}</p>
//     `
//     body.append(content);

//     console.log(content);
// });




// /* lograr hacer un nuevo array de objetos, cada vez que se de click, en vez log, que eso se añada en un array y eso se debe mostrar en el div que oculta. */

import { products } from "./data.js";

const body = document.querySelector("body");
const divModal = document.querySelector(".div");
const buttonShow = document.querySelector("#button");
const divWithAbsolute = document.querySelector("#divWithAbsolute"); // Corrección



const shopContent = document.getElementById("shopContent")


const carrito = []


// Función para crear una carta de producto
const createProductCard = (product) => {
  const divContainer = document.createElement('div');
  divContainer.className = 'divContainer';

  const divImg = document.createElement('div');
  divImg.className = "divContainerImg";
  const img = document.createElement('img');
  img.className = 'imgbyCard';
  img.src = product.img;

  const divDescription = document.createElement('div');
  divDescription.className = 'divDescription';
  const pProductName = document.createElement('p');
  pProductName.className = 'h3Name';
  pProductName.innerText = product.product_Name;

  const pPriceProduct = document.createElement('p');
  pPriceProduct.className = 'h3Price';
  pPriceProduct.innerText = product.price + " €";

  const buttonCard = document.createElement('button');
  buttonCard.className = 'buttonCard';
  buttonCard.innerText = 'Añadir';

  buttonCard.addEventListener("click",() =>{
    carrito.push({
        id: product.id,
        img: product.img,
        name: product.product_Name,
        price: product.price
        })
        // NUEVO

        divWithAbsolute.innerHTML=''

        carrito.forEach((product)=>{
        const modalHeader = document.createElement("div");
        modalHeader.className = "modalHeader";
        const divImgInCar = document.createElement('div');
        divImgInCar.className = "divImginCar";
        const imgInCar = document.createElement('img');
        imgInCar.className = 'imgInCar';
        imgInCar.src = product.img;
        const infoDivInCar = document.createElement('div');
        infoDivInCar.className = "infoDivInCar";
        const titleProductInCar = document.createElement('p');
        titleProductInCar.className = 'titleProductInCar';
        titleProductInCar.innerText = product.name;
        const priceProductInCar = document.createElement('p');
        priceProductInCar.className = 'priceProductInCar';
        priceProductInCar.innerText = `${product.price}€`
        const buttonDeleteProduct = document.createElement('p');
        buttonDeleteProduct.className = 'buttonCloseModal'
        buttonDeleteProduct.innerText = '❌'
    
    
        divWithAbsolute.append(modalHeader);
        modalHeader.append(divImgInCar);
        divImgInCar.append(imgInCar);
        
        modalHeader.append(infoDivInCar,buttonDeleteProduct);
        infoDivInCar.append(titleProductInCar,priceProductInCar)
       
    
       const totalCar = carrito.reduce((acc,el) => acc + el.price,0);
       console.log(totalCar)
      })
  })

  // Añadir evento al boton de borrar producto




  // Estructura de la carta
  divContainer.append(divImg);
  divImg.append(img);
  divContainer.append(divDescription);
  divDescription.append(pProductName);
  divDescription.append(pPriceProduct);
  divContainer.append(buttonCard);

  return divContainer;
};




// Añadir las cartas al body
products.forEach((product) => {
    const productCard = createProductCard(product);
    shopContent.append(productCard);  
});

// Añadir las cartas al carrito
carrito.forEach((product) => {
    const productCard = createProductCard(product);
    divWithAbsolute.append(productCard);  
});


buttonShow.addEventListener("click", () => {
    if (divWithAbsolute.style.display === "none" || divWithAbsolute.style.display === '') {
      divWithAbsolute.style.display = "flex";
    } else {
      divWithAbsolute.style.display = "none";
    }
});


