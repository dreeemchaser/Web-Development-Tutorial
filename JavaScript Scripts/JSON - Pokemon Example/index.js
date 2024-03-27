/*
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => {
            if(!response.ok){
                throw new Error ("Could not fetch resource");
            }
            return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

 */

// Async and Wait example

/*
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


        if (!response.ok){
            throw new Error ("Could not fetch resource");
        }

        const data = await response.json();// convert response to json() object.
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error){
        console.log(error);
    }
}
 */

async function fetchWeatherData(){
    try{
        const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6ea9654c20msh6197001fb5841aap109f3cjsne804b4cbf4f8',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
            }
        };
        const response  = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=5`, options);

        if (!response.ok){
            throw new Error ("Could not fetch resource");
        }
        const data = await response.json();// convert response to json() object.
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
}

fetchWeatherData();