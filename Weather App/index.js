const weatherForm = document.querySelector('.weather-form')
const cityInput = document.querySelector('.cityInput')
const card = document.querySelector('.card')
const apiKey = "399cda32cf2d0350b9fccc63ad7acebb";

weatherForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const city = cityInput.value;
    console.log(city)
    if(city){
        try {
           const weatherData = await getWeatherData(city);
           displayWeatherinfo(weatherData)
            
        } catch (error) {
            console.log(error);
            displayError(error)
        }
    }
    else{
        displayError('Pls Enter city name')
    }

})

async function  getWeatherData(city){
     const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
     `
     const response = await fetch(apiurl)
     console.log(response)

     if(!response.ok){
        throw new Error("Colud not fetch the weather data of your city")
     }
     else {
        return await response.json();
     }
}

function displayWeatherinfo(data){
    console.log(data);

    const {
        name: city,
        main: {temp, humidity},
        weather: [{description , id}]} = data;
        card.textContent = '';

        const cityDisplay = document.createElement("h1")
        const tempDisplay = document.createElement("p")
        const humiditydisplay = document.createElement("p")
        const descriptiondisplay = document.createElement("p")
        const emojidisplay = document.createElement("p")
        
        card.classList.remove('hide')

        cityDisplay.textContent = city;
        card.classList.add("citydisplay")
        card.appendChild(cityDisplay)

        tempDisplay.textContent =`${(temp-273).toFixed(1)}°C`;
        card.classList.add("tempdisplay")
        card.appendChild(tempDisplay)

        humiditydisplay.textContent =`${humidity}%`;
        card.classList.add("humditydisplay")
        card.appendChild(humiditydisplay)

        descriptiondisplay.textContent = description;
        card.classList.add("descdisplay")
        card.appendChild(descriptiondisplay)

        emojidisplay.textContent = displayEmoji(id);
        card.classList.add("emojidisplay")
        card.appendChild(emojidisplay)
}


function displayEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⚡";
        case (weatherId >= 300 && weatherId < 400):
            return "⛈️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){
    console.log(message);
    const errorDisplay = document.createElement('p')
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errordisplay")

    card.textContent='';
    card.classList.remove('hide')
    card.appendChild(errorDisplay)

}