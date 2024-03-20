/*
    ! Closure is a function defined inside another function.
    ? inner function has access to the variables and scope of the outer function
    ! Allows PRIVATE variables and STATE maintenance (used in frameworks - React, Vue, Angular).
    Benefit: any variables are considered private.
 */


function outer(){

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}


// Closure can maintain the state of a variable
function createCounter(){
    let count = 0 ;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function  getCount(){
        return count;
    }
    return {increment, getCount};
}

const counter = createCounter();
//counter.increment();
//counter.increment();
//counter.increment();

//console.log(`The current count is ${counter.getCount()}`);


// Gaming Example

function createGame(){
    let score = 0 ;

    function increaseScore(points){
        score +=points;
        console.log(`+${points}`);
    }

    function decreaseScore(points){
        score-=points;
        console.log(`-${points}`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore,decreaseScore,getScore}
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`Final Score is ${game.getScore()} pts`);
