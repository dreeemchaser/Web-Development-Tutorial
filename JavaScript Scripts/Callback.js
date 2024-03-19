// Callback - function that is passed as an argument to another function.
/*
    used:
    -> reading a file
    -> network requests
    -> interacting with databases.
*/

function sum(callback, x, y){
    let result = x * y ;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

// sum(displayPage,78456,84156320);


function displayPage(result){
    document.getElementById("resultID").textContent = result;

}
