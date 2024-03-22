/*
!    DOM Navigation - The process of navigating through the structure
!    of an HTML document using JavaScript.


? HTML Elements include:
!    .firstElementChild
!    .lastElementChild
!    .nextElementSibling
!    .previousElementSibling
!    .parentElement
!    .children
 */


// -------------.firstElementChild----------------

// Using .getElementById:
//const element = document.getElementById("desert");
//const firstChild = element.firstElementChild;
//firstChild.style.backgroundColor = "grey";

// Using querySelectorAll()
//const uiElements = document.querySelectorAll('ul');
/*
uiElements.forEach(uiElements => {
    const firstChild = uiElements.firstElementChild;
    firstChild.style.backgroundColor = "lightblue";
})*/


// -------------.lastElementChild----------------

// Using .getElementById:
//const elements = document.getElementById("desert");
//const lastChild = element.lastElementChild;
//lastChild.style.backgroundColor = "grey";

//const uiElementLast = document.querySelectorAll("ul");
//uiElementLast.forEach( uiElementLast =>{
  //  const lastChild = uiElementLast.lastElementChild;
 //   lastChild.style.backgroundColor = "yellow";
//})


// ---------------.nextElementSibling-------------------

//const element = document.getElementById("desserts");
//const nextSibling = element.nextElementSibling;
//nextSibling.style.backgroundColor = "Yellow";


// ---------------.previousElementSibling-------------------

//const element = document.getElementById("vegetables");
//const previousElementSibling = element.previousElementSibling;
//previousElementSibling.style.backgroundColor = "lightgrey";

// ---------------.parentElement-------------------

//const element = document.getElementById("apple");
// parentElement = element.parentElement;
//parentElement.style.backgroundColor = "lightgrey";

// ---------------.children-------------------

const element = document.getElementById("vegetables");
const children = element.children;
Array.from(children).forEach( child => {
    child.style.backgroundColor = "lightblue" ;
})

console.log(children);