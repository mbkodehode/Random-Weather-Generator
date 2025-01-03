class Weather {
    constructor() {
        this.temperature = 0;
        this.condition = "";
        this.cloudiness = 0;
        this.windspeed = 0;
    }
    updateWeather() {
        this.temperature = Math.floor(Math.random() * 50) - 10;
        this.cloudiness = Math.floor(Math.random() * 100);
        this.windspeed = Math.floor(Math.random() * 100);
        if (this.temperature <= 0) {
            this.condition = ["snow"];
        } else {
            let rand = Math.floor(Math.random() * 2);
                if (rand <= 0.5) {
                this.condition = ["rain",];
            }else{
                this.condition = ["clear"];
            }
        }
    }
}
let weather = new Weather();
weather.updateWeather();
let interval = setInterval(() => {
    weather.updateWeather();
    document.getElementById("temperature-value").textContent = weather.temperature;
    document.getElementById("condition-value").textContent = weather.condition;
    document.getElementById("cloudiness-value").textContent = weather.cloudiness;
    document.getElementById("windspeed-value").textContent = weather.windspeed;


const animation = document.getElementById("animation");
animation.classList.remove("snowy-animation", "rain-animation", "clear-animation");

if (weather.condition[0] === "rain") {
    animation.classList.add("snow-animation");
} else if (weather.condition[0] === "rain") {
    animation.classList.add("rain-animation");
} else if (weather.condition[0] === "clear") {
    animation.classList.add("clear-animation");
} 


if (weather.condition[0] === "rain") {
    animation.classList.add("rain-animation");
    setInterval(createRainElement, 10);
  } else if (weather.condition[0] === "snow") {
    setInterval(createSnowElement, 10);
  }
}, 3000);
function createRainElement() {
    const rain = document.createElement("div");
    rain.classList.add("rain");
    rain.innerText = "💧"
    rain.style.top = `${Math.random() * 100}%`;
    rain.style.left = `${Math.random() * 100}%`;
    rain.style.animationDelay = `${Math.random() * 2}s`;
    rain.style.animationDuration = `${Math.random() * 1 + 2}s`;
    document.getElementsByClassName("animation")[0].appendChild(rain);

    rain.addEventListener("animationend", () => {
        if (rain.classList.contains("snow") || rain.classList.contains("clear")) {
            rain.remove();
        }
    });
    };



function createSnowElement() {
    const snow = document.createElement("div");
    snow.classList.add("snow");
    snow.innerText = "❄️"
    snow.style.left = `${Math.random() * 100}%`
    snow.style.animationDuration = `${Math.random() * 1 + 2}s`
    document.getElementById("animation").appendChild(snow);
    
    if (classList.contains("rain, clear")) {
        snow.remove();
    };
}


weather.updateWeather();
setInterval(() => {
createRainElement();
}, 10);
clearInterval(interval);

