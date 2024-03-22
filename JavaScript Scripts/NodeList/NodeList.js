/*
!    NodeList = Static collection of HTML elements by (id, class, element)
?    Can be created using querySelectorAll()
!    Similar to an array - NO (.map() .filter() .reduce() methods)
?    NodeLists WON'T update automatically to reflect changes.
 */



//?  ------Add HTML/CSS Properties!------
/*
buttons.forEach(button => {
   button.style.backgroundColor = "lightblue";
   button.textContent = "Button!"
});
 */
// Click
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
       event.target.style.backgroundColor = "grey";
    });
});
*/

// Mouseover
/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "lightgreen";
    });
});
*/

// Mouseout
/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "lightcoral";
    });
});
 */


// Add Element

//const newButton = document.createElement("button");
//newButton.textContent = "Button 5";
//newButton.classList = "myButtons"; // Has all the CSS features because of this class!
//document.body.appendChild(newButton);

// Remove Element

let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button => {
  button.addEventListener("click", event => {
      event.target.remove();
      buttons = document.querySelectorAll(".myButtons");
      console.log(buttons);
  });
});