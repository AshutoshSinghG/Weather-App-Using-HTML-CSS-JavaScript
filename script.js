/* 
Weather App By Ashutosh Singh
instagram: @ashutoshsingh.me
GitHub : @ashutoshsinghg
*/ 

const apiKey = "0f8fffb4cab3331c9cffd6096ee4d8f1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const dates = document.querySelector(".todayDates");
const times = document.getElementById("todayTime");
let date = new Date();

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + "°C";
        document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".cond").innerHTML = data.weather[0].main;


        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://bit.ly/45oTQPL";
            document.querySelector(".card").style.background = "#090979";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://bit.ly/43kSe8a";
            document.querySelector(".card").style.background = "#fc466b";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://bit.ly/420gwD2";
            document.querySelector(".card").style.background = "#fd1d1d";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://bit.ly/3MzeOmK";
            document.querySelector(".card").style.background = "#097925";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://bit.ly/3Mp0NI5";
            document.querySelector(".card").style.background = "#0066cc";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://bit.ly/42WJd57";
            document.querySelector(".card").style.background = "#660033";
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "https://t.ly/Q4Hk";
            document.querySelector(".card").style.background = "#666699";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);



    // Updating dates
    const currentMonth = date.getMonth();
    switch (currentMonth) {
        case 0:
            dates.innerHTML = `${date.getDate()} Jan ${date.getFullYear()}`
            break;
        case 1:
            dates.innerHTML = `${date.getDate()} Feb ${date.getFullYear()}`
            break;
        case 2:
            dates.innerHTML = `${date.getDate()} Mar ${date.getFullYear()}`
            break;
        case 3:
            dates.innerHTML = `${date.getDate()} Apr ${date.getFullYear()}`
            break;
        case 4:
            dates.innerHTML = `${date.getDate()} May ${date.getFullYear()}`
            break;
        case 5:
            dates.innerHTML = `${date.getDate()} Jun ${date.getFullYear()}`
            break;
        case 6:
            dates.innerHTML = `${date.getDate()} Jul ${date.getFullYear()}`
            break;
        case 7:
            dates.innerHTML = `${date.getDate()} Aug ${date.getFullYear()}`
            break;
        case 8:
            dates.innerHTML = `${date.getDate()} Sept. ${date.getFullYear()}`
            break;
        case 9:
            dates.innerHTML = `${date.getDate()} Oct. ${date.getFullYear()}`
            break;
        case 10:
            dates.innerHTML = `${date.getDate()} Nov ${date.getFullYear()}`
            break;
        case 11:
            dates.innerHTML = `${date.getDate()} Dec ${date.getFullYear()}`
            break;
    }

    // Updating times       
    function leftInterval() {
        const left = document.getElementById('todayTime')
        let leftDate = new Date();
        let hours = leftDate.getHours();
        let minutes = leftDate.getMinutes();
        let seconds = leftDate.getSeconds();

        if (hours == 0) {
            hours = 12;
        }

        if (hours > 12) {
            hours = hours - 12;
        }
        left.innerHTML = `${hours}h : ${minutes}m : ${seconds}s`
    }
    setInterval(leftInterval, 1000);

})

