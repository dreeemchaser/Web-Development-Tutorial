    /*
!     DOM - Document Object Model
?     OBJECT{} that represents the page you see in the web browser and provides you with an API to interact with.
!     Web browser constructs the DOM when it loads the HTML document, and structures all the elements in a treelike representation.
?     JavaScript can access the DOM to dynamically change the content, structure and style of a web page.
    */

    // Element Selectors

    /*
    !   1- document.getElementById() - element OR NULL
    !   2- document.getElementsClassName() - HTML Collection
    !   3- document.getElementsByTagName() - HTML Collection
    !   4- document.querySelector() - First Element OR Null
    !   5- document.querySelectorAll() - Nodelist !
     */


    /* Example 1:
 !                             document.getElementByID()
    */
    const body = document.getElementById("body");
      body.style.justifyContent = "center";


     // H1 Element:
    const exampleOne = document.getElementById("example1");
    exampleOne.style.backgroundColor = "grey";
    exampleOne.style.fontFamily = "Monospace";
    exampleOne.style.borderRadius = "10px";
    exampleOne.style.width = "380px";
    exampleOne.style.padding = "10px 10px";
    exampleOne.style.textAlign = "center";
    exampleOne.textAlign = "center";
    exampleOne.textContent = "You are doing it kid."


    // Class of buttons

    const buttons = document.getElementsByClassName("example2");

    for (let button of buttons){
        button.style.backgroundColor = "lightblue";
        button.style.width = "100px";
        button.style.height = "30px";
        button.style.borderRadius = "20px";
        button.style.margin = "5px";
        button.style.margin = "5px";
    }

    // querySelector example !
    const helloBtn = document.querySelector(".hello");
    helloBtn.style.backgroundColor = "lightpink";
    helloBtn.style.width = "100px";
    helloBtn.style.height = "30px";
    helloBtn.style.borderRadius = "20px";
    helloBtn.style.margin = "5px";
    helloBtn.style.margin = "5px";
    helloBtn.addEventListener('click',
                                    () => exampleOne.textContent = "Hello!");

    const goodbyeBtn = document.querySelector(".goodbye");
    goodbyeBtn.style.backgroundColor = "lightpink";
    goodbyeBtn.style.width = "100px";
    goodbyeBtn.style.height = "30px";
    goodbyeBtn.style.borderRadius = "20px";
    goodbyeBtn.style.margin = "5px";
    goodbyeBtn.style.margin = "5px";
    goodbyeBtn.addEventListener('click',
        () => exampleOne.textContent = "Goodbye");

    const resetBtn = document.querySelector(".reset");
    resetBtn.style.backgroundColor = "lightpink";
    resetBtn.style.width = "100px";
    resetBtn.style.height = "30px";
    resetBtn.style.borderRadius = "20px";
    resetBtn.style.margin = "5px";
    resetBtn.style.margin = "5px";
    resetBtn.addEventListener('click',
        () => exampleOne.textContent = "You are doing it kid.");


    // ! <------------------------------------------------------------------------------------------------------------>


