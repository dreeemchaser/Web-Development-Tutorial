// Date(year, month, day, hour, minute, second, ms)
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getHours();
const seconds = date.getHours();
const dayOfWeek = date.getDay();

/*
    console.log(year);
    console.log(month);
    console.log(day);
    console.log(hour);
    console.log(minutes);
    console.log(seconds);
    console.log(dayOfWeek);
*/

// Set Date:
const newDate = new Date();
newDate.setFullYear(2026);
newDate.setMonth(1);
newDate.setDate(1);
newDate.setHours(17);
newDate.setMinutes(54);

//console.log(newDate);

// Compare Dates:

const date2 = new Date("2023-12-31");
const date1 = new Date("2024-01-01");
/*
    if (date2 > date1){
        console.log("Happy New Year!");
    } else {
        console.log("Happy Old year I guess..");
    }
 */

