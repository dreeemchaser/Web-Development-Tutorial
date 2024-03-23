// !  A promise is an OBJECT that manages ASYNCHRONOUS operations.
// ?  Wrap a PROMISE OBJECT around {ASYNCHRONOUS code}
// !  PENDING -> RESOLVED or REJECTED.

//Example Chores {in order}.


// .1 Walk the dog
function walkDog(callback){
    setTimeout(() => {
        console.log(`You walk the dog.`);
        callback();
        }
        ,1000);
}

// .2 Clean the kitchen
function cleanKitchen(callback){
    setTimeout(() => {
            console.log(`You cleaned the kitcen.`);
            callback();
            },2500);
}

// .3 Take out the trash.
function takeOutTrash(){
    setTimeout(() => {
            console.log(`You take out the trash.`);}
        ,500);
}

walkDog(() =>{
    cleanKitchen(() => {
        takeOutTrash(() => console.log('you have finished all your chores mate.'));
    })
});