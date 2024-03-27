// To-Do List using JS!

const addBtn = document.querySelector(".add");

const input = document.querySelector(".input-group");

function addToDo(){
    const text = document.createElement("input");
    text.type = "text";
    text.placeholder = "    Start typing here...";
    text.style.width = "100%";
    text.style.margin = "2px"
    text.style.padding = "5px 10px"
    text.style.borderRadius = "8px"
    text.style.border = "none";

    const btnDelete = document.createElement("a");
    btnDelete.className = "delete";
    btnDelete.innerHTML = "&times";
    btnDelete.style.margin = "2px"
    btnDelete.style.borderRadius = "5px"
    btnDelete.addEventListener("click", removeInput);

    const flex = document.createElement("div");
    flex.className = "flex";

    input.appendChild(flex);
    flex.appendChild(text);
    flex.appendChild(btnDelete);
}

function removeInput(){
    this.parentElement.remove();
}

addBtn.addEventListener("click", addToDo);
