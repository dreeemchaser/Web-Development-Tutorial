/*
?    eventListen = Listen for specific events to create interactive webpages.
!                 events: click, mouseover, mouseout.
?                  .addEventListener(event, callback).
 */

const myBox = document.getElementById("myBox");

function changeColor(event){
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
}

function createDIV(event){
    // Declare Box"
    const newDiv = document.createElement("div");
    //Add Attributes
    newDiv.style.backgroundColor = "lightgrey";
    newDiv.textContent = "Click to Delete ❌";
    newDiv.style.width = "150px";
    newDiv.style.height = "150px";
    newDiv.style.margin = "1px";
    newDiv.style.fontSize = "1.5rem";
    newDiv.style.fontWeight = "bold";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.textAlign = "center";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignContent = "center";
    newDiv.style.borderRadius = "25px";
    newDiv.style.border = "2px solid black";
    newDiv.id = "newDiv";

    //Add Box to DOM
    document.getElementById("myBody").append(newDiv);

    // add event listener??
    newDiv.addEventListener("click", deleteBox);


    function deleteBox(){
        // document.getElementById("box1").removeChild(newH1);
        document.getElementById("myBody").removeChild(newDiv);
    }
}



myBox.addEventListener("click",createDIV);
