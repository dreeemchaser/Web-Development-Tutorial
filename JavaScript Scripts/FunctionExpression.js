
///// Function Expressions


const numberss = [1,2,3,4,5,6];

const square = numberss.map(function(element){
    return Math.pow(element, 2);
});

const cubes = numberss.map(function(element){
    return Math.pow(element, 3);
});


const evenNumbers = numberss.filter(function(element){
    return element % 2 === 0;
});
const oddNumbers = numberss.filter(function(element){
    return element % 2 === 0;
});

const itotal = numberss.reduce(function(element, next){
    return element + next ;
});

//console.log(oddNumbers);
//console.log(evenNumbers);
//console.log(cubes);
//console.log(square);
//console.log(itotal);
