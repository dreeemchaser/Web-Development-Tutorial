/*
!   classList = Element property in JS used to interact with an element list of classes (CSS CLASSES)
!  Allows you to make reusable classes for many elements across your webpage.

    ? add()
    ? remove()
    ? toggle(remove IF present, ADD if not.)
    ? replace(oldClass, newClass)
    ? contains()
 */

// myButton = document.getElementById("myButton");
//const myH1 = document.getElementById("myH1");
//myButton.classList.add("enabled");

//!  Add:
//myButton.addEventListener("mouseover", event =>{
//    myButton.classList.add("hover");
//})

//! Remove:
//myButton.addEventListener("mouseout", event =>{
//    myButton.classList.remove("hover");
//})

//! Toggle:
//myButton.addEventListener("mouseover", event =>{
//    myButton.classList.toggle("hover");
//})
//myButton.addEventListener("mouseout", event =>{
//    myButton.classList.toggle("hover");
//})


//! replace(oldClass, newClass)

//myButton.classList.add("enabled");

//myButton.addEventListener("click", event =>{
//    event.target.classList.replace("enabled", "disabled");
//})


//! contains

//myButton.classList.add("enabled");
//myH1.classList.add("enabled");
/*myButton.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "0_o";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
});


 */

/*
myH1.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "0_o";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
});
 */


//! Challenge Round!

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent = "!";
        }

        event.target.classList.replace("enabled","disabled");
    });
});
