document.addEventListener("DOMContentLoaded", function (){
    const cityDisplay = document.getElementById("cityDisplay");
    const countryDisplay = document.getElementById("countryDisplay");
    const tempDisplay = document.getElementById("tempDisplay");
    const humidityDisplay = document.getElementById("humidityDisplay");
    const descDisplay = document.getElementById("descDisplay");
    const reportButton = document.getElementById("getReportBtn");
    const cityInput = document.getElementById("cityInput");

    document.getElementById("getReportBtn").addEventListener("click", fetchWeatherData);
    async function fetchWeatherData(){
        const cityName = cityInput.value;

        if(cityName === ""){
            alert("Please Enter a valid City");
            return;
        }

        try{
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '6ea9654c20msh6197001fb5841aap109f3cjsne804b4cbf4f8',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`;
            const response  = await fetch(url, options);

            if (!response.ok){
                throw new Error ("Could not fetch resource");
            }
            const data = await response.json();// convert response to json() object.

            //! Get Temperature:
            const temperature = data.current.temp_c;
            //! Get Country:
            const country = data.location.country;
            //! Get humidity:
            const humidity = data.current.humidity
            //! Get condition:
            const condition = data.current.condition.text;
            //! Get icon:
            const icon = data.current.condition.icon;
            const weatherIconImg = document.getElementById("weatherIcon");


            //? City:
            cityDisplay.textContent= cityName;
            //? Country:
            countryDisplay.textContent = `Country: ${country}`;
            //? Degree
            tempDisplay.textContent = `Temperature: ${temperature}°C`;
            //? Humidity
            humidityDisplay.textContent = `Humidity: ${humidity}`;
            //? Condition
            descDisplay.textContent = `Condition:${condition} `;
            //? Weather Icon
            weatherIconImg.src = icon;
            weatherIconImg.style.display = "flex";

        }
        catch (error){
            console.log(error);
            alert("An error occurred while fetching the weather data.");
        }
    }

});