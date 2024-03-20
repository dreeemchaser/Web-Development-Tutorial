/*
    setTimeout() -> function in javaScript that allows you to schedule the execution of a function after an amount of time (miliseconds)
    Times are approximate (workload of JS runtime environment).

    setTimeout(callback, delay);
*/



//const timeoutID = setTimeout( () => window.alert("Hello"), 3000);

//clearTimeout(timeoutID);

let timeoutID ; 

function startTimer(){
    timeoutID = setTimeout( () => window.alert("Hello World! "), 3000 );
    console.log("Started.");
}

function clearTimer(){
    clearTimeout(timeoutID);
    console.log("CLEARED.");
}