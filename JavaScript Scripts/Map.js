
// Map() -> Method NB: RETURNS A NEW ARRAY

const dates = ["2024-01-10", "2024-02-14", "2028-06-01", "2027-01-12"];
const newDates = dates.map(formatDate);

//console.log(newDates);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]} - Month /${parts[2]} - Day /${parts[0]} - Year`;
}

