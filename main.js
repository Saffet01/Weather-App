const currentDay = document.getElementById("currentDayInfo");
const currentDateInfo = document.getElementById("currentFullDateInfo");
const locationInput = document.getElementById("location");
const getButton = document.getElementById("getButton");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();

let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

currentDay.innerText = weekday[d.getDay()];

let fullDate = day + "/" + month + "/" + year
console.log(fullDate);

currentDateInfo.innerText = fullDate;

console.log(locationInput.value);

getButton.addEventListener('click', () =>{
    getData(locationInput.value);
});

function getData(cityName){
    const apiKey = "514b4e0e2bff74a6bfed8a07f448cbc7";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(baseUrl).then(res => res.json())
    .then(data => {
        const {name, main:{humidity, temp, feels_like}, wind:{speed}, } = data;
        console.log(name, humidity, temp, feels_like, speed);

        const humidityInfo = document.getElementById("humidity");
        humidityInfo.innerText = `Humidity: ${humidity}%`;

        const feelsLike = document.getElementById("feels-like");
        feelsLike.innerText = `Feels like: ${feels_like};`

        const windSpeed = document.getElementById("wind");
        windSpeed.innerText = `Wind Speed: ${speed} km/h`;

        const temperature = document.getElementById("weatherDegree");
        lastTemp = Math.floor(temp/1);
        temperature.innerText = `${lastTemp}`;

    })
    .catch(err => console.error(err));
}

