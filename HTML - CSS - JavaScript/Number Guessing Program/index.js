const minNum = 1; 
const maxNum = 10; 
const ans = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts  = 0 ; 
let guess ; 
let running = true ;

while (running) {

    guess = window.prompt("Guess a number between " + minNum + "-" + maxNum );
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid Number.");
    } else if ( guess < minNum || guess > maxNum) {
        window.alert("Guess a number in the provided range.");
    }   else {
        attempts++;1
        if (guess < ans){
            window.alert("Too Low, try again.");
        } else if (guess > ans) {
            window.alert("Too High, try again.");
        }
        else {
            window.alert("Correct !, the answer was "+ ans + " It took you " + attempts + " attempts.");
            running = false ; 
        } 
    }1
    
}
