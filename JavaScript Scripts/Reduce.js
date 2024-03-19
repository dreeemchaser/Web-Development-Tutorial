// .reduce() - reduce elements of an array to a single value.

const prices = [10, 15, 17, 25, 40] ;

const total = prices.reduce(sum);

//console.log(`$ ${total}`);

function sum(previousElement, next){
    return previousElement + next ;
}

// simpler way of using the for loop.

const grades = [75, 50, 60, 78, 60];

const maxValue = grades.reduce(getMax);
const minValue = grades.reduce(getMin);
//console.log(maxValue);
//console.log(minValue);
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

