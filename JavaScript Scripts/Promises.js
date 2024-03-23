// !  A promise is an OBJECT that manages ASYNCHRONOUS operations.
// ?  Wrap a PROMISE OBJECT around {ASYNCHRONOUS code}
// !  PENDING -> RESOLVED or REJECTED.

//Example Chores {in order}.


// .1 Walk the dog
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve(`You walk the dog 🐕`);
            } else {
                reject("You didn't walk the dog");
            }
             // Completion message.
        },1000);
    });
}

// .2 Clean the kitchen
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve(`You cleaned the kitchen 🧹`);
            } else {
                reject("You did not clean the kitchen.");
            }
        },2000);
    });
}

// .3 Take out the trash.
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true ;
            if (trashTakenOut) {
                resolve(`You take out the trash 🗑️`);
            } else {
                reject("You did not take out the trash.")
            }
        },500);
    })
}


walkDog().then(value => {console.log(value);return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("All the chores are done mate.")})
         .catch((error) => {console.log(error)});



async function doChores(){
    walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores.");
}

//!  Callback hell !
/*
walkDog( () => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("Chores are done mate."));
    })
});
 */
