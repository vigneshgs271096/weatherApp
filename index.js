let key = "542bc3079760ae620f12c874236a67a7";
let city = "chennai";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
let latitude, longitude;
let resultObj = {};

async function myFunction(event) {
	event.preventDefault();
	city = document.getElementById("location").value;
	apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
	getApiWeather(apiUrl);
}

async function getApiWeather(url) {
	const resultElement = document.querySelector(".result");
	const subResultElement = document.querySelector(".sub-result");
	try {
		let weatherObj = await (await fetch(url)).json();
		if(weatherObj.message == 'city not found') {
			resultElement.style.display = "flex";
			document.getElementById("description").textContent = weatherObj.message;
			return;
		}
		console.log(weatherObj.message == 'city not found')
		resultElement.style.display = "flex";
		subResultElement.style.display = "flex";
		const weatherIconCode = weatherObj.weather[0].icon;
		resultObj.iconUrl = `http://openweathermap.org/img/wn/${weatherIconCode}.png`;
		resultObj.cityName = weatherObj.name;
		resultObj.temperature = weatherObj.main.temp;
		resultObj.weatherDescription = weatherObj.weather[0].description;
		resultObj.windSpeed = weatherObj.wind.speed;
		resultObj.humidity = weatherObj.main.humidity;
		document.getElementById("temperature").textContent = resultObj.temperature + "°C";
		document.getElementById("city").textContent = resultObj.cityName;
		document.getElementById("humidity-value").textContent = resultObj.humidity + "%";
		document.getElementById("speed-value").textContent = resultObj.windSpeed + "kmph";
		document.getElementById("description").textContent = resultObj.weatherDescription;
	} catch(err) {
		console.log(err)
	}
}








// {
// 	"coord": {
// 			"lon": 80.2785,
// 			"lat": 13.0878
// 	},
// 	"weather": [
// 			{
// 					"id": 801,
// 					"main": "Clouds",
// 					"description": "few clouds",
// 					"icon": "02d"
// 			}
// 	],
// 	"base": "stations",
// 	"main": {
// 			"temp": 30.99,
// 			"feels_like": 35.33,
// 			"temp_min": 30.99,
// 			"temp_max": 30.99,
// 			"pressure": 1011,
// 			"humidity": 62
// 	},
// 	"visibility": 6000,
// 	"wind": {
// 			"speed": 5.14,
// 			"deg": 110
// 	},
// 	"clouds": {
// 			"all": 20
// 	},
// 	"dt": 1709289848,
// 	"sys": {
// 			"type": 1,
// 			"id": 9218,
// 			"country": "IN",
// 			"sunrise": 1709254498,
// 			"sunset": 1709297268
// 	},
// 	"timezone": 19800,
// 	"id": 1264527,
// 	"name": "Chennai",
// 	"cod": 200
// }
