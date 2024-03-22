const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😡";
    myBox.style.backgroundColor = "lightcoral";
});
document.addEventListener("keyup", event => {
    myBox.textContent = "😁";
    myBox.style.backgroundColor = "lightgreen";
});

document.addEventListener("keydown", evet => {
    console.log(evet.key);
        event.preventDefault(); // When the element scrolls off screen - you don't move with it.
    if(event.key.startsWith("Arrow")){
        switch (event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});