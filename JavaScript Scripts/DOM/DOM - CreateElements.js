// Template For Creating Elements & adding them to the DOM


// ! Step 1: Create The Element
const newH1 = document.createElement("h1");
const newListItem = document.createElement("li");

// ! Step 2: Add Attributes/Properties
newH1.textContent = "Creating Elements:";
newH1.id = "myh1";
newH1.style.color = "darkgrey";
newH1.style.textAlign = "center";

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightblue";

// ! Step 3: Append Element to DOM
//document.getElementById("box1").prepend(newH1); // This makes the H1 element the firstChild.
//document.getElementById("box1").append(newH1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box1); // HINT - Insert new "To-do" card.
document.getElementById("fruits").prepend(newListItem);
//document.getElementById("fruits").append(newListItem);

//const apple = document.getElementById("apple");
//document.getElementById("fruits").insertBefore(newListItem, apple);

/* What if they don't have IDs?
? const boxes = document.querySelectorAll(".box");
? document.body.insertBefore(newH1, boxes[1]);

? const listItems = document.querySelector("#fruits li");
? document.getElementById("fruits").insertBefore(newListItem,listItems[0]);
*/


// ! Step 3: Remove HTML Element
// document.getElementById("box1").removeChild(newH1);

