// CONST: 
//const unitFrom = document.getElementById("temperatureFrom");
//const unitTo = document.getElementById("temperatureTo");
const userInput = document.getElementById("inputAmount");
const result = document.getElementById("result");

function convert() {
    const unitFrom = document.getElementById("temperatureFrom");
    const textFrom = unitFrom.options[unitFrom.selectedIndex].text;

    const unitTo = document.getElementById("temperatureTo");
    const textTo = unitTo.options[unitTo.selectedIndex].text;

    let tempValue;

    if (textFrom === "Fahrenheit" && textTo === "Celsius") {
        tempValue = (Number(userInput.value) - 32) * (5 / 9);
        result.textContent = tempValue.toFixed(1) + "°C";
    } else if (textFrom === "Fahrenheit" && textTo === "Kelvin") {
        tempValue = (Number(userInput.value) - 32) * (5 / 9) + 273.15;
        result.textContent = tempValue.toFixed(1) + " K";
    } else if (textFrom === "Fahrenheit" && textTo === "Fahrenheit") {
        result.textContent = "Cannot convert from Fahrenheit to Fahrenheit. " +
                             "Please select a different selector.";
    } else if (textFrom === "Celsius" && textTo === "Fahrenheit") {
        tempValue = (Number(userInput.value) * 9 / 5) + 32;
        result.textContent = tempValue.toFixed(1) + "°F";
    } else if (textFrom === "Celsius" && textTo === "Kelvin") {
        tempValue = Number(userInput.value) + 273.15;
        result.textContent = tempValue.toFixed(1) + " K";
    } else if (textFrom === "Celsius" && textTo === "Celsius") {
        result.textContent = "Cannot convert from Fahrenheit to Fahrenheit. Please select a different selector.";
    } else if (textFrom === "Kelvin" && textTo === "Celsius") {
        tempValue = Number(userInput.value) - 273.15;
        result.textContent = tempValue.toFixed(1) + "°C";
    } else if (textFrom === "Kelvin" && textTo === "Fahrenheit") {
        tempValue = (Number(userInput.value) - 273.15) * 9 / 5 + 32;
        result.textContent = tempValue.toFixed(1) + "°F";
    } else if (textFrom === "Kelvin" && textTo === "Kelvin") {
        result.textContent = "Cannot convert from Fahrenheit to Fahrenheit. Please select a different selector.";
    }
}
